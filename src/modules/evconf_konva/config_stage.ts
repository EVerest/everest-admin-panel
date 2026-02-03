// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { StageConfig } from "konva/lib/Stage";
import clone from "just-clone";
import { Notyf } from "notyf";
import { ConnectionID, ModuleInstanceID } from "@/modules/evbc";
import { EverestModuleConfig } from "@/modules/evbc/index";
import EVConfigModel, { ConfigModelEvent } from "@/modules/evbc/config_model";
import { smart_increment_name } from "@/modules/evbc/utils";
import ModuleView, { ModuleViewEvent } from "./views/module";
import ModuleViewModel from "./view_models/module";
import ConfigStageContext, { ConfigStageContextEvent } from "./stage_context";
import ConnectionManager from "./connection_manager";
import { ClipboardSnapshot, CopiedModule, CopiedConnection } from "./types";
import { NORMAL_TEXT, TOOLTIP, SIZE, updateColors } from "./views/constants";
import { KonvaEventObject } from "konva/lib/Node";
import { Vector2d } from "konva/lib/types";
import { currentTheme, EverestThemeColors } from "@/plugins/vuetify";
import { i18n } from "@/plugins/i18n";
import { ComposerTranslation } from "vue-i18n";
import Stage = Konva.Stage;
import Layer = Konva.Layer;
import { TerminalShape } from "./views/shapes/terminal";

export default class ConfigStage {
  // view part
  _konva: {
    stage: Konva.Stage;
    tooltip: Konva.Text;
    static_layer: Konva.Layer;
    anim_layer: Konva.Layer;
    selectionRect: Konva.Rect;
  };

  _selectionRect: Konva.Rect;
  _isSelecting = false;
  _isPanning = false;
  _panStart: Vector2d = { x: 0, y: 0 };
  _selectionStart: Vector2d = { x: 0, y: 0 };
  _clipboard: ClipboardSnapshot | null = null;
  _pasteCount = 0;
  _autoZoomToFit = true;
  _resizeObserver: ResizeObserver;
  _currentColors: EverestThemeColors = currentTheme.colors;

  _connectionDragState: {
    active: boolean;
    sourceTerminalId: number;
    sourceModuleId: ModuleInstanceID;
    dragLine: Konva.Line;
    dragAvatar?: TerminalShape;
    compatibleModules: Set<ModuleInstanceID>;
  } | null = null;

  _module_views: Record<ModuleInstanceID, ModuleView> = {};

  // view model part
  _model: EVConfigModel = null;
  _module_vms: Record<ModuleInstanceID, ModuleViewModel> = {};

  _conn_man: ConnectionManager;

  onDeleteRequest?: (_count: number) => void;

  readonly context: ConfigStageContext;
  private _stage: Stage;
  private _bg: Konva.Rect;
  private _boundResizeStage: () => void;
  private _boundKeyDown: (e: KeyboardEvent) => void;
  private _boundHandleStageContextEvent: (_ev: ConfigStageContextEvent) => void;

