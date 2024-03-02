// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import {
  ModuleInstanceID,
  ModuleInstanceModel,
  Terminal,
  TerminalAlignment,
  TerminalArrangement,
  TerminalType,
} from "@/modules/evbc";
import EVConfigModel from "@/modules/evbc/config_model";
import ConfigStageContext, { ConfigStageContextEvent } from "../stage_context";

type TerminalDistribution = Record<TerminalAlignment, number[]>;
type TerminalLookup = Array<{
  // FIXME (aw): we need a better name for structure
  readonly terminal: Terminal;
  alignment: TerminalAlignment;
  index: number;
}>;

type ModifyTerminalsEvent = {
  readonly type: "TERMINAL_MODIFY_APPEARENCE";
  readonly normal: number[];
  readonly disable: number[];
  readonly highlight: number[];
};

type ModuleModelUpdateEvent = {
  readonly type: "MODULE_MODEL_UPDATE";
};

export type ViewModelChangeEvent = ModifyTerminalsEvent | ModuleModelUpdateEvent;
type ViewModelChangeHandler = (ev: ViewModelChangeEvent) => void;

export default class ModuleViewModel {
  _grid_position: {
    x: number;
    y: number;
  };

  terminal_dist: TerminalDistribution = {
    top: [],
    right: [],
    bottom: [],
    left: [],
  };
  terminal_lookup: TerminalLookup = [];

  readonly type: string;

  readonly _instance_id: ModuleInstanceID;
  readonly _config_model: EVConfigModel;
  readonly _module_instance: ModuleInstanceModel;
  _observers: ViewModelChangeHandler[] = [];
  readonly _stage_context: ConfigStageContext;

  constructor(model: EVConfigModel, id: ModuleInstanceID, stage_context: ConfigStageContext) {
    this._instance_id = id;
    this._config_model = model;
    this._stage_context = stage_context;
    this._module_instance = model.get_module_instance(id);
    this._initialize_terminals(this._module_instance.view_config.terminals);
    this._grid_position = this._module_instance.view_config.position;
    this.type = this._module_instance.type;

    stage_context.add_observer((ev) => this._handle_stage_context_event(ev));
    model.add_observer((ev) => {
      if (ev.type == "MODULE_INSTANCE_UPDATED" && ev.id == id) {
        this._notify({ type: "MODULE_MODEL_UPDATE" });
      }
    });
  }

  _initialize_terminals(terminal_arrangement: TerminalArrangement) {
    Object.entries(terminal_arrangement).forEach(([_alignment, terminals]) => {
      const alignment = _alignment as TerminalAlignment;
      terminals.forEach((terminal) => {
        const index = this.terminal_dist[alignment].length;
        const terminal_id = this.terminal_lookup.length;

        this.terminal_lookup.push({
          terminal,
          alignment,
          index,
        });

        this.terminal_dist[alignment].push(terminal_id);
      });
    });
  }

  add_observer(handler: ViewModelChangeHandler) {
    this._observers.push(handler);

    return () => {
      this._observers = this._observers.filter((other) => other !== handler);
    };
  }

  notify_stage_context(event: ConfigStageContextEvent) {
    this._stage_context._publish(event)
  }

  _notify(ev: ViewModelChangeEvent) {
    this._observers.forEach((handler) => handler(ev));
  }

  clicked_terminal(terminal_id: number) {
    const terminal = this.terminal_lookup[terminal_id].terminal;
    this._stage_context.clicked_terminal(terminal, this._instance_id);
  }

  clicked_title() {
    this._stage_context.clicked_instance(this._instance_id);
  }

  set_cursor(type: string) {
    this._stage_context.container.style.cursor = type;
  }

  _handle_stage_context_event(event: ConfigStageContextEvent) {
    if (event.type !== "SELECT") {
      return;
    }
    const selection_event = event.selection;

    if (selection_event.type === "TERMINAL") {
      const modify_event: ModifyTerminalsEvent = {
        type: "TERMINAL_MODIFY_APPEARENCE",
        disable: [],
        highlight: [],
        normal: [],
      };

      const terminal = selection_event.terminal;

      this.terminal_lookup.forEach((item, id) => {
        if (
          item.terminal.type !== terminal.type &&
          (terminal.type === "provide"
            ? this._config_model.interfaces_match(terminal.interface, item.terminal.interface)
            : this._config_model.interfaces_match(item.terminal.interface, terminal.interface))
        ) {
          return;
        }

        modify_event.disable.push(id);
      });
      this._notify(modify_event);
    } else {
      this._notify({
        type: "TERMINAL_MODIFY_APPEARENCE",
        normal: Array.from(this.terminal_lookup.keys()),
        disable: [],
        highlight: [],
      });
    }
  }

  get id() {
    return this._module_instance.id;
  }

  get grid_position() {
    return this._grid_position;
  }

  // returns diff or null
  set grid_position(pos: { x: number; y: number }) {
    this._grid_position = pos;
    this._config_model.update_module_view_position(this._instance_id, pos);
  }

  move_terminal(terminal_id: number, new_align: TerminalAlignment, new_index: number): TerminalAlignment[] {
    const cur_align = this.terminal_lookup[terminal_id].alignment;
    const cur_index = this.terminal_lookup[terminal_id].index;

    if (new_align != cur_align) {
      // FIXME (aw): we could do an assert here checking the terminal_id
      this.terminal_dist[cur_align].splice(cur_index, 1);
      this.terminal_dist[new_align].splice(new_index, 0, terminal_id);

      // set new align
      this.terminal_lookup[terminal_id].alignment = new_align;

      // adjust dirty positions (could be optimized)
      this._recalculate_terminal_index([cur_align, new_align]);
      return [cur_align, new_align];
    } else {
      if (new_index > cur_index + 1 || new_index < cur_index) {
        // this should be a rotate!
        this.terminal_dist[cur_align].splice(cur_index, 1);
        const corrected_new_index = new_index < cur_index ? new_index : new_index - 1;
        this.terminal_dist[cur_align].splice(corrected_new_index, 0, terminal_id);

        // adjust dirty positions (could be optimized)
        this._recalculate_terminal_index([cur_align]);
        return [cur_align];
      } else {
        return [];
      }
    }
  }

  get_terminal_lookup_id(name: string, type: TerminalType) {
    return this.terminal_lookup.findIndex((item) => item.terminal.id === name && item.terminal.type === type);
  }

  _recalculate_terminal_index(alignments: TerminalAlignment[]) {
    const new_arrangement = {} as TerminalArrangement;

    alignments.forEach((alignment) => {
      this.terminal_dist[alignment].forEach((terminal_id, index) => {
        this.terminal_lookup[terminal_id].index = index;
      });

      new_arrangement[alignment] = this.terminal_dist[alignment].map((id) => this.terminal_lookup[id].terminal);
    });

    // commit these changes to our model!
    this._config_model.update_module_view_terminals(this._instance_id, new_arrangement);
  }
}
