// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { StageConfig } from "konva/lib/Stage";
import { ConnectionID, ModuleInstanceID } from "@/modules/evbc";
import EVConfigModel, { ConfigModelEvent } from "@/modules/evbc/config_model";
import ModuleView from "./views/module";
import ModuleViewModel from "./view_models/module";
import ConfigStageContext, { ConfigStageContextEvent } from "./stage_context";
import ConnectionManager from "./connection_manager";
import { NORMAL_TEXT, TOOLTIP, SIZE } from "./views/constants";
import { KonvaEventObject } from "konva/lib/Node";
import { currentTheme } from "@/plugins/vuetify";
import Stage = Konva.Stage;
import Layer = Konva.Layer;
import { ClipboardSnapshot, CopiedModule, CopiedConnection } from "./types";
import clone from "just-clone";
import { smart_increment_name } from "@/modules/evbc/utils";

export default class ConfigStage {
  // view part
  _konva: {
    stage: Konva.Stage;
    tooltip: Konva.Text;
    static_layer: Konva.Layer;
    anim_layer: Konva.Layer;
  };

  _module_views: Record<ModuleInstanceID, ModuleView> = {};
  _clipboard: ClipboardSnapshot | null = null;
  _pasteCount: number = 0;

  // view model part
  _model: EVConfigModel = null;
  _module_vms: Record<ModuleInstanceID, ModuleViewModel> = {};

  _conn_man: ConnectionManager;

  readonly context: ConfigStageContext;
  private _stage: Stage;
  private _bg: Konva.Rect;
  private _selectionRectangle: Konva.Rect;

