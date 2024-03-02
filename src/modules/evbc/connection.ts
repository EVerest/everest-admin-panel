// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import SampleConfigList from "./sample_config_list";
import SampleManifestList from "./sample_module_info";
import SampleInterfaceList from "./sample_interfaces_list";

const LOOPBACK_WAIT_MS = 500;
const RPC_COMMAND_TIMEOUT_MS = 2000;

type ConnectionOpenStatus = {
  type: "OPEN";
  url: string;
};

type ConnectionOpenedStatus = {
  type: "OPENED";
};

type ConnectionClosedStatus = {
  type: "CLOSED";
};

type ConnectionErrorStatus = {
  type: "ERROR";
  error: string;
};

export type ConnectionStatus =
  | ConnectionOpenStatus
  | ConnectionOpenedStatus
  | ConnectionClosedStatus
  | ConnectionErrorStatus;

export type ConnectionStatusListener = (status: ConnectionStatus) => void;

class EVBackendConnection {
  _socket: WebSocket;
  _last_message: ConnectionStatus;
  _listener: ConnectionStatusListener;
  _loopback = false;
  _pending_commands = new Map();
  _url: string;
  _rpc_timeout_ms = RPC_COMMAND_TIMEOUT_MS;
  issue_rpc: (method: string, params: unknown, notification: boolean) => Promise<unknown>;

  constructor(url: string, listener: ConnectionStatusListener) {
    this._listener = listener;
    this._publish_connection_state({
      type: "OPEN",
      url,
    });

    if (url === "loopback") {
      this.issue_rpc = this._issue_rpc_loopback;
      this._connect_loopback_mode();
      return;
    }

    this.issue_rpc = this._issue_rpc;
    this._url = url;
    this._connect();
  }

  _connect() {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    this._socket = new WebSocket(`${protocol}://${this._url}`);
    this._socket.onopen = this._handle_socket_opened.bind(this);
    this._socket.onmessage = this._handle_backend_message.bind(this);
    this._socket.onerror = this._handle_socket_error.bind(this);
    this._socket.onclose = () => this._handle_socket_close();
  }

  _issue_rpc_loopback(method: string /* params: unknown, notification: boolean */) {
    if (method === "get_modules") {
      return new Promise((resolve) => {
        setTimeout(() => resolve(SampleManifestList), LOOPBACK_WAIT_MS);
      });
    } else if (method === "get_interfaces") {
      return new Promise((resolve) => {
        setTimeout(() => resolve(SampleInterfaceList), 2 * LOOPBACK_WAIT_MS);
      });
    } else if (method === "get_configs") {
      return new Promise((resolve) => {
        setTimeout(() => resolve(SampleConfigList), 3 * LOOPBACK_WAIT_MS);
      });
    } else {
      return Promise.reject(`Method '${method}' currently not handled in loopback mode`);
    }
  }

  _issue_rpc(method: string, params: unknown, notification: boolean) {
    const id = notification ? undefined : Math.floor(Math.random() * 1024 * 1024);
    const rpc_request = {
      method,
      ...(params !== undefined && { params }),
      ...(!notification && { id }),
    };
    if (this._loopback) {
      // FIXME (aw): needs to be done
      this._loopback_handle_command();
      return null;
    }

    // FIXME (aw): id generation
    this._socket.send(JSON.stringify(rpc_request));

    if (notification) {
      return null;
    }

    // this._pending_commands[id] =
    return new Promise((resolve, reject) => {
      const timeout_id = setTimeout(() => {
        this._pending_commands.delete(id);
        reject(`RPC communication timeout to everest controller process after '${this._rpc_timeout_ms}'ms`);
      }, this._rpc_timeout_ms);
      this._pending_commands.set(id, { resolve, reject, timeout_id });
    });
  }

  _publish_connection_state(status: ConnectionStatus) {
    this._listener(status);
  }

  _handle_backend_message(ev: MessageEvent) {
    const payload = JSON.parse(ev.data);
    if (payload.id !== undefined) {
      const id = payload.id;
      const pending_command = this._pending_commands.get(id);
      if (pending_command === undefined) {
        console.log("Received an unknown JSON RPC command id");
        return;
      }

      this._pending_commands.delete(id);
      clearTimeout(pending_command.timeout_id);

      if (payload.result !== undefined) {
        pending_command.resolve(payload.result);
      } else if (payload.error !== undefined) {
        pending_command.reject(payload.error.message);
      } else {
        console.log("Received an invalid JSON RPC response from backend");
      }
    }
  }

  _handle_socket_opened() {
    this._publish_connection_state({ type: "OPENED" });
  }

  _loopback_handle_command() {
    //
  }

  _connect_loopback_mode() {
    this._loopback = true;
    setTimeout(() => {
      this._publish_connection_state({ type: "OPENED" });
    }, LOOPBACK_WAIT_MS);
  }

  _handle_socket_error() {
    this._publish_connection_state({
      type: "ERROR",
      error: `Could not connect to ${this._socket.url}.`,
    });
  }

  _handle_socket_close() {
    // got disconnected, try to reconnect
    this._publish_connection_state({
      type: "CLOSED",
    });
    setTimeout(() => this._connect(), 1000);
  }
}

export default EVBackendConnection;
