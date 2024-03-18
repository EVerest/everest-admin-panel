import {INITIAL_RPC_TIMEOUT_VALUE} from "@/modules/evconf_konva/views/constants";
import {ConnectionStatus} from "@/modules/evbc/connection";
import {RpcIssuer} from "@/modules/evbc/rpc/abstractRpcIssuer";

export class WebsocketRpcIssuer extends RpcIssuer {
    private _pending_commands: Map<number, any> = new Map<number, any>();
    private _socket: WebSocket;
    private _rpc_timeout_ms: number = INITIAL_RPC_TIMEOUT_VALUE;

    constructor(
        private _url: string,
        private publish_connection_state: (status: ConnectionStatus) => void
    ) {
        super();
        this._socket = new WebSocket(this._url);
        this._socket.onopen = this._handle_socket_opened.bind(this);
        this._socket.onmessage = this.handle_backend_message.bind(this);
        this._socket.onerror = this._handle_socket_error.bind(this);
        this._socket.onclose = this._handle_socket_close.bind(this);
    }

    private _handle_socket_opened() {
        this.publish_connection_state({type: "OPENED"});
        this.get_rpc_timeout().then((timeout) => {
            this._rpc_timeout_ms = timeout;
        })
    }

    private _handle_socket_error() {
        this.publish_connection_state({
            type: "ERROR",
            error: `Could not connect to ${this._socket.url}.`,
        });
    }

    private _handle_socket_close() {
        this.publish_connection_state({
            type: "CLOSED",
        });
    }

    public async disconnect() {
        this._socket.close();
    }

    protected async issue_rpc<T>(method: string, params: unknown, notification: boolean): Promise<T> {
        const id = notification ? undefined : Math.floor(Math.random() * 1024 * 1024);
        const rpc_request = {
            method,
            ...(params !== undefined && {params}),
            ...(!notification && {id}),
        };

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
            this._pending_commands.set(id, {resolve, reject, timeout_id});
        });
    }

    public handle_backend_message(ev: MessageEvent) {
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

}