  constructor(
    private config: StageConfig,
    context: ConfigStageContext,
  ) {
    this._stage = new Konva.Stage(config);

    // bind this to the resize function. This is necessary to remove the listener later on
    this.resizeStage = this.resizeStage.bind(this);

    // allow drag with left mouse button only (button 0) for module repositioning.
    // Right-click (button 2) panning is handled manually via layer.startDrag() below.
    // This ensures left-click on background starts the selection rectangle without
    // conflicting with module drag, and right-click pans the canvas.
    Konva.dragButtons = [0];
    // prevent context menu on right click
    this._stage.on("contextmenu", (e: KonvaEventObject<MouseEvent>) => e.evt.preventDefault());

    const tooltipLayer = new Konva.Layer({});

    const tooltip = new Konva.Text({
      text: "",
      fontFamily: NORMAL_TEXT.fontFamily,
      fontSize: 16,
      padding: 5,
      fill: currentTheme.colors["on-secondary"],
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
      draggable: false, // controlled manually for right-click panning
    });
    this._reset_static_layer(static_layer);

    /*
    // FR-016: System MUST NOT support zoom via mouse wheel
    this._stage.on("wheel", (event: KonvaEventObject<WheelEvent>) => {
      // FIXME (aw): review this code, got copied from Konva docs ...
      event.evt.preventDefault();

      const oldScale: number = static_layer.scaleX();
      const pointer: Vector2d = this._stage.getPointerPosition();

      if (!pointer) {
        return;
      }

      const mousePointTo = {
        x: (pointer.x - static_layer.x()) / oldScale,
        y: (pointer.y - static_layer.y()) / oldScale,
      };

      // if a trackpad does not give a proper delta, we have to reduce the speed,
      // because of the high amount of events triggered by a trackpad

      let delta: number;
      if (event.evt.deltaY === 1 || event.evt.deltaY === -1) {
        delta = event.evt.deltaY * 0.2;
      } else {
        delta = event.evt.deltaY;
      }

      // invert delta as it is unnatural otherwise
      delta = -delta;

      const zoomIntensity = 0.005; // Adjust this value to control the zoom speed
      const scaleBy = Math.exp(delta * zoomIntensity);

      const newScale = oldScale * scaleBy;

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      this.setNewPosAndScale(static_layer, newPos, newScale);
    });
    */

    this._stage.add(static_layer);
    this._stage.add(tooltipLayer);

    const selectionRectangle = new Konva.Rect({
      fill: "rgba(0,0,255,0.1)",
      visible: false,
      stroke: "blue",
      strokeWidth: 1,
      listening: false,
    });
    this._selectionRectangle = selectionRectangle;
    static_layer.add(selectionRectangle);

    let x1: number, y1: number, x2: number, y2: number;

    this._stage.on("contextmenu", (e) => {
      e.evt.preventDefault();
    });

    // Right-Click panning logic - enable layer dragging only when right-click is held
    this._stage.on("mousedown", (e) => {
      // Check for Right Click (button 2)
      if (e.evt.button === 2) {
        static_layer.draggable(true);
        // We need to start drag manually or let Konva handle next event?
        // Konva usually handles drag on mousedown, but we just enabled it.
        // It might pick up immediately or require another click?
        // Actually, changing property in mousedown might be too late for current event processing?
        // But let's try.
        // If not working, we can use startDrag().
        static_layer.startDrag();
      }
    });

    this._stage.on("mouseup dragend", () => {
      // Disable layer dragging after release (if it was enabled)
      if (static_layer.draggable()) {
        static_layer.draggable(false);
      }
    });

    this._stage.on("mousedown", (e) => {
      // do nothing if we mousedown on any shape
      if (e.target !== this._stage && e.target !== this._bg) {
        return;
      }
      // Only left button for selection
      if (e.evt.button !== 0) {
        return;
      }

      e.evt.preventDefault();
      x1 = static_layer.getRelativePointerPosition().x;
      y1 = static_layer.getRelativePointerPosition().y;
      x2 = x1;
      y2 = y1;

      // Access current selection rectangle (it may be recreated)
      this._selectionRectangle.width(0);
      this._selectionRectangle.height(0);
      this._selectionRectangle.visible(true);

      // Clear selection unless shift key is pressed (additive selection covered in FR-003 says clears previous)
      if (!e.evt.shiftKey) {
        this.context.unselect();
      }
    });

    this._stage.on("mousemove", (e) => {
      // Access current selection rectangle
      if (!this._selectionRectangle.visible()) {
        return;
      }
      e.evt.preventDefault();
      const pos = static_layer.getRelativePointerPosition();
      x2 = pos.x;
      y2 = pos.y;

      this._selectionRectangle.setAttrs({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
      });
    });

    this._stage.on("mouseup", (e) => {
      // Access current selection rectangle
      if (!this._selectionRectangle.visible()) {
        return;
      }

      // Ensure rectangle is hidden regardless of what happens next.
      // Use setTimeout so any pending click events can process first.
      const hideRectangle = () => {
        this._selectionRectangle.visible(false);
      };

      try {
        const selW = Math.abs(x2 - x1);
        const selH = Math.abs(y2 - y1);

        // Only select if box has size > 5px (debounce click)
        if (selW > 5 && selH > 5) {
          const selX = Math.min(x1, x2);
          const selY = Math.min(y1, y2);

          // Intersect in local layer coordinates — avoids expensive getClientRect() traversals
          // and eliminates any coordinate-space mismatch between the selection rect and module groups.
          // Use Object.entries so we get the numeric ModuleInstanceID from the key.
          // NOTE: v.group.id() is the module's string name (e.g. "EVSE"), NOT the numeric ID.
          const ids = Object.entries(this._module_views)
            .filter(([, v]) => {
              const pos = v.group.position();
              return (
                selX < pos.x + SIZE.FRAME_WIDTH &&
                selX + selW > pos.x &&
                selY < pos.y + SIZE.FRAME_HEIGHT &&
                selY + selH > pos.y
              );
            })
            .map(([id]) => Number(id));

          // If shift key, add to selection (additive); otherwise replace
          this.context.select_instances(ids, !e.evt.shiftKey);
        }
      } finally {
        // update visibility in timeout, so we can check it in click event
        setTimeout(hideRectangle);
      }
    });

    this._konva = {
      stage: this._stage,
      tooltip,
      static_layer,
      anim_layer: null,
    };

    this.context = context;
    context.set_container(this._stage.container());
    this.context.add_observer((ev) => this._handle_stage_context_event(ev));
    this.registerListeners();

    setTimeout(() => this.resizeStage(), 1500); // we have to wait for the animation of the splitpanes to finish
  }

  copy(): boolean {
    const selected_ids = Array.from(this.context._selected_instances);
    if (selected_ids.length === 0) {
      return false;
    }

    const modules: CopiedModule[] = selected_ids.map((id) => {
      const model = this._model.get_module_instance(id);
      // Deep clone model to detach from reactive state
      const deep_cloned = clone(model);

      // Extract name (id in model) and rest
      const { id: originalName, connections, ...rest } = deep_cloned;

      return {
        originalId: id,
        model: {
          ...rest,
          name: originalName,
        },
      };
    });

    const connections: CopiedConnection[] = [];
    const selectedSet = new Set(selected_ids);
    const uniqueConnectionIDs = new Set<ConnectionID>();

    selected_ids.forEach((id) => {
      // get_module_instance might throw? Should exist if selected.
      const instance = this._model.get_module_instance(id);
      instance.connections.forEach((cxnId) => uniqueConnectionIDs.add(cxnId));
    });

    uniqueConnectionIDs.forEach((cxnId) => {
      const cxn = this._model.get_connection(cxnId);
      // Check if BOTH ends are in selection
      if (selectedSet.has(cxn.providing_instance_id) && selectedSet.has(cxn.requiring_instance_id)) {
        connections.push({
          providing_original_id: cxn.providing_instance_id,
          providing_impl_name: cxn.providing_impl_name,
          requiring_original_id: cxn.requiring_instance_id,
          requirement_name: cxn.requirement_name,
        });
      }
    });

    this._clipboard = {
      modules,
      connections,
    };
    this._pasteCount = 0;
    return true;
  }

