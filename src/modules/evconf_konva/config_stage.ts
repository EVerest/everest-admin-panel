// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { StageConfig } from "konva/lib/Stage";
import clone from "just-clone";
import { Notyf } from "notyf";
import { ConnectionID, ModuleInstanceID } from "@/modules/evbc";
import { EverestModuleConfig } from "@/modules/evbc/index";
import EVConfigModel, { ConfigModelEvent } from "@/modules/evbc/config_model";
import { smart_increment_name } from "@/modules/evbc/utils";
import ModuleView from "./views/module";
import ModuleViewModel from "./view_models/module";
import ConfigStageContext, { ConfigStageContextEvent } from "./stage_context";
import ConnectionManager from "./connection_manager";
import { ClipboardSnapshot, CopiedModule, CopiedConnection } from "./types";
import { NORMAL_TEXT, TOOLTIP } from "./views/constants";
import { KonvaEventObject } from "konva/lib/Node";
import { Vector2d } from "konva/lib/types";
import { currentTheme } from "@/plugins/vuetify";
import { i18n } from "@/plugins/i18n";
import { ComposerTranslation } from "vue-i18n";
import Stage = Konva.Stage;
import Layer = Konva.Layer;

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

  _module_views: Record<ModuleInstanceID, ModuleView> = {};

  // view model part
  _model: EVConfigModel = null;
  _module_vms: Record<ModuleInstanceID, ModuleViewModel> = {};

  _conn_man: ConnectionManager;

  onDeleteRequest?: (count: number) => void;

  readonly context: ConfigStageContext;
  private _stage: Stage;
  private _bg: Konva.Rect;
  private _boundResizeStage: () => void;
  private _boundKeyDown: (e: KeyboardEvent) => void;

  constructor(
    private config: StageConfig,
    context: ConfigStageContext,
    private notyf?: Notyf,
  ) {
    this._stage = new Konva.Stage(config);

    // Bind this to the resize function. This is necessary to remove the listener later on.
    // This assignment is type-safe. No any is involved, and TypeScript will enforce the
    // correct function signature. There is no unsafe assignment here.
    // Disable the rule for this line only to silence the false positive.

    this._boundResizeStage = this.resizeStage.bind(this);
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
      fill: "white",
      alpha: 0.75,
      visible: false,
      sceneFunc: function (context, shape) {
        const { width, height } = shape.size();
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
        context.fillStyle = currentTheme.colors.secondary;
        context.fill();

        (shape as Konva.Text)._sceneFunc(context);
      },
      ...TOOLTIP.position,
    });

    tooltipLayer.add(tooltip);

    const static_layer = new Konva.Layer({
      draggable: false,
    });
    this._reset_static_layer(static_layer);

    this._stage.on("mousedown", (e: KonvaEventObject<MouseEvent>) => this._onMouseDown(e));
    this._stage.on("mousemove", (e: KonvaEventObject<MouseEvent>) => this._onMouseMove(e));
    this._stage.on("mouseup", (e: KonvaEventObject<MouseEvent>) => this._onMouseUp(e));

    this._stage.on("wheel", (event: KonvaEventObject<WheelEvent>) => {
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
    this.context.add_observer((ev) => this._handle_stage_context_event(ev));
    this.registerListeners();

    // Expose for Cypress testing

    if ((window as any).Cypress) {
      (window as any).configStage = this;
    }

    setTimeout(() => this.resizeStage(), 1500); // we have to wait for the animation of the splitpanes to finish
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
    window.addEventListener("resize", this._boundResizeStage);
    window.addEventListener("keydown", this._boundKeyDown);
  }

  private unregisterListeners() {
    window.removeEventListener("resize", this._boundResizeStage);
    window.removeEventListener("keydown", this._boundKeyDown);
  }

  public destroy() {
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

  private zoom(scaleBy: number): void {
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
      this._stage.container().style.cursor = "grabbing";
      this._panStart = {
        x: pos.x - this._konva.static_layer.x(),
        y: pos.y - this._konva.static_layer.y(),
      };
    }
  }

  _onMouseMove(e: KonvaEventObject<MouseEvent>) {
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
    if (ev.type === "ADD_CONNECTION") {
      // FIXME (aw): check return value and deal with it
      this._model.add_connection(ev.connection);
    } else if (ev.type === "SHOW_TOOLTIP") {
      this._konva.tooltip.text(ev.text);
      this._konva.tooltip.show();
    } else if (ev.type === "HIDE_TOOLTIP") {
      this._konva.tooltip.hide();
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
}