  constructor(
    private config: StageConfig,
    context: ConfigStageContext,
    private notyf?: Notyf,
  ) {
    this._stage = new Konva.Stage(config) as unknown as Stage;

    this._stage.on("mousemove", (e: KonvaEventObject<MouseEvent>) => {
      if (this._connectionDragState?.active) {
        this._handle_connection_drag_move(e);
      }
    });
    this._stage.on("mouseup", (e: KonvaEventObject<MouseEvent>) => {
      if (this._connectionDragState?.active) {
        this._handle_connection_drag_end(e);
      }
    });

    // Bind this to the resize function. This is necessary to remove the listener later on.
    // This assignment is type-safe. No any is involved, and TypeScript will enforce the
    // correct function signature. There is no unsafe assignment here.
    // Disable the rule for these lines only to silence the false positives.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this._boundResizeStage = this.resizeStage.bind(this);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this._boundKeyDown = this._onKeyDown.bind(this);

    // allow drag with left and right mouse button
    Konva.dragButtons = [0, 2];
    // prevent context menu on right click
    this._stage.on("contextmenu", (e: KonvaEventObject<MouseEvent>) => e.evt.preventDefault());

    const tooltipLayer = new Konva.Layer({});

    const tooltip = new Konva.Text({
      text: "",
      fontFamily: NORMAL_TEXT.fontFamily,
      fontSize: 16,
      padding: 5,
      fill: (currentTheme.colors as unknown as EverestThemeColors)["on-secondary"],
      alpha: 0.75,
      visible: false,
      sceneFunc: function (context, shape) {
        const { width, height } = (shape as Konva.Text).size();
        const borderRadius = 3;

        context.beginPath();
        context.moveTo(borderRadius, 0);
        context.lineTo(width - borderRadius, 0);
        context.arcTo(width, 0, width, borderRadius, borderRadius);
        context.lineTo(width, height - borderRadius);
        context.arcTo(width, height, width - borderRadius, height, borderRadius);
        context.lineTo(borderRadius, height);
        context.arcTo(0, height, 0, height - borderRadius, borderRadius);
        context.lineTo(0, borderRadius);
        context.arcTo(0, 0, borderRadius, 0, borderRadius);
        context.closePath();
        context.fillStyle = shape.getAttr("fillColor") || currentTheme.colors.secondary;
        context.fill();

        (shape as Konva.Text)._sceneFunc(context);
      },
      ...TOOLTIP.position,
    });
    tooltip.setAttr("fillColor", currentTheme.colors.secondary);

    tooltipLayer.add(tooltip);

    const static_layer = new Konva.Layer({
      draggable: false,
    });
    this._reset_static_layer(static_layer);

    this._stage.on("mousedown", (e: KonvaEventObject<MouseEvent>) => this._onMouseDown(e));
    this._stage.on("mousemove", (e: KonvaEventObject<MouseEvent>) => this._onMouseMove(e));
    this._stage.on("mouseup", (e: KonvaEventObject<MouseEvent>) => this._onMouseUp(e));

    this._stage.on("wheel", (event: KonvaEventObject<WheelEvent>) => {
      this._autoZoomToFit = false;
      event.evt.preventDefault();
      const dx = event.evt.deltaX;
      const dy = event.evt.deltaY;

      this._konva.static_layer.position({
        x: this._konva.static_layer.x() - dx,
        y: this._konva.static_layer.y() - dy,
      });
      this._konva.static_layer.batchDraw();
    });

    this._stage.add(static_layer);
    this._stage.add(tooltipLayer);

    this._konva = {
      stage: this._stage,
      tooltip,
      static_layer,
      anim_layer: null,
      selectionRect: this._selectionRect,
    };

    this.context = context;
    context.set_container(this._stage.container());

    this.context.get_viewport_center = () => {
      const stage = this._konva.stage;
      const width = stage.width();
      const height = stage.height();
      const center = { x: width / 2, y: height / 2 };

      const transform = this._konva.static_layer.getAbsoluteTransform().copy().invert();
      const localCenter = transform.point(center);

      return {
        x: localCenter.x / SIZE.GRID,
        y: localCenter.y / SIZE.GRID,
      };
    };

    this._boundHandleStageContextEvent = this._handle_stage_context_event.bind(this);
    this.context.add_observer(this._boundHandleStageContextEvent);
    this.registerListeners();

    // Expose for Cypress testing

    if ((window as any).Cypress) {
      (window as any).configStage = this;
    }

    this._resizeObserver = new ResizeObserver(() => {
      this.resizeStage();
      // if (this._autoZoomToFit) {
      //   this.zoomToFit();
      // }
    });
    const container = document.getElementById(this.config.container as string);
    if (container) {
      this._resizeObserver.observe(container);
    }
  }

  private setNewPosAndScale(static_layer: Layer, newPos: { x: number; y: number }, newScale: number) {
    static_layer.scale({ x: newScale, y: newScale });
    static_layer.position(newPos);
    this._bg.width(this._stage.width() / newScale);
    this._bg.height(this._stage.height() / newScale);
    this._bg.setAbsolutePosition({ x: 0, y: 0 });
    static_layer.batchDraw();
  }

  private registerListeners() {
    window.addEventListener("keydown", this._boundKeyDown);
  }

  private unregisterListeners() {
    window.removeEventListener("keydown", this._boundKeyDown);
  }

  public destroy() {
    this._resizeObserver.disconnect();
    this.context.remove_observer(this._boundHandleStageContextEvent);
    this.unregisterListeners();
    this._stage.destroy();
  }

  public resizeStage(): void {
    // debugger;
    const container = document.getElementById(this.config.container as string) as HTMLDivElement;
    if (!container) {
      return;
    }

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    this._stage.width(containerWidth);
    this._stage.height(containerHeight);
  }

  public reset_view(): void {
    this.setNewPosAndScale(this._konva.static_layer, { x: 0, y: 0 }, 1);
  }

  public zoomIn(): void {
    this.zoom(1.2);
  }

  public zoomOut(): void {
    this.zoom(1 / 1.2);
  }

