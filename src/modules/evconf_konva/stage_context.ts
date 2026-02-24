// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { Connection, ConnectionID, ModuleInstanceID, Terminal } from "../evbc";

type TerminalSelection = {
  type: "TERMINAL";
  terminal: Terminal;
  module_instance_id: ModuleInstanceID;
  /** Lookup index of the origin terminal within its module's terminal_lookup array. */
  terminal_lookup_id: number;
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

export type ShowTooltipEvent = {
  readonly type: "SHOW_TOOLTIP";
  readonly text: string;
};

export type HideTooltipEvent = {
  readonly type: "HIDE_TOOLTIP";
};

type MoveSelectionEvent = {
  readonly type: "MOVE_SELECTION";
  readonly dx: number;
  readonly dy: number;
  readonly source_id: ModuleInstanceID;
};

/** Published when the user clicks a module card in the left panel during selection mode. */
type ClickLeftPanelModuleEvent = {
  readonly type: "CLICK_LEFT_PANEL_MODULE";
  readonly module_instance_id: ModuleInstanceID;
};

export type ConfigStageContextEvent =
  | SelectionEvent
  | AddConnectionEvent
  | ShowTooltipEvent
  | HideTooltipEvent
  | MoveSelectionEvent
  | ClickLeftPanelModuleEvent;

type ConfigStageContextEventHandler = (ev: ConfigStageContextEvent) => void;

/**
 * Callbacks registered by ConfigStage so that ModuleViewModels can query
 * connection state without importing ConnectionManager (avoiding circular deps).
 */
export interface ConnectionQueries {
  /** Returns true if the given terminal has any existing connections. */
  has_connections(instanceId: ModuleInstanceID, terminalLookupId: number): boolean;
  /** Returns true if the specific provide↔requirement pair is already connected. */
  is_connected_pair(
    provideInstanceId: ModuleInstanceID,
    provideTerminalLookupId: number,
    requireInstanceId: ModuleInstanceID,
    requireTerminalLookupId: number,
  ): boolean;
}

export default class ConfigStageContext {
  readonly _event_handlers: ConfigStageContextEventHandler[] = [];
  container: HTMLDivElement;

  _current_selected_terminal: Terminal & { module_instance_id: ModuleInstanceID; terminal_lookup_id: number } = null;
  _selected_instances: Set<ModuleInstanceID> = new Set();

  /** Injected by ConfigStage.set_model — allows VMs to query connection data. */
  _connection_queries: ConnectionQueries | null = null;

  register_connection_queries(queries: ConnectionQueries) {
    this._connection_queries = queries;
  }

  // constructor() {}

  add_observer(handler: ConfigStageContextEventHandler) {
    this._event_handlers.push(handler);
  }

  remove_observer(handler: ConfigStageContextEventHandler) {
    this._event_handlers.splice(this._event_handlers.indexOf(handler), 1);
  }

  set_container(container: HTMLDivElement) {
    this.container = container;
  }

  _clear_terminal_selection() {
    this._current_selected_terminal = null;
  }

  select_instances(ids: ModuleInstanceID[], clear_existing = true) {
    this._clear_terminal_selection();
    if (clear_existing) {
      this._selected_instances.clear();
    }
    ids.forEach((id) => this._selected_instances.add(id));
    this._publish_selection();
  }

  toggle_instance_selection(id: ModuleInstanceID) {
    this._clear_terminal_selection();
    if (this._selected_instances.has(id)) {
      this._selected_instances.delete(id);
    } else {
      this._selected_instances.add(id);
    }
    this._publish_selection();
  }

  _publish_selection() {
    if (this._selected_instances.size > 0) {
      this._publish({
        type: "SELECT",
        selection: { type: "MODULE_INSTANCE", ids: Array.from(this._selected_instances) },
      });
    } else {
      this._publish({ type: "SELECT", selection: { type: "NONE" } });
    }
  }

  clicked_instance(id: ModuleInstanceID) {
    // Legacy support: single select
    this.select_instances([id], true);
  }

  clicked_terminal(terminal: Terminal, module_instance_id: ModuleInstanceID, terminal_lookup_id = -1) {
    if (!this._current_selected_terminal) {
      this._publish({
        type: "SELECT",
        selection: { type: "TERMINAL", terminal, module_instance_id, terminal_lookup_id },
      });
      this._current_selected_terminal = { ...terminal, module_instance_id, terminal_lookup_id };

      return;
    }

    // Guard against self-clicking the already-selected terminal (e.g. mousedown
    // set the selection and then pointerclick fires on the same terminal).
    if (
      this._current_selected_terminal.module_instance_id === module_instance_id &&
      this._current_selected_terminal.id === terminal.id &&
      this._current_selected_terminal.type === terminal.type
    ) {
      return; // stay in selection mode
    }

    // Guard against same-role connections (provide↔provide or require↔require).
    // These are always invalid; attempting them would assign a requirement-only
    // module as the providing side, where prov_manifest.provides is undefined.
    if (terminal.type === this._current_selected_terminal.type) {
      this.unselect();
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

  // ─── Drag lifecycle routing ────────────────────────────────────────────────

  /**
   * Called by ModuleView when a terminal drag starts.  Enters the same selection
   * state as a first click so dimming/highlighting is applied across all modules.
   */
  drag_terminal_start(terminal: Terminal, module_instance_id: ModuleInstanceID, terminal_lookup_id = -1) {
    // Enter selection mode (same state as first click).
    this._publish({
      type: "SELECT",
      selection: { type: "TERMINAL", terminal, module_instance_id, terminal_lookup_id },
    });
    this._current_selected_terminal = { ...terminal, module_instance_id, terminal_lookup_id };
  }

  /**
   * Called by ModuleView on every mousemove during drag.
   * No state change in stage_context; DragPreviewOverlay is updated directly in
   * ModuleView.  Exposed so future observers can react to drag position.
   */

  drag_terminal_move(_cursorPos: { x: number; y: number }) {
    // intentional no-op
  }

  /**
   * Called by ModuleView when the drag ends.
   * If a compatible target was identified by the caller, completes the connection.
   * Otherwise reverts to idle state.
   */
  drag_terminal_end(target_terminal?: Terminal, target_module_instance_id?: ModuleInstanceID) {
    if (target_terminal && target_module_instance_id !== undefined) {
      this.clicked_terminal(target_terminal, target_module_instance_id);
    } else {
      this.unselect();
    }
  }

  // ─── Left-panel integration ────────────────────────────────────────────────

  /**
   * Called when the user clicks a module card in the left panel during terminal
   * selection mode.  Publishes a CLICK_LEFT_PANEL_MODULE event so that ConfigStage
   * can resolve the correct terminal on that instance and complete the connection.
   */
  clicked_left_panel_module(moduleInstanceId: ModuleInstanceID) {
    if (!this._current_selected_terminal) return;
    this._publish({ type: "CLICK_LEFT_PANEL_MODULE", module_instance_id: moduleInstanceId });
  }

  // ──────────────────────────────────────────────────────────────────────────

  unselect() {
    this._clear_terminal_selection();
    this._selected_instances.clear();
    this._publish({
      type: "SELECT",
      selection: { type: "NONE" },
    });
  }

  clicked_connection(id: ConnectionID) {
    this._clear_terminal_selection();
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
