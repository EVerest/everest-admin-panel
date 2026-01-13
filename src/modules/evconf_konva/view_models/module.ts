// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

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
  readonly connected: number[];
  readonly highlight_normal: number[];
  readonly highlight_connected: number[];
};

type ModuleModelUpdateEvent = {
  readonly type: "MODULE_MODEL_UPDATE";
};

type ModuleSelectionChangedEvent = {
  readonly type: "MODULE_SELECTION_CHANGED";
  readonly selected: boolean;
};

export type ViewModelChangeEvent = ModifyTerminalsEvent | ModuleModelUpdateEvent | ModuleSelectionChangedEvent;
type ViewModelChangeHandler = (ev: ViewModelChangeEvent) => void;

const CAPACITY_SHORT = 5;
const CAPACITY_LONG = 10;

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
      if (ev.type === "MODULE_INSTANCE_UPDATED" && ev.id === id) {
        this._grid_position = this._module_instance.view_config.position;
        this._notify({ type: "MODULE_MODEL_UPDATE" });
      } else if (ev.type === "CONNECTION_ADDED" || ev.type === "CONNECTION_DELETED") {
        this.update_terminal_appearance();
      }
    });
  }

  is_terminal_connected(terminal_index: number): boolean {
    const terminal = this.terminal_lookup[terminal_index].terminal;
    return this._config_model.is_terminal_connected(this._instance_id, terminal.id, terminal.type);
  }

  update_terminal_appearance() {
    const normal: number[] = [];
    const connected: number[] = [];

    this.terminal_lookup.forEach((_, index) => {
      if (this.is_terminal_connected(index)) {
        connected.push(index);
      } else {
        normal.push(index);
      }
    });

    this._notify({
      type: "TERMINAL_MODIFY_APPEARENCE",
      normal,
      connected,
      disable: [],
      highlight_normal: [],
      highlight_connected: [],
    });
  }

  highlight_compatible_terminals(
    interfaceName: string,
    type: string,
    blockedTerminals: Set<number> = new Set(),
    source?: { moduleId: number; terminalId: string },
  ) {
    const modify_event: ModifyTerminalsEvent = {
      type: "TERMINAL_MODIFY_APPEARENCE",
      disable: [],
      highlight_normal: [],
      highlight_connected: [],
      normal: [],
      connected: [],
    };

    this.terminal_lookup.forEach((item, id) => {
      if (
        item.terminal.type !== type &&
        (type === "provide"
          ? this._config_model.interfaces_match(interfaceName, item.terminal.interface)
          : this._config_model.interfaces_match(item.terminal.interface, interfaceName))
      ) {
        // Check if this terminal connects to the source
        const connectedToSource =
          source &&
          Object.values(this._config_model._connections).some((conn) => {
            if (type === "provide") {
              // Source was provide, we are requirement
              return (
                conn.providing_instance_id === source.moduleId &&
                conn.providing_impl_name === source.terminalId &&
                conn.requiring_instance_id === this._instance_id &&
                conn.requirement_name === item.terminal.id
              );
            } else {
              // Source was requirement, we are provide
              return (
                conn.requiring_instance_id === source.moduleId &&
                conn.requirement_name === source.terminalId &&
                conn.providing_instance_id === this._instance_id &&
                conn.providing_impl_name === item.terminal.id
              );
            }
          });

        if (blockedTerminals.has(id) || connectedToSource) {
          modify_event.disable.push(id);
        } else if (this.is_terminal_connected(id)) {
          modify_event.highlight_connected.push(id);
        } else {
          modify_event.highlight_normal.push(id);
        }
        return;
      }

      modify_event.disable.push(id);
    });
    this._notify(modify_event);
  }

  _initialize_terminals(terminal_arrangement: TerminalArrangement) {
    let changed = false;
    const distribution: Record<TerminalAlignment, Terminal[]> = {
      left: [...(terminal_arrangement.left || [])],
      top: [...(terminal_arrangement.top || [])],
      right: [...(terminal_arrangement.right || [])],
      bottom: [...(terminal_arrangement.bottom || [])],
    };

    const sides: TerminalAlignment[] = ["left", "top", "right", "bottom"];

    for (let i = 0; i < sides.length; i++) {
      const side = sides[i];
      const nextSide = sides[(i + 1) % sides.length];

      const capacity = side === "top" || side === "bottom" ? CAPACITY_LONG : CAPACITY_SHORT;
      const currentList = distribution[side];

      if (currentList.length > capacity) {
        changed = true;
        const overflowCount = currentList.length - capacity;
        let overflow: Terminal[] = [];

        if (side === "left") {
          // Left->Top: Take from start (top-most), move to start (left-most)
          overflow = currentList.splice(0, overflowCount);
          distribution[nextSide].unshift(...overflow);
        } else if (side === "top") {
          // Top->Right: Take from end (right-most), move to start (top-most)
          overflow = currentList.splice(currentList.length - overflowCount, overflowCount);
          distribution[nextSide].unshift(...overflow);
        } else if (side === "right") {
          // Right->Bottom: Take from end (bottom-most), move to end (right-most)
          overflow = currentList.splice(currentList.length - overflowCount, overflowCount);
          distribution[nextSide].push(...overflow);
        } else if (side === "bottom") {
          // Bottom->Left: Take from start (left-most), move to end (bottom-most)
          overflow = currentList.splice(0, overflowCount);
          distribution[nextSide].push(...overflow);
        }
      }
    }

    Object.entries(distribution).forEach(([_alignment, terminals]) => {
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

    if (changed) {
      this._config_model.update_module_view_terminals(this._instance_id, {
        left: distribution.left,
        top: distribution.top,
        right: distribution.right,
        bottom: distribution.bottom,
      });
    }
  }

  add_observer(handler: ViewModelChangeHandler) {
    this._observers.push(handler);

    return () => {
      this._observers = this._observers.filter((other) => other !== handler);
    };
  }

  notify_stage_context(event: ConfigStageContextEvent) {
    this._stage_context._publish(event);
  }

  _notify(ev: ViewModelChangeEvent) {
    this._observers.forEach((handler) => handler(ev));
  }

  clicked_terminal(terminal_id: number) {
    const terminal = this.terminal_lookup[terminal_id].terminal;
    this._stage_context.clicked_terminal(terminal, this._instance_id);
  }

  clicked_title(shiftKey: boolean = false) {
    if (shiftKey) {
      this._stage_context.toggle_instance_selection(this._instance_id);
    } else {
      this._stage_context.clicked_instance(this._instance_id);
    }
  }

  set_cursor(type: string) {
    this._stage_context.container.style.cursor = type;
  }

  _handle_stage_context_event(event: ConfigStageContextEvent) {
    if (event.type !== "SELECT") {
      return;
    }
    const selection_event = event.selection;

    if (selection_event.type === "MODULE_INSTANCE") {
      const isSelected = selection_event.ids.includes(this._instance_id);
      this._notify({
        type: "MODULE_SELECTION_CHANGED",
        selected: isSelected,
      });
    } else if (selection_event.type === "NONE") {
      this._notify({
        type: "MODULE_SELECTION_CHANGED",
        selected: false,
      });
    }

    if (selection_event.type === "TERMINAL") {
      const modify_event: ModifyTerminalsEvent = {
        type: "TERMINAL_MODIFY_APPEARENCE",
        disable: [],
        highlight_normal: [],
        highlight_connected: [],
        normal: [],
        connected: [],
      };

      const terminal = selection_event.terminal;

      this.terminal_lookup.forEach((item, id) => {
        if (
          this._instance_id === selection_event.moduleId &&
          item.terminal.id === terminal.id &&
          item.terminal.type === terminal.type
        ) {
          if (this.is_terminal_connected(id)) {
            modify_event.highlight_connected.push(id);
          } else {
            modify_event.highlight_normal.push(id);
          }
          return;
        }

        if (
          item.terminal.type !== terminal.type &&
          (terminal.type === "provide"
            ? this._config_model.interfaces_match(terminal.interface, item.terminal.interface)
            : this._config_model.interfaces_match(item.terminal.interface, terminal.interface))
        ) {
          const connectedToSource = Object.values(this._config_model._connections).some((conn) => {
            if (terminal.type === "provide") {
              return (
                conn.providing_instance_id === selection_event.moduleId &&
                conn.providing_impl_name === terminal.id &&
                conn.requiring_instance_id === this._instance_id &&
                conn.requirement_name === item.terminal.id
              );
            } else {
              return (
                conn.requiring_instance_id === selection_event.moduleId &&
                conn.requirement_name === terminal.id &&
                conn.providing_instance_id === this._instance_id &&
                conn.providing_impl_name === item.terminal.id
              );
            }
          });

          if (connectedToSource) {
            modify_event.disable.push(id);
          } else if (this.is_terminal_connected(id)) {
            modify_event.highlight_connected.push(id);
          } else {
            modify_event.highlight_normal.push(id);
          }
          return;
        }

        modify_event.disable.push(id);
      });
      this._notify(modify_event);
    } else {
      this.update_terminal_appearance();
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
    const old_pos = this._grid_position;

    // If old_pos is undefined (e.g. during initialization if view_config.position was missing),
    // treat it as 0,0 or just set the new position without calculating diff.
    if (!old_pos) {
      this._grid_position = pos;
      this._config_model.update_module_view_position(this._instance_id, pos);
      return;
    }

    const dx = pos.x - old_pos.x;
    const dy = pos.y - old_pos.y;

    this._grid_position = pos;
    this._config_model.update_module_view_position(this._instance_id, pos);

    if (dx === 0 && dy === 0) return;

    const selectedIds = this._stage_context.get_selected_instances();
    if (selectedIds.includes(this._instance_id) && selectedIds.length > 1) {
      selectedIds.forEach((id) => {
        if (id === this._instance_id) return;
        const instance = this._config_model.get_module_instance(id);
        if (instance) {
          const new_pos = {
            x: instance.view_config.position.x + dx,
            y: instance.view_config.position.y + dy,
          };
          this._config_model.update_module_view_position(id, new_pos);
        }
      });
    }
  }

  move_terminal(terminal_id: number, new_align: TerminalAlignment, new_index: number): TerminalAlignment[] {
    const cur_align = this.terminal_lookup[terminal_id].alignment;
    const cur_index = this.terminal_lookup[terminal_id].index;

    const changed_sides = new Set<TerminalAlignment>();

    if (new_align !== cur_align) {
      // FIXME (aw): we could do an assert here checking the terminal_id
      this.terminal_dist[cur_align].splice(cur_index, 1);
      this.terminal_dist[new_align].splice(new_index, 0, terminal_id);

      // set new align
      this.terminal_lookup[terminal_id].alignment = new_align;

      changed_sides.add(cur_align);
      changed_sides.add(new_align);
    } else {
      if (new_index > cur_index + 1 || new_index < cur_index) {
        // this should be a rotate!
        this.terminal_dist[cur_align].splice(cur_index, 1);
        const corrected_new_index = new_index < cur_index ? new_index : new_index - 1;
        this.terminal_dist[cur_align].splice(corrected_new_index, 0, terminal_id);

        changed_sides.add(cur_align);
      } else {
        return [];
      }
    }

    const overflow_updates = this._enforce_capacity();
    overflow_updates.forEach((s) => changed_sides.add(s));

    const result = Array.from(changed_sides);
    // adjust dirty positions (could be optimized)
    this._recalculate_terminal_index(result);

    return result;
  }

  _enforce_capacity(): TerminalAlignment[] {
    const sides: TerminalAlignment[] = ["left", "top", "right", "bottom"];
    const changed_sides = new Set<TerminalAlignment>();

    for (let i = 0; i < sides.length; i++) {
      const side = sides[i];
      const nextSide = sides[(i + 1) % sides.length];

      const capacity = side === "top" || side === "bottom" ? CAPACITY_LONG : CAPACITY_SHORT;
      const currentList = this.terminal_dist[side];

      if (currentList.length > capacity) {
        let movedIds: number[] = [];
        const overflowCount = currentList.length - capacity;

        if (side === "left") {
          // Left->Top: Take from start (top-most), move to start (left-most)
          movedIds = currentList.splice(0, overflowCount);
          this.terminal_dist[nextSide].unshift(...movedIds);
        } else if (side === "top") {
          // Top->Right: Take from end (right-most), move to start (top-most)
          movedIds = currentList.splice(currentList.length - overflowCount, overflowCount);
          this.terminal_dist[nextSide].unshift(...movedIds);
        } else if (side === "right") {
          // Right->Bottom: Take from end (bottom-most), move to end (right-most)
          movedIds = currentList.splice(currentList.length - overflowCount, overflowCount);
          this.terminal_dist[nextSide].push(...movedIds);
        } else if (side === "bottom") {
          // Bottom->Left: Take from start (left-most), move to end (bottom-most)
          movedIds = currentList.splice(0, overflowCount);
          this.terminal_dist[nextSide].push(...movedIds);
        }

        movedIds.forEach((id) => {
          this.terminal_lookup[id].alignment = nextSide;
        });

        changed_sides.add(side);
        changed_sides.add(nextSide);
      }
    }
    return Array.from(changed_sides);
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