  public updateTheme(colors: EverestThemeColors) {
    this._currentColors = colors;
    updateColors(colors);

    this._konva.tooltip.setAttr("fillColor", colors.secondary);
    this._konva.tooltip.fill(colors["on-secondary"]);

    Object.values(this._module_views).forEach((view) => {
      view.updateTheme(colors);
    });

    if (this._conn_man) {
      this._conn_man.updateTheme();
    }

    this._konva.static_layer.batchDraw();
  }

  public zoomToFit(): void {
    this._autoZoomToFit = true;
    const padding = 50;
    const stageWidth = this._stage.width();
    const stageHeight = this._stage.height();

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let hasModules = false;

    Object.values(this._module_vms).forEach((vm) => {
      hasModules = true;
      const x = vm.grid_position.x * SIZE.GRID;
      const y = vm.grid_position.y * SIZE.GRID;

      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x + SIZE.FRAME_WIDTH);
      maxY = Math.max(maxY, y + SIZE.FRAME_HEIGHT);
    });

    if (!hasModules) {
      this.reset_view();
      return;
    }

    const boxWidth = maxX - minX;
    const boxHeight = maxY - minY;

    const scaleX = (stageWidth - 2 * padding) / boxWidth;
    const scaleY = (stageHeight - 2 * padding) / boxHeight;
    let scale = Math.min(scaleX, scaleY);

    // Limit max scale to 1 (don't zoom in too much if config is small)
    if (scale > 1) {
      scale = 1;
    }

    const centerX = minX + boxWidth / 2;
    const centerY = minY + boxHeight / 2;

    const newPos = {
      x: stageWidth / 2 - centerX * scale,
      y: stageHeight / 2 - centerY * scale,
    };

