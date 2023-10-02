// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import {
  EventHandler,
  EverestConfigList,
  EverestDefinitions,
  EverestInterfaceDefinitionList,
  EverestModuleDefinitionList,
} from ".";
import EVConfigModel from "./config_model";
import EVBackendConnection, { ConnectionStatus } from "./connection";

type ConnectionStateEvent = {
  type: "INFO" | "INITIALIZED" | "FAILED" | "RECONNECT";
  text: string;
};

type ClientEventMap = {
  connection_state: ConnectionStateEvent;
};

type ClientEventHandlerMap = {
  [K in keyof ClientEventMap]?: Array<EventHandler<ClientEventMap[K]>>;
};

type LastEventMap = {
  [K in keyof ClientEventMap]?: ClientEventMap[K];
};

class EVBackendClient {
  initialized = false;
  _cxn: EVBackendConnection = null;
  _event_handler_map: ClientEventHandlerMap = {};
  _last_event_map: LastEventMap = {};
  _configs: EverestConfigList;
  readonly everest_definitions: EverestDefinitions = {
    modules: null,
    interfaces: null,
  };

  connect(url: string) {
    this._cxn = new EVBackendConnection(url, (msg) => this._connection_state_listener(msg));
  }

  on<K extends keyof ClientEventMap>(event_name: K, handler: EventHandler<ClientEventMap[K]>) {
    if (!(event_name in this._event_handler_map)) {
      this._event_handler_map[event_name] = [];
    }

    this._event_handler_map[event_name].push(handler);
    if (event_name in this._last_event_map) {
      handler(this._last_event_map[event_name]);
    }
    return () => {
      this._event_handler_map[event_name] = this._event_handler_map[event_name].filter((o) => o !== handler);
    };
  }

  // FIXME (aw):
  // - these shouldn't be callable, until we're successfully connected
  // - it would be nice, if we got an object after successful connection, that contains that
  load_config(name: string) {
    if (!(name in this._configs)) {
      throw Error(`Configuration "${name}" not found`);
    }
    const config = this._configs[name];
    return new EVConfigModel(this.everest_definitions, name, config);
  }

  create_empty_config(name: string): EVConfigModel {
    return new EVConfigModel(this.everest_definitions, name);
  }

  save_config(config: EVConfigModel) {
    return this._cxn.issue_rpc(
      "save_config",
      {
        name: `${config._name}`,
        config: config.serialize(),
      },
      false
    );
  }

  execute_remote_command(command: string) {
    this._cxn.issue_rpc(command, null, true);
  }

  _connection_state_listener(status: ConnectionStatus) {
    let event: ConnectionStateEvent = null;
    if (status.type === "OPEN") {
      event = { type: "INFO", text: `Opening WebSocket connection to ${status.url}` };
    } else if (status.type === "OPENED") {
      // FIXME (aw): this state handling is not production ready yet, in fact it will be probably quite complicated
      if (!this.initialized) {
        event = { type: "INFO", text: `Successfully opened WebSocket connection` };
        this._on_connected();
      } else {
        event = { type: "INITIALIZED", text: "Successfully reconnected" };
      }
    } else if (status.type === "ERROR") {
      event = { type: "FAILED", text: `Connection failed` };
    } else if (status.type === "CLOSED") {
      event = { type: "RECONNECT", text: "Trying to reconnect" };
    }

    if (event) {
      this._publish("connection_state", event);
    }
  }

  _on_connected() {
    // fetch rpc timeout value
    const wait_for_rpc_timeout_value = this._cxn.issue_rpc("get_rpc_timeout", null, false).then((result) => {
      this._cxn._rpc_timeout_ms = result as number;
    });

    // fetch all needed definitions
    // FIXME (aw): how to deal with errors, what about the 'as' type casting ?
    const wait_for_modules = this._cxn.issue_rpc("get_modules", null, false).then((result) => {
      this.everest_definitions.modules = result as EverestModuleDefinitionList;
      this._publish("connection_state", { type: "INFO", text: `Received ${Object.keys(result).length} module files` });
    });

    const wait_for_interfaces = this._cxn.issue_rpc("get_interfaces", null, false).then((result) => {
      this.everest_definitions.interfaces = result as EverestInterfaceDefinitionList;
      this._publish("connection_state", {
        type: "INFO",
        text: `Received ${Object.keys(result).length} interfaces definitions`,
      });
    });

    const wait_for_configs = this._cxn.issue_rpc("get_configs", null, false).then((result) => {
      this._configs = result as EverestConfigList;
      this._publish("connection_state", { type: "INFO", text: `Received ${Object.keys(result).length} config files` });
    });

    Promise.all([wait_for_rpc_timeout_value, wait_for_modules, wait_for_interfaces, wait_for_configs]).then(() => {
      this.initialized = true;
      this._publish("connection_state", { type: "INITIALIZED", text: "Done initializing" });
    });
  }

  _publish<K extends keyof ClientEventMap>(event_name: K, message: ClientEventMap[K]) {
    this._last_event_map[event_name] = message;

    if (!(event_name in this._event_handler_map)) {
      return;
    }

    this._event_handler_map[event_name].forEach((handler) => {
      handler(message);
    });
  }
}

export default EVBackendClient;
