// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

import {RpcIssuer} from "./rpc/abstractRpcIssuer";
import {LoopbackRpcIssuer} from "@/modules/evbc/rpc/loopbackRpcIssuer";
import {WebsocketRpcIssuer} from "@/modules/evbc/rpc/websocketRpcIssuer";

// set a value greater than 0 to simulate a delay in the loopback mode
export const LOOPBACK_WAIT_MS = 0;

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

type ConnectionDisconnectedStatus = {
  type: "DISCONNECTED";
}

export type ConnectionStatus =
  | ConnectionOpenStatus
  | ConnectionOpenedStatus
  | ConnectionClosedStatus
    | ConnectionErrorStatus
    | ConnectionDisconnectedStatus;

export type ConnectionStatusListener = (status: ConnectionStatus) => void;

class EVBackendConnection {
  _socket: WebSocket;
  _last_message: ConnectionStatus;
  _loopback = false;
  rpc_issuer: RpcIssuer;

  constructor(private _url: string, private _listener: ConnectionStatusListener) {
    this._publish_connection_state({ type: "OPEN", url: this._url });
    if (this._url === "ws://loopback:8849") {
      this._connect_loopback_mode();
    } else {
      this._connect_websocket_mode();
    }
  }

  public get url(): string {
    return this._url;
  }

  _connect_websocket_mode() {
    this.rpc_issuer = new WebsocketRpcIssuer(this._url, this._publish_connection_state.bind(this));
  }

  _connect_loopback_mode() {
    this.rpc_issuer = new LoopbackRpcIssuer();
    this._loopback = true;
    setTimeout(() => {
      this._publish_connection_state({ type: "OPENED" });
    }, LOOPBACK_WAIT_MS);
  }

  async _disconnect() {
    await this.rpc_issuer.disconnect();
    this._publish_connection_state({type: "DISCONNECTED"});
    this._listener = () => {};
  }

  _publish_connection_state(status: ConnectionStatus): void {
    this._listener(status);
  }
}

export default EVBackendConnection;
