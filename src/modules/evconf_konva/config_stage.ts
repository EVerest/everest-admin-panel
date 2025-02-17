// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import {StageConfig} from "konva/lib/Stage";
import {ConnectionID, ModuleInstanceID} from "@/modules/evbc";
import EVConfigModel, {ConfigModelEvent} from "@/modules/evbc/config_model";
import ModuleView from "./views/module";
import ModuleViewModel from "./view_models/module";
import ConfigStageContext, {ConfigStageContextEvent} from "./stage_context";
import ConnectionManager from "./connection_manager";
import {NORMAL_TEXT, TOOLTIP} from "./views/constants";
import {KonvaEventObject} from "konva/lib/Node";
import {Vector2d} from "konva/lib/types";
import {currentTheme} from "@/plugins/vuetify";
import Stage = Konva.Stage;
import Layer = Konva.Layer;

export default class ConfigStage {
  // view part
  _konva: {
    stage: Konva.Stage;
    tooltip: Konva.Text;
    static_layer: Konva.Layer;
    anim_layer: Konva.Layer;
  };

  _module_views: Record<ModuleInstanceID, ModuleView> = {};

  // view model part
  _model: EVConfigModel = null;
  _module_vms: Record<ModuleInstanceID, ModuleViewModel> = {};

  _conn_man: ConnectionManager;

  readonly context: ConfigStageContext;
  private _stage: Stage;
  private _bg: Konva.Rect;

  constructor(private config: StageConfig, context: ConfigStageContext) {
    this._stage = new Konva.Stage(config);

    // bind this to the resize function. This is necessary to remove the listener later on
    this.resizeStage = this.resizeStage.bind(this);

    // allow drag with left and right mouse button
    Konva.dragButtons = [0, 2];
    // prevent context menu on right click
    this._stage.on("contextmenu", (e: KonvaEventObject<MouseEvent>) => e.evt.preventDefault());

    const tooltipLayer = new Konva.Layer({});

    const tooltip = new Konva.Text({
      text: '',
      fontFamily: NORMAL_TEXT.fontFamily,
      fontSize: 16,
      padding: 5,
      fill: 'white',
      alpha: 0.75,
      visible: false,
      sceneFunc: function(context, shape) {
        const {width, height} = shape.size();
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
      ...TOOLTIP.position
    });

    tooltipLayer.add(tooltip);

    const static_layer = new Konva.Layer({
      draggable: true
    });
    this._reset_static_layer(static_layer);

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
      const delta = event.evt.deltaY === 1 || event.evt.deltaY === -1 ?
          event.evt.deltaY * 0.2 : event.evt.deltaY;
      const zoomIntensity = 0.005; // Adjust this value to control the zoom speed
      const scaleBy = Math.exp(delta * zoomIntensity);

      const newScale = oldScale * scaleBy;

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      this.setNewPosAndScale(static_layer, newPos, newScale);
    });

    this._stage.add(static_layer);
    this._stage.add(tooltipLayer);

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

  private setNewPosAndScale(static_layer: Layer, newPos: { x: number; y: number }, newScale: number) {
    static_layer.scale({x: newScale, y: newScale});
    static_layer.position(newPos);
    this._bg.width(this._stage.width() / newScale);
    this._bg.height(this._stage.height() / newScale);
    this._bg.setAbsolutePosition({x: 0, y: 0});
    static_layer.batchDraw();
  }

  private registerListeners() {
    window.addEventListener('resize', this.resizeStage);
  }

  private unregisterListeners() {
    window.removeEventListener('resize', this.resizeStage);
  }

  public destroy() {
    this.unregisterListeners();
    this._stage.destroy();
  }

  public resizeStage(): void {
    // debugger;
    const container = document.getElementById(this.config.container as string) as HTMLDivElement;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    this._stage.width(containerWidth);
    this._stage.height(containerHeight);
  }

  public reset_view(): void {
    this.setNewPosAndScale(this._konva.static_layer, {x: 0, y: 0}, 1);
  }

  set_model(model: EVConfigModel) {
    if (this._model) {
      // FIXME (aw): what to do here, cleanup?
      // - yes, we should definitely do a complete cleanup, but who owns all the views?
      // - all observers also need to be discarded etc.
    }

    this._conn_man = new ConnectionManager(this.context);
    this._reset_static_layer(this._konva.static_layer)
    this._konva.static_layer.add(this._conn_man.group);

    this._model = model;

    Object.keys(model._instances).forEach((id) => this._add_module_instance_to_stage(Number(id)));
    Object.keys(model._connections).forEach((id) => {
      try {
        this._add_connection_to_stage(Number(id))
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
      "provide"
    );
    if (providing_terminal_lookup_id === -1) {
      throw Error(`Couldn't add connection to stage, terminal ${cxn.providing_impl_name} not found on ${providing_view_model.type}.`);
    }

    const requiring_terminal_lookup_id = requiring_view_model.get_terminal_lookup_id(
      cxn.requirement_name,
      "requirement"
    );
    if (requiring_terminal_lookup_id === -1) {
      throw Error(`Couldn't add connection to stage, terminal ${cxn.requirement_name} not found on ${requiring_view_model.type}.`);
    }

    this._conn_man.add_connection(
      id,
      { module_view: providing_view, terminal_lookup_id: providing_terminal_lookup_id },
      { module_view: requiring_view, terminal_lookup_id: requiring_terminal_lookup_id }
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
      fill: 'rgba(255, 0, 0, 0)'
    });
    this._bg.on("pointerclick", () => this.context.unselect());
    static_layer.add(this._bg);
    static_layer.on("dragstart", () => {
      this._stage.container().style.cursor = "grab";
    });
    static_layer.on("dragend", () => {
      this._stage.container().style.cursor = "default";
      this._bg.setAbsolutePosition({x: 0, y: 0});
    });
  }
}
