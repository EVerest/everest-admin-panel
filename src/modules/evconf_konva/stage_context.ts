// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { Connection, ConnectionID, ModuleInstanceID, Terminal, } from "../evbc";

type TerminalSelection = {
  type: "TERMINAL";
  terminal: Terminal;
};

type ModuleInstanceSelection = {
  type: "MODULE_INSTANCE";
  id: ModuleInstanceID;
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

export type ConfigStageContextEvent = SelectionEvent | AddConnectionEvent | ShowTooltipEvent | HideTooltipEvent ;

type ConfigStageContextEventHandler = ( ev: ConfigStageContextEvent ) => void;

export default class ConfigStageContext {
  readonly _event_handlers: ConfigStageContextEventHandler[] = [];
  container: HTMLDivElement;

  _current_selected_terminal: Terminal & { module_instance_id: ModuleInstanceID } = null;

  // constructor() {}

  add_observer( handler: ConfigStageContextEventHandler, ) {
    this._event_handlers.push( handler, );
  }

  remove_observer( handler: ConfigStageContextEventHandler, ) {
    this._event_handlers.splice( this._event_handlers.indexOf( handler, ), 1, );
  }

  set_container( container: HTMLDivElement, ) {
    this.container = container;
  }

  _clear_terminal_selection() {
    this._current_selected_terminal = null;
  }

  clicked_instance( id: ModuleInstanceID, ) {
    this._clear_terminal_selection();
    this._publish( { type: "SELECT", selection: { type: "MODULE_INSTANCE", id, }, }, );
  }

  clicked_terminal( terminal: Terminal, module_instance_id: ModuleInstanceID, ) {
    if ( !this._current_selected_terminal ) {
      this._publish( { type: "SELECT", selection: { type: "TERMINAL", terminal, }, }, );
      this._current_selected_terminal = {
        ...terminal,
        module_instance_id,
      };

      return;
    }

    // else, this should be a new connection
    this._publish( {
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
    }, );

    this.unselect();
  }

  unselect() {
    this._clear_terminal_selection();
    this._publish( {
      type: "SELECT",
      selection: { type: "NONE", },
    }, );
  }

  clicked_connection( id: ConnectionID, ) {
    this._clear_terminal_selection();
    this._publish( {
      type: "SELECT",
      selection: { type: "CONNECTION", id, },
    }, );
  }

  _publish( event: ConfigStageContextEvent, ) {
    this._event_handlers.forEach( ( handler, ) => {
      handler( event, );
    }, );
  }
}