    this.setNewPosAndScale(this._konva.static_layer, newPos, scale);
  }

  private zoom(scaleBy: number): void {
    this._autoZoomToFit = false;
    const oldScale = this._konva.static_layer.scaleX();
    const newScale = oldScale * scaleBy;

    const center = {
      x: this._stage.width() / 2,
      y: this._stage.height() / 2,
    };

    const mousePointTo = {
      x: (center.x - this._konva.static_layer.x()) / oldScale,
      y: (center.y - this._konva.static_layer.y()) / oldScale,
    };

    const newPos = {
      x: center.x - mousePointTo.x * newScale,
      y: center.y - mousePointTo.y * newScale,
    };

    this.setNewPosAndScale(this._konva.static_layer, newPos, newScale);
  }

  set_model(model: EVConfigModel) {
    if (this._model) {
      // FIXME (aw): what to do here, cleanup?
      // - yes, we should definitely do a complete cleanup, but who owns all the views?
      // - all observers also need to be discarded etc.
    }

    this._conn_man = new ConnectionManager(this.context);
    this._reset_static_layer(this._konva.static_layer);
    this._konva.static_layer.add(this._conn_man.group);

    this._model = model;

    Object.keys(model._instances).forEach((id) => this._add_module_instance_to_stage(Number(id)));
    Object.keys(model._connections).forEach((id) => {
      try {
        this._add_connection_to_stage(Number(id));
      } catch (e) {
        console.warn(e);
      }
    });

    model.add_observer((ev) => this._handle_config_event(ev));

    this.zoomToFit();

    // setup listeners?
    // FIXME: this needs to be reworked!
    // this._konva.static_layer.destroyChildren();
  }

  _handle_config_event(ev: ConfigModelEvent) {
    if (ev.type === "MODULE_INSTANCE_ADDED") {
      this._add_module_instance_to_stage(ev.id);
    } else if (ev.type === "CONNECTION_ADDED") {
      this._add_connection_to_stage(ev.id);
    } else if (ev.type === "CONNECTION_DELETED") {
      this._conn_man.delete_connection(ev.id);
      this.context.unselect();
    } else if (ev.type === "MODULE_INSTANCE_DELETED") {
      // FIXME (aw): this needs to be refactored
      const id = ev.id;
      this._module_views[id].group.destroy();
      delete this._module_views[id];
      delete this._module_vms[id];
      this.context.unselect();
    }
  }

  cut() {
    this.copy();
    const selectedIds = this.context.get_selected_instances();
    selectedIds.forEach((id) => {
      this._model.delete_module_instance(id);
    });
    this.context.unselect();
  }

  copy() {
    const selectedIds = this.context.get_selected_instances();
    if (selectedIds.length === 0) return;

    const modules: CopiedModule[] = [];
    const connections: CopiedConnection[] = [];

    selectedIds.forEach((id) => {
      const instance = this._model.get_module_instance(id);
      if (instance) {
        modules.push({
          original_id: String(id),
          name: instance.id,
          type: instance.type,
          config: clone(instance.module_config),
          view_config: clone(instance.view_config),
        });
      }
    });

    Object.values(this._model.connections).forEach((conn) => {
      if (selectedIds.includes(conn.providing_instance_id) && selectedIds.includes(conn.requiring_instance_id)) {
        connections.push({
          provider_original_id: String(conn.providing_instance_id),
          provider_impl: conn.providing_impl_name,
          requirer_original_id: String(conn.requiring_instance_id),
          requirement: conn.requirement_name,
        });
      }
    });

    this._clipboard = {
      timestamp: Date.now(),
      modules,
      connections,
    };
    this._pasteCount = 0;

    if (this.notyf) {
      const t = (i18n as unknown as { global: { t: ComposerTranslation } }).global.t;
      this.notyf.success(t("configStage.modulesCopied"));
    }
  }

  paste() {
    if (!this._clipboard) return;

    this._pasteCount++;
    const snapshot = this._clipboard;
    const offset = { x: 2 * this._pasteCount, y: 2 * this._pasteCount };

    const idMap = new Map<string, ModuleInstanceID>();
    const existingNames = new Set(this._model.get_existing_module_ids());
    const newInstanceIds: ModuleInstanceID[] = [];

    snapshot.modules.forEach((mod) => {
      const newName = smart_increment_name(mod.name, existingNames);
      existingNames.add(newName);

      const newViewConfig = clone(mod.view_config);
      newViewConfig.position.x += offset.x;
      newViewConfig.position.y += offset.y;

      const newId = this._model.add_new_module_instance(
        mod.type,
        newName,
        clone(mod.config) as unknown as EverestModuleConfig,
        newViewConfig,
      );
      idMap.set(mod.original_id, newId);
      newInstanceIds.push(newId);
    });

    snapshot.connections.forEach((conn) => {
      const providerId = idMap.get(conn.provider_original_id);
      const requirerId = idMap.get(conn.requirer_original_id);

      if (providerId !== undefined && requirerId !== undefined) {
        this._model.add_connection({
          providing_instance_id: providerId,
          providing_impl_name: conn.provider_impl,
          requiring_instance_id: requirerId,
          requirement_name: conn.requirement,
        });
      }
    });

    this.context.select_instances(newInstanceIds);
  }

  requestDelete() {
    const selectedIds = this.context.get_selected_instances();
    if (selectedIds.length > 0 && this.onDeleteRequest) {
      this.onDeleteRequest(selectedIds.length);
    }

    const selectedConnectionId = this.context.get_selected_connection();
    if (selectedConnectionId !== null) {
      this._model.delete_connection(selectedConnectionId);
      this.context.unselect();
    }
  }

  deleteSelected() {
    const selectedIds = this.context.get_selected_instances();
    selectedIds.forEach((id) => {
      this._model.delete_module_instance(id);
    });
    this.context.unselect();
  }

  _onKeyDown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    const cmd = e.metaKey || e.ctrlKey;

    if (cmd && e.key === "c") {
      this.copy();
      e.preventDefault();
    } else if (cmd && e.key === "v") {
      this.paste();
      e.preventDefault();
    } else if (cmd && e.key === "x") {
      this.cut();
      e.preventDefault();
    } else if (e.key === "Delete" || e.key === "Backspace") {
      this.requestDelete();
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      this.moveSelection(0, -1);
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      this.moveSelection(0, 1);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      this.moveSelection(-1, 0);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      this.moveSelection(1, 0);
      e.preventDefault();
    }
  }

  _onMouseDown(e: KonvaEventObject<MouseEvent>) {
    // If we clicked on a module or connection, let them handle it
    if (e.target !== this._stage && e.target !== this._bg) {
      return;
    }

    const pos = this._stage.getPointerPosition();
    if (!pos) return;

    if (e.evt.button === 0) {
      this._isSelecting = true;
      const transform = this._konva.static_layer.getAbsoluteTransform().copy();
      transform.invert();
      const layerPos = transform.point(pos);
      this._selectionStart = layerPos;

      this._selectionRect.width(0);
      this._selectionRect.height(0);
      this._selectionRect.position(layerPos);
      this._selectionRect.visible(true);
      this._selectionRect.moveToTop(); // Ensure selection rect is on top

      if (!e.evt.shiftKey) {
        this.context.unselect();
      }
    } else if (e.evt.button === 2) {
      this._isPanning = true;
      this._autoZoomToFit = false;
      this._stage.container().style.cursor = "grabbing";
      this._panStart = {
        x: pos.x - this._konva.static_layer.x(),
        y: pos.y - this._konva.static_layer.y(),
      };
    }
  }

  _onMouseMove(_e: KonvaEventObject<MouseEvent>) {
    if (this._isSelecting) {
      const pos = this._stage.getPointerPosition();
      if (!pos) return;

      const transform = this._konva.static_layer.getAbsoluteTransform().copy();
      transform.invert();
      const layerPos = transform.point(pos);

      const x = Math.min(this._selectionStart.x, layerPos.x);
      const y = Math.min(this._selectionStart.y, layerPos.y);
      const w = Math.abs(layerPos.x - this._selectionStart.x);
      const h = Math.abs(layerPos.y - this._selectionStart.y);

      this._selectionRect.position({ x, y });
      this._selectionRect.width(w);
      this._selectionRect.height(h);
      this._konva.static_layer.batchDraw();
    } else if (this._isPanning) {
      const pos = this._stage.getPointerPosition();
      if (!pos) return;

      this._konva.static_layer.position({
        x: pos.x - this._panStart.x,
        y: pos.y - this._panStart.y,
      });
      this._konva.static_layer.batchDraw();
    }
  }

  _onMouseUp(e: KonvaEventObject<MouseEvent>) {
    if (this._isSelecting) {
      this._isSelecting = false;
      this._selectionRect.visible(false);

      const box = this._selectionRect.getClientRect();
      const selectedIds: ModuleInstanceID[] = [];

      for (const [id, view] of Object.entries(this._module_views)) {
        if (Konva.Util.haveIntersection(box, view.group.getClientRect())) {
          selectedIds.push(Number(id));
        }
      }

      if (selectedIds.length > 0) {
        if (e.evt.shiftKey) {
          this.context.add_instances(selectedIds);
        } else {
          this.context.select_instances(selectedIds);
        }
      }

      this._konva.static_layer.batchDraw();
    }
    if (this._isPanning) {
      this._stage.container().style.cursor = "default";
    }
    this._isPanning = false;
  }

  _handle_stage_context_event(ev: ConfigStageContextEvent) {
    if (!this._model) return;

    if (ev.type === "ADD_CONNECTION") {
      // FIXME (aw): check return value and deal with it
      this._model.add_connection(ev.connection);
    } else if (ev.type === "SHOW_TOOLTIP") {
      this._konva.tooltip.text(ev.text);
      this._konva.tooltip.show();
    } else if (ev.type === "HIDE_TOOLTIP") {
      this._konva.tooltip.hide();
    } else if (ev.type === "SELECT") {
      if (ev.selection.type === "TERMINAL") {
        const terminal = ev.selection.terminal;
        this._apply_ghosting(ev.selection.moduleId, terminal.id, terminal.interface, terminal.type);
      } else {
        this._reset_ghosting();
      }
    } else if (ev.type === "TRY_AUTO_CONNECT") {
      const sourceTerminal = ev.source;
      const targetModuleId = ev.targetModuleId;

      const pointerPos = this._stage.getPointerPosition();
      let localPointer = { x: 0, y: 0 };

      if (pointerPos) {
        const transform = this._konva.static_layer.getAbsoluteTransform().copy().invert();
        localPointer = transform.point(pointerPos);
      }

      const targetVm = this._module_vms[targetModuleId];
      const targetView = this._module_views[targetModuleId];

      if (!targetVm || !targetView) return;

      let closestTerminalId = -1;
      let minDist = Infinity;

      targetVm.terminal_lookup.forEach((t, id) => {
        if (
          t.terminal.type !== sourceTerminal.type &&
          (sourceTerminal.type === "provide"
            ? this._model.interfaces_match(sourceTerminal.interface, t.terminal.interface)
            : this._model.interfaces_match(t.terminal.interface, sourceTerminal.interface))
        ) {
          const pos = targetView.get_terminal_placement(id);
          // If we have a pointer, use it to disambiguate. If not, assume 0 distance or skip optimization
          let dist = 0;
          if (pointerPos) {
            dist = Math.hypot(pos.x - localPointer.x, pos.y - localPointer.y);
          }

          if (dist < minDist) {
            minDist = dist;
            closestTerminalId = id;
          }
        }
      });

      if (closestTerminalId !== -1) {
        const sourceIsProvide = sourceTerminal.type === "provide";
        const provideId = sourceIsProvide ? sourceTerminal.module_instance_id : targetModuleId;
        const requireId = sourceIsProvide ? targetModuleId : sourceTerminal.module_instance_id;
        const provideImpl = sourceIsProvide
          ? sourceTerminal.id
          : targetVm.terminal_lookup[closestTerminalId].terminal.id;
        const requireName = sourceIsProvide
          ? targetVm.terminal_lookup[closestTerminalId].terminal.id
          : sourceTerminal.id;

        // Reset any ghosting/selection before adding connection
        this._reset_ghosting();

        this._model.add_connection({
          providing_instance_id: provideId,
          providing_impl_name: provideImpl,
          requiring_instance_id: requireId,
          requirement_name: requireName,
        });
      }
    }
  }

  _add_module_instance_to_stage(id: ModuleInstanceID) {
    const module_view_model = new ModuleViewModel(this._model, id, this.context);
    this._module_vms[id] = module_view_model;

    if (!module_view_model.grid_position) {
      // FIXME (aw): more clever positioning, depending on panvas settings
      module_view_model.grid_position = {
        x: id,
        y: id,
      };
    }

    const module_view = new ModuleView(module_view_model);
    module_view.updateTheme(this._currentColors);
    module_view.add_observer((ev) => this._handle_module_view_event(ev, id));
    this._module_views[id] = module_view;

    this._konva.static_layer.add(module_view.group);
  }

  _add_connection_to_stage(id: ConnectionID) {
    // this._konva.static_layer.add(this._conn_man.group);
    // this._conn_man.group.add(new Konva.Rect({ width: 40, height: 40, fill: "black" }));
    // return;
    const cxn = this._model._connections[id];
    const requiring_view_model = this._module_vms[cxn.requiring_instance_id];
    const requiring_view = this._module_views[cxn.requiring_instance_id];
    const providing_view_model = this._module_vms[cxn.providing_instance_id];
    const providing_view = this._module_views[cxn.providing_instance_id];

    const providing_terminal_lookup_id = providing_view_model.get_terminal_lookup_id(
      cxn.providing_impl_name,
      "provide",
    );
    if (providing_terminal_lookup_id === -1) {
      throw Error(
        `Couldn't add connection to stage, terminal ${cxn.providing_impl_name} not found on ${providing_view_model.type}.`,
      );
    }

    const requiring_terminal_lookup_id = requiring_view_model.get_terminal_lookup_id(
      cxn.requirement_name,
      "requirement",
    );
    if (requiring_terminal_lookup_id === -1) {
      throw Error(
        `Couldn't add connection to stage, terminal ${cxn.requirement_name} not found on ${requiring_view_model.type}.`,
      );
    }

    this._conn_man.add_connection(
      id,
      { module_view: providing_view, terminal_lookup_id: providing_terminal_lookup_id },
      { module_view: requiring_view, terminal_lookup_id: requiring_terminal_lookup_id },
    );

    // connection manager
    // list of all connection views (id, connection view itself)
    // module_instance id => list of connection view models

    // what does the connection view need?
    // it needs the position of the terminals and their alignment
    // the TerminalShape itself knows its position and could also know it's alignment
    // therefore we would only need the two TerminalShapes of the corresponding ModulView, these could be accessible via the ModuleViews, which our
    // StageView would know about!
    // TerminalInfo
  }

  _reset_static_layer(static_layer: Konva.Layer) {
    static_layer.destroyChildren();
    this._bg = new Konva.Rect({
      width: this._stage.width(),
      height: this._stage.height(),
      fill: "rgba(255, 0, 0, 0)",
    });
    this._bg.on("pointerclick", () => this.context.unselect());
    static_layer.add(this._bg);

    this._selectionRect = new Konva.Rect({
      fill: "rgba(0, 161, 255, 0.3)",
      visible: false,
      listening: false,
    });
    static_layer.add(this._selectionRect);

    if (this._konva) {
      this._konva.selectionRect = this._selectionRect;
    }
  }

  private moveSelection(dx: number, dy: number) {
    const selectedIds = this.context.get_selected_instances();
    if (selectedIds.length === 0) return;

    // Moving one selected item will move all other selected items due to the
    // logic in ModuleViewModel's grid_position setter
    const firstId = selectedIds[0];
    const vm = this._module_vms[firstId];
    if (vm) {
      const currentPos = vm.grid_position;
      vm.grid_position = { x: currentPos.x + dx, y: currentPos.y + dy };
    }
  }

  _handle_module_view_event(ev: ModuleViewEvent, moduleId: ModuleInstanceID) {
    if (ev.type === "TERMINALS_UPDATED") {
      // ConnectionManager handles this internally via its own observers
    } else if (ev.type === "TERMINAL_DRAG_START") {
      this._handle_connection_drag_start(moduleId, ev.terminal_id);
    }
  }

  _apply_ghosting(moduleId: ModuleInstanceID, terminalName: string, interfaceName: string, type: string) {
    const compatibleModules = new Set<ModuleInstanceID>();

    Object.values(this._module_vms).forEach((otherVm) => {
      if (otherVm._instance_id === moduleId) return;

      // Find all compatible terminals on the target module
      const compatibleTerminals = otherVm.terminal_lookup.filter(
        (t) => t.terminal.interface === interfaceName && t.terminal.type !== type,
      );

      if (compatibleTerminals.length === 0) return;

      // Check if ALL compatible terminals are already connected to the source terminal
      const blockedTerminals = new Set<number>();

      // Iterate over ALL compatible terminals to find which ones are already connected
      compatibleTerminals.forEach((targetTerminal) => {
        const isConnected = Object.values(this._model._connections).some((conn) => {
          if (type === "provide") {
            return (
              conn.providing_instance_id === moduleId &&
              conn.providing_impl_name === terminalName &&
              conn.requiring_instance_id === otherVm._instance_id &&
              conn.requirement_name === targetTerminal.terminal.id
            );
          } else {
            return (
              conn.requiring_instance_id === moduleId &&
              conn.requirement_name === terminalName &&
              conn.providing_instance_id === otherVm._instance_id &&
              conn.providing_impl_name === targetTerminal.terminal.id
            );
          }
        });

        if (isConnected) {
          // Find the index of this terminal in the target VM
          const terminalIndex = otherVm.terminal_lookup.findIndex(
            (t) => t.terminal.id === targetTerminal.terminal.id && t.terminal.type === targetTerminal.terminal.type,
          );
          if (terminalIndex !== -1) {
            blockedTerminals.add(terminalIndex);
          }
        }
      });

      // Only add to compatible modules if there is at least one compatible terminal that is NOT blocked
      if (blockedTerminals.size < compatibleTerminals.length) {
        compatibleModules.add(otherVm._instance_id);
        // Store blocked terminals for this module to use later
        (otherVm as any)._tempBlockedTerminals = blockedTerminals;
      }
    });

    const ghostedModules = new Set<ModuleInstanceID>();

    Object.entries(this._module_views).forEach(([idStr, view]) => {
      const id = Number(idStr);
      if (id !== moduleId && !compatibleModules.has(id)) {
        view.group.opacity(0.3);
        ghostedModules.add(id);
        this._module_vms[id].highlight_compatible_terminals(interfaceName, type, new Set(), {
          moduleId,
          terminalId: terminalName,
        });
      } else if (compatibleModules.has(id)) {
        const blocked = (this._module_vms[id] as any)._tempBlockedTerminals || new Set();
        this._module_vms[id].highlight_compatible_terminals(interfaceName, type, blocked, {
          moduleId,
          terminalId: terminalName,
        });
        delete (this._module_vms[id] as any)._tempBlockedTerminals;
      } else if (id === moduleId) {
        // Also update the source module's terminals to show disabled state for incompatible ones
        // We pass an empty set for blocked terminals, as the compatibility check inside
        // highlight_compatible_terminals will handle disabling non-matching terminals.
        this._module_vms[id].highlight_compatible_terminals(interfaceName, type, new Set(), {
          moduleId,
          terminalId: terminalName,
        });
      }
    });

    this._conn_man.connections.forEach((connItem) => {
      connItem.view.opacity(0.1);
    });

    return compatibleModules;
  }

  _reset_ghosting() {
    Object.values(this._module_views).forEach((view) => {
      view.group.opacity(1);
      view.reset_highlight_terminals();
    });

    Object.values(this._module_vms).forEach((vm) => {
      vm.update_terminal_appearance();
    });

    this._conn_man.connections.forEach((connItem) => {
      connItem.view.opacity(1);
    });
  }

  _handle_connection_drag_start(moduleId: ModuleInstanceID, terminalId: number) {
    // Clear selection when starting a connection drag
    this.context.select_instances([]);

    const vm = this._module_vms[moduleId];
    const terminalInfo = vm.terminal_lookup[terminalId];
    const terminal = terminalInfo.terminal;
    const interfaceName = terminal.interface;
    const type = terminal.type;

    const compatibleModules = this._apply_ghosting(moduleId, terminal.id, interfaceName, type);

    const sourcePos = this._module_views[moduleId].get_terminal_placement(terminalId);
    const pointerPos = this._stage.getPointerPosition() || { x: sourcePos.x, y: sourcePos.y };
    const transform = this._konva.static_layer.getAbsoluteTransform().copy().invert();
    const localPointer = transform.point(pointerPos);

    const dragLine = new Konva.Line({
      points: [sourcePos.x, sourcePos.y, localPointer.x, localPointer.y],
      stroke: this._currentColors.secondary,
      strokeWidth: 4,
      dash: [10, 5],
      listening: false,
    });
    this._konva.static_layer.add(dragLine);

    const dragAvatar = new TerminalShape({
      terminal_type: type,
      terminal_id: -1,
      terminal_alignment: sourcePos.alignment,
      x: localPointer.x,
      y: localPointer.y,
    });
    dragAvatar.set_appearence("NORMAL");
    dragAvatar.scale({ x: 1.5, y: 1.5 });
    dragAvatar.listening(false);
    this._konva.static_layer.add(dragAvatar);

    this._module_views[moduleId]._terminal_views[terminalId].set_appearence("DRAG_ORIGIN");
    this._module_views[moduleId].group.clearCache();
    this._konva.static_layer.batchDraw();

    this._connectionDragState = {
      active: true,
      sourceTerminalId: terminalId,
      sourceModuleId: moduleId,
      dragLine,
      dragAvatar,
      compatibleModules,
    };
  }

  _handle_connection_drag_move(_e: Konva.KonvaEventObject<MouseEvent>) {
    if (!this._connectionDragState || !this._connectionDragState.dragLine) return;

    const pointerPos = this._stage.getPointerPosition();
    if (!pointerPos) return;

    const transform = this._konva.static_layer.getAbsoluteTransform().copy().invert();
    const localPointer = transform.point(pointerPos);

    const points = this._connectionDragState.dragLine.points();
    points[2] = localPointer.x;
    points[3] = localPointer.y;
    this._connectionDragState.dragLine.points(points);

    if (this._connectionDragState.dragAvatar) {
      this._connectionDragState.dragAvatar.position(localPointer);

      const sourceX = points[0];
      const sourceY = points[1];
      const dx = sourceX - localPointer.x;
      const dy = sourceY - localPointer.y;

      // Only rotate if we have moved a bit to avoid jitter
      if (dx * dx + dy * dy > 10) {
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90;
        this._connectionDragState.dragAvatar.rotation(angle);
      }
    }
  }

  _handle_connection_drag_end(_e: Konva.KonvaEventObject<MouseEvent>) {
    if (!this._connectionDragState) return;

    const { sourceModuleId, sourceTerminalId, compatibleModules, dragLine, dragAvatar } = this._connectionDragState;

    dragLine?.destroy();
    dragAvatar?.destroy();

    this._module_vms[sourceModuleId].update_terminal_appearance();

    this._reset_ghosting();
    this._konva.static_layer.batchDraw();

    const pointerPos = this._stage.getPointerPosition();
    if (pointerPos) {
      const transform = this._konva.static_layer.getAbsoluteTransform().copy().invert();
      const localPointer = transform.point(pointerPos);

      let targetModuleId: ModuleInstanceID | null = null;

      const shape = this._stage.getIntersection(pointerPos);
      if (shape) {
        let group = shape.getParent();
        while (group && group !== this._konva.static_layer) {
          const foundEntry = Object.entries(this._module_views).find(([_id, view]) => view.group === group);
          if (foundEntry) {
            const id = Number(foundEntry[0]);
            if (compatibleModules.has(id)) {
              targetModuleId = id;
            }
            break;
          }
          group = group.getParent();
        }
      }

      if (targetModuleId !== null) {
        const sourceVm = this._module_vms[sourceModuleId];
        const sourceTerminal = sourceVm.terminal_lookup[sourceTerminalId].terminal;
        const targetVm = this._module_vms[targetModuleId];
        const targetView = this._module_views[targetModuleId];

        let closestTerminalId = -1;
        let minDist = Infinity;

        targetVm.terminal_lookup.forEach((t, id) => {
          if (t.terminal.interface === sourceTerminal.interface && t.terminal.type !== sourceTerminal.type) {
            const pos = targetView.get_terminal_placement(id);
            const dist = Math.hypot(pos.x - localPointer.x, pos.y - localPointer.y);
            if (dist < minDist) {
              minDist = dist;
              closestTerminalId = id;
            }
          }
        });

        if (closestTerminalId !== -1) {
          const sourceIsProvide = sourceTerminal.type === "provide";
          const provideId = sourceIsProvide ? sourceModuleId : targetModuleId;
          const requireId = sourceIsProvide ? targetModuleId : sourceModuleId;
          const provideImpl = sourceIsProvide
            ? sourceTerminal.id
            : targetVm.terminal_lookup[closestTerminalId].terminal.id;
          const requireName = sourceIsProvide
            ? targetVm.terminal_lookup[closestTerminalId].terminal.id
            : sourceTerminal.id;

          this._model.add_connection({
            providing_instance_id: provideId,
            providing_impl_name: provideImpl,
            requiring_instance_id: requireId,
            requirement_name: requireName,
          });
        }
      }
    }

    this._connectionDragState = null;
  }
}