  paste(): boolean {
    if (!this._clipboard || this._clipboard.modules.length === 0) {
      return false;
    }

    const modules = this._clipboard.modules;
    const connections = this._clipboard.connections;
    const idMap = new Map<ModuleInstanceID, ModuleInstanceID>();
    const createdInstanceIDs: ModuleInstanceID[] = [];

    this._pasteCount += 1;
    const offset = 2 * this._pasteCount;

    // Deselect current selection
    this.context.unselect();

    // 1. Create modules
    modules.forEach((mod) => {
      const existingNames = Object.values(this._model._instances).map((inst) => inst.id);

      const newName = smart_increment_name(mod.model.name, existingNames);

      // Clone model data to modify position
      const modelData = clone(mod.model);

      // Offset by cumulative grid units so each consecutive paste shifts further.
      modelData.view_config.position.x += offset;
      modelData.view_config.position.y += offset;

      const newID = (this._model as any).add_instance_from_copy(modelData, newName);

      idMap.set(mod.originalId, newID);
      createdInstanceIDs.push(newID);
    });

    // 2. Create connections
    connections.forEach((cxn) => {
      const providerNewID = idMap.get(cxn.providing_original_id);
      const requirerNewID = idMap.get(cxn.requiring_original_id);

      if (providerNewID !== undefined && requirerNewID !== undefined) {
        this._model.add_connection({
          providing_impl_name: cxn.providing_impl_name,
          providing_instance_id: providerNewID,
          requirement_name: cxn.requirement_name,
          requiring_instance_id: requirerNewID,
        });
      }
    });

    // 3. Select newly created instances
    this.context.select_instances(createdInstanceIDs, true);
    return true;
  }

  delete_selection(): boolean {
    const selected_ids = Array.from(this.context._selected_instances);
    if (selected_ids.length === 0) {
      return false;
    }

    // Deselect first
    this.context.unselect();

    selected_ids.forEach((id) => {
      try {
        this._model.delete_module_instance(id);
      } catch (e) {
        console.warn(`Could not delete module instance ${id}:`, e);
      }
    });
    return true;
  }

  cut(): boolean {
    if (this.copy()) {
      return this.delete_selection();
    }
    return false;
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
    window.addEventListener("resize", this.resizeStage);
  }

  private unregisterListeners() {
    window.removeEventListener("resize", this.resizeStage);
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

  public zoomIn() {
    this._zoom(1.2);
  }

  public zoomOut() {
    this._zoom(1 / 1.2);
  }

  private _zoom(factor: number) {
    const oldScale = this._konva.static_layer.scaleX();
    const newScale = oldScale * factor;
    const center = { x: this._stage.width() / 2, y: this._stage.height() / 2 };
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
      // Unselect BEFORE destroying the group so that any tween animations
      // triggered by unselect() run on nodes that are still in a layer.
      this.context.unselect();
      this._module_views[id].group.destroy();
      delete this._module_views[id];
      delete this._module_vms[id];
    }
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
    } else if (ev.type === "MOVE_SELECTION") {
      const selected_ids = Array.from(this.context._selected_instances);
      // Move every selected module except the one currently being dragged (source_id).
      // The source already updates its own model + Konva position in _module_dragmove_handler.
      selected_ids.forEach((id) => {
        if (id !== ev.source_id) {
          const vm = this._module_vms[id];
          const view = this._module_views[id];
          if (vm && view) {
            const current = vm.grid_position;
            const new_pos = { x: current.x + ev.dx, y: current.y + ev.dy };
            vm.grid_position = new_pos;
            // Sync Konva group position and connection lines (model change alone is not enough)
            view.update_position(new_pos);
          }
        }
      });
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
    static_layer.on("dragstart", () => {
      this._stage.container().style.cursor = "grab";
    });
    static_layer.on("dragend", () => {
      this._stage.container().style.cursor = "default";
      this._bg.setAbsolutePosition({ x: 0, y: 0 });
    });

    // Re-create selection rectangle because children were destroyed
    // Or just re-add if we kept reference?
    // destroyChildren calls destroy() on children?
    // Yes. So we must recreate it.
    this._selectionRectangle = new Konva.Rect({
      fill: "rgba(0,0,255,0.1)",
      visible: false,
      stroke: "blue",
      strokeWidth: 1,
      listening: false,
    });
    static_layer.add(this._selectionRectangle);
  }
}
