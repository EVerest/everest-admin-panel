// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import { Connection, ConnectionID, ModuleInstanceID, Terminal } from "../evbc";

type TerminalSelection = {
  type: "TERMINAL";
  terminal: Terminal;
  moduleId: ModuleInstanceID;
};

type ModuleInstanceSelection = {
  type: "MODULE_INSTANCE";
  ids: ModuleInstanceID[];
};

type ConnectionSelection = {
  type: "CONNECTION";
  id: ConnectionID;
};

type NoSelection = {
  type: "NONE";
};

export type SelectionType = TerminalSelection | ModuleInstanceSelection | ConnectionSelection | NoSelection;

type SelectionEvent = {
  readonly type: "SELECT";
  readonly selection: SelectionType;
};

type AddConnectionEvent = {
  readonly type: "ADD_CONNECTION";
  readonly connection: Connection;
};

export type TryAutoConnectEvent = {
  readonly type: "TRY_AUTO_CONNECT";
  readonly source: Terminal & { module_instance_id: ModuleInstanceID };
  readonly targetModuleId: ModuleInstanceID;
};

export type ShowTooltipEvent = {
  readonly type: "SHOW_TOOLTIP";
  readonly text: string;
};

export type HideTooltipEvent = {
  readonly type: "HIDE_TOOLTIP";
};

export type ConfigStageContextEvent =
  | SelectionEvent
  | AddConnectionEvent
  | TryAutoConnectEvent
  | ShowTooltipEvent
  | HideTooltipEvent;

type ConfigStageContextEventHandler = (ev: ConfigStageContextEvent) => void;

export default class ConfigStageContext {
  readonly _event_handlers: ConfigStageContextEventHandler[] = [];
  container: HTMLDivElement;
  get_viewport_center?: () => { x: number; y: number };

  _current_selected_terminal: Terminal & { module_instance_id: ModuleInstanceID } = null;
  _selected_instances: Set<ModuleInstanceID> = new Set();
  _selected_connection_id: ConnectionID | null = null;

  // constructor() {}

  add_observer(handler: ConfigStageContextEventHandler) {
    this._event_handlers.push(handler);
  }

  remove_observer(handler: ConfigStageContextEventHandler) {
    const index = this._event_handlers.indexOf(handler);
    if (index !== -1) {
      this._event_handlers.splice(index, 1);
    }
  }

  set_container(container: HTMLDivElement) {
    this.container = container;
  }

  _clear_terminal_selection() {
    this._current_selected_terminal = null;
  }

  _clear_instance_selection() {
    this._selected_instances.clear();
  }

  _clear_connection_selection() {
    this._selected_connection_id = null;
  }

  select_instances(ids: ModuleInstanceID[]) {
    this._clear_terminal_selection();
    this._clear_instance_selection();
    this._clear_connection_selection();
    ids.forEach((id) => this._selected_instances.add(id));
    this._publish_selection();
  }

  add_instances(ids: ModuleInstanceID[]) {
    this._clear_terminal_selection();
    this._clear_connection_selection();
    ids.forEach((id) => this._selected_instances.add(id));
    this._publish_selection();
  }

  toggle_instance_selection(id: ModuleInstanceID) {
    this._clear_terminal_selection();
    this._clear_connection_selection();
    if (this._selected_instances.has(id)) {
      this._selected_instances.delete(id);
    } else {
      this._selected_instances.add(id);
    }
    this._publish_selection();
  }

  clicked_instance(id: ModuleInstanceID) {
    if (this._current_selected_terminal) {
      this._publish({
        type: "TRY_AUTO_CONNECT",
        source: { ...this._current_selected_terminal },
        targetModuleId: id,
      });
      this.unselect();
    } else {
      this.select_instances([id]);
    }
  }

  get_selected_instances(): ModuleInstanceID[] {
    return Array.from(this._selected_instances);
  }

  get_selected_connection(): ConnectionID | null {
    return this._selected_connection_id;
  }

  _publish_selection() {
    if (this._selected_instances.size > 0) {
      this._publish({
        type: "SELECT",
        selection: {
          type: "MODULE_INSTANCE",
          ids: Array.from(this._selected_instances),
        },
      });
    } else {
      this._publish({
        type: "SELECT",
        selection: { type: "NONE" },
      });
    }
  }

  clicked_terminal(terminal: Terminal, module_instance_id: ModuleInstanceID) {
    if (!this._current_selected_terminal) {
      this._clear_connection_selection();
      this._publish({ type: "SELECT", selection: { type: "TERMINAL", terminal, moduleId: module_instance_id } });
      this._current_selected_terminal = {
        ...terminal,
        module_instance_id,
      };

      return;
    }

    // If clicking the same terminal again, unselect it
    if (
      this._current_selected_terminal.id === terminal.id &&
      this._current_selected_terminal.module_instance_id === module_instance_id &&
      this._current_selected_terminal.type === terminal.type
    ) {
      this.unselect();
      return;
    }

    // If clicking a terminal of the same type (e.g. both are requirements), switch selection to the new one
    if (this._current_selected_terminal.type === terminal.type) {
      this._clear_connection_selection();
      this._publish({ type: "SELECT", selection: { type: "TERMINAL", terminal, moduleId: module_instance_id } });
      this._current_selected_terminal = {
        ...terminal,
        module_instance_id,
      };
      return;
    }

    // else, this should be a new connection
    this._publish({
      type: "ADD_CONNECTION",
      // FIXME (aw): is there a way making this more beautiful?
      connection: {
        providing_impl_name: terminal.type === "provide" ? terminal.id : this._current_selected_terminal.id,
        providing_instance_id:
          terminal.type === "provide" ? module_instance_id : this._current_selected_terminal.module_instance_id,
        requirement_name: terminal.type === "requirement" ? terminal.id : this._current_selected_terminal.id,
        requiring_instance_id:
          terminal.type === "requirement" ? module_instance_id : this._current_selected_terminal.module_instance_id,
      },
    });

    this.unselect();
  }

  unselect() {
    this._clear_terminal_selection();
    this._clear_instance_selection();
    this._clear_connection_selection();
    this._publish({
      type: "SELECT",
      selection: { type: "NONE" },
    });
  }

  clicked_connection(id: ConnectionID) {
    this._clear_terminal_selection();
    this._clear_instance_selection();
    this._selected_connection_id = id;
    this._publish({
      type: "SELECT",
      selection: { type: "CONNECTION", id },
    });
  }

  _publish(event: ConfigStageContextEvent) {
    this._event_handlers.forEach((handler) => {
      handler(event);
    });
  }
}
