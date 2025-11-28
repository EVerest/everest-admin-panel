// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
import { LOOPBACK_WAIT_MS } from "@/modules/evbc/connection";
import {
  EverestConfig,
  EverestConfigList,
  EverestInterfaceDefinitionList,
  EverestModuleDefinitionList,
} from "@/modules/evbc";
import SampleManifestList from "@/modules/evbc/simulator-sample-data/sample_module_info";
import SampleInterfaceList from "@/modules/evbc/simulator-sample-data/sample_interfaces_list";
import SampleConfigList from "@/modules/evbc/simulator-sample-data/sample_config_list";
import { RpcIssuer } from "@/modules/evbc/rpc/abstractRpcIssuer";

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
    const configs = LoopbackRpcIssuer.getConfigsFromLocalStorageOrDefault();
    return this.random_wait_resolve<EverestConfigList>(configs);
  }

  private static getConfigsFromLocalStorageOrDefault(): EverestConfigList {
    const configsString = localStorage.getItem("configs");
    if (configsString) {
      const parsedConfigs = JSON.parse(configsString) as Record<string, unknown>;

      // Safely merge parsedConfigs into a fresh copy of SampleConfigList.
      // Only accept own properties and only values that look like plain objects
      // (basic shape check) to avoid prototype pollution / mass-assignment issues.
      const safeMerge: Record<string, EverestConfig> = { ...SampleConfigList };

      for (const key of Object.keys(parsedConfigs)) {
        if (!Object.prototype.hasOwnProperty.call(parsedConfigs, key)) {
          continue;
        }

        // There is no object injection possible here, `key` is valid.
        // Prevent ESlint from flagging a false positive for `parsedConfigs[key]`.
        // eslint-disable-next-line security/detect-object-injection
        const val = parsedConfigs[key];

        if (val && typeof val === "object" && !Array.isArray(val)) {
          // There is no object injection possible here, `key` is valid.
          // Prevent ESlint from flagging a false positive for `safeMerge[key]`.
          // eslint-disable-next-line security/detect-object-injection
          safeMerge[key] = val as EverestConfig;
        }
      }
      return safeMerge as EverestConfigList;
    } else {
      return SampleConfigList;
    }
  }

  public async save_config(params: { name: string; config: EverestConfig }): Promise<void> {
    const configs = LoopbackRpcIssuer.getConfigsFromLocalStorageOrDefault();
    configs[params.name] = params.config;
    localStorage.setItem("configs", JSON.stringify(configs));
    return this.random_wait_resolve();
  }

  public async restart_modules(): Promise<void> {
    return this.random_wait_resolve();
  }

  public async get_rpc_timeout(): Promise<number> {
    return this.random_wait_resolve<number>(5000);
  }

  protected issue_rpc<T>(): Promise<T> {
    throw new Error("Method not implemented in LoopbackRpcIssuer.");
  }

  public async disconnect(): Promise<void> {
    return this.random_wait_resolve();
  }
}
