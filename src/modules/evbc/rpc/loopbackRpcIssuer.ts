import {LOOPBACK_WAIT_MS} from "@/modules/evbc/connection";
import {EverestConfigList, EverestInterfaceDefinitionList, EverestModuleDefinitionList} from "@/modules/evbc";
import SampleManifestList from "@/modules/evbc/sample_module_info";
import SampleInterfaceList from "@/modules/evbc/sample_interfaces_list";
import SampleConfigList from "@/modules/evbc/sample_config_list";
import {RpcIssuer} from "@/modules/evbc/rpc/abstractRpcIssuer";

/**
 * This class is a mock implementation of RpcIssuer that simulates the behavior of an everest instance.
 */
export class LoopbackRpcIssuer extends RpcIssuer {
    private random_wait_resolve(): Promise<void>;
    private random_wait_resolve<T>(returnValue: T): Promise<T>;
    private random_wait_resolve<T>(returnValue?: T extends void ? undefined : T): Promise<T> {
        if (returnValue) {
            return new Promise<T>((resolve) => {
                setTimeout(() => resolve(returnValue), Math.random() * 4 * LOOPBACK_WAIT_MS);
            });
        } else {
            return new Promise<void>((resolve) => {
                setTimeout(() => resolve(), Math.random() * 4 * LOOPBACK_WAIT_MS);
            }) as Promise<T>;
        }
    }

    public async get_modules(): Promise<EverestModuleDefinitionList> {
        return this.random_wait_resolve<EverestModuleDefinitionList>(SampleManifestList);
    }

    public async get_interfaces(): Promise<EverestInterfaceDefinitionList> {
        return this.random_wait_resolve<EverestInterfaceDefinitionList>(SampleInterfaceList);
    }

    public async get_configs(): Promise<EverestConfigList> {
        return this.random_wait_resolve<EverestConfigList>(SampleConfigList);
    }

    public async save_config(): Promise<void> {
        return this.random_wait_resolve();
    }

    public async restart_modules(): Promise<void> {
        return this.random_wait_resolve();
    }

    public async get_rpc_timeout(): Promise<number> {
        return this.random_wait_resolve<number>(5000);
    }

    protected async issue_rpc<T>(): Promise<T> {
        throw new Error("Method not implemented in LoopbackRpcIssuer.");
    }

    public async disconnect(): Promise<void> {
        return this.random_wait_resolve();
    }
}
