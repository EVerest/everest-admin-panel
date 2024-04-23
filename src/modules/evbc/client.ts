// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

import {
  EventHandler,
  EverestConfigList,
  EverestDefinitions,
  EverestInterfaceDefinitionList,
  EverestModuleDefinitionList,
} from ".";
import EVConfigModel from "./config_model";
import EVBackendConnection, {ConnectionStatus} from "./connection";
import {useEvbcStore} from "@/store/evbc";

type ConnectionStateEvent = {
  type: "INFO" | "INITIALIZED" | "FAILED" | "RECONNECT" | "IDLE";
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
  private evbcStore = useEvbcStore();
  readonly everest_definitions: EverestDefinitions = {
    modules: null,
    interfaces: null,
  };

  async connect(url: string): Promise<void> {
    if (this._cxn) {
      await this._cxn._disconnect();
    }
    this._cxn = new EVBackendConnection(url, (msg) => this._connection_state_listener(msg));
  }

  async disconnect(): Promise<void> {
    this.initialized = false;
    await this._cxn._disconnect();
    this._cxn = null;
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
    if (!(name in this.evbcStore.available_configs)) {
      throw Error(`Configuration "${name}" not found`);
    }
    const config = this.evbcStore.available_configs[name];
    return new EVConfigModel(this.everest_definitions, name, config);
  }

  create_empty_config(name: string): EVConfigModel {
    return new EVConfigModel(this.everest_definitions, name);
  }

  async save_config(config: EVConfigModel) {
    await this._cxn.rpc_issuer.save_config({
      name: `${config._name}`,
      config: config.serialize(),
    }, false);
    await this._reload_configs();
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
      event = {type: "FAILED", text: `Connection failed. Trying to reconnect.`};
    } else if (status.type === "CLOSED") {
      event = { type: "RECONNECT", text: "Trying to reconnect" };
    } else if (status.type === "DISCONNECTED") {
      event = {type: "IDLE", text: "Disconnected"};
    }

    if (event) {
      this._publish("connection_state", event);
    }
  }

  _on_connected() {
    this._reload_instance_data().then(() => {
      this.initialized = true;
      this._publish("connection_state", { type: "INITIALIZED", text: "Done initializing" });
    });
  }

  async _reload_modules(): Promise<void> {
    this.everest_definitions.modules = await this._cxn.rpc_issuer.get_modules();
    this._publish("connection_state", { type: "INFO", text: `Received ${Object.keys(this.everest_definitions.modules).length} module files` });
  }

  async _reload_interfaces(): Promise<void> {
    this.everest_definitions.interfaces = await this._cxn.rpc_issuer.get_interfaces();
    this._publish("connection_state", {
      type: "INFO",
      text: `Received ${Object.keys(this.everest_definitions.interfaces).length} interfaces definitions`,
    });
  }

  async _reload_configs(): Promise<void> {
    const cfgs = (await this._cxn.rpc_issuer.get_configs());
    Object.assign(this.evbcStore.available_configs, cfgs);
    this._publish("connection_state", { type: "INFO", text: `Received ${Object.keys(cfgs).length} config files` });
  }

  _reload_instance_data(): Promise<void[]> {
    return Promise.all([this._reload_interfaces(), this._reload_configs(), this._reload_modules()]);
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
