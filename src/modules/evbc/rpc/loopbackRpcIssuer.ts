// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest
import { LOOPBACK_WAIT_MS } from "@/modules/evbc/connection";
import {
  EverestConfig,
  EverestConfigList,
  EverestInterfaceDefinitionList,
  EverestModuleDefinitionList,
  EverestModuleConfig,
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

  private static isEverestModuleConfig(val: unknown): val is EverestModuleConfig {
    if (!val || typeof val !== "object" || Array.isArray(val)) {
      return false;
    }
    const obj = val as Record<string, unknown>;

    // required field
    if (typeof obj.module !== "string") {
      return false;
    }

    // optional fields basic checks
    if (obj.config_module !== undefined && (typeof obj.config_module !== "object" || obj.config_module === null)) {
      return false;
    }

    if (
      obj.config_implementation !== undefined &&
      (typeof obj.config_implementation !== "object" || obj.config_implementation === null)
    ) {
      return false;
    }

    return true;
  }

  private static isEverestConfig(val: unknown): val is EverestConfig {
    if (!val || typeof val !== "object" || Array.isArray(val)) {
      return false;
    }
    const obj = val as Record<string, unknown>;

    const am = obj.active_modules;
    if (!am || typeof am !== "object" || Array.isArray(am)) {
      return false;
    }

    for (const k of Object.keys(am)) {
      if (!Object.prototype.hasOwnProperty.call(am, k)) {
        continue;
      }
      // There is no object injection possible here, `k` is valid.
      // Prevent ESlint from flagging a false positive for `am[k]`.
      // eslint-disable-next-line security/detect-object-injection
      const entry = (am as Record<string, unknown>)[k];
      if (!LoopbackRpcIssuer.isEverestModuleConfig(entry)) {
        return false;
      }
    }

    // optional x-module-layout basic shape check (shallow)
    const layout = obj["x-module-layout"];
    if (layout !== undefined) {
      if (typeof layout !== "object" || layout === null || Array.isArray(layout)) {
        return false;
      }
    }

    return true;
  }

  private static getConfigsFromLocalStorageOrDefault(): EverestConfigList {
    const configsString = localStorage.getItem("configs");
    if (configsString) {
      const parsedConfigs = JSON.parse(configsString) as Record<string, unknown>;

      // Safely merge parsedConfigs into a fresh copy of SampleConfigList.
      // Only accept own properties and only values that look like plain objects
      // (basic shape check) to avoid prototype pollution / mass-assignment issues.
      // There is no unsafe assignment of an 'any' value here, disable the rule
      // for the next line.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const safeMerge: Record<string, EverestConfig> = { ...SampleConfigList };

      for (const key of Object.keys(parsedConfigs)) {
        if (!Object.prototype.hasOwnProperty.call(parsedConfigs, key)) {
          continue;
        }

        // There is no object injection possible here, `key` is valid.
        // Prevent ESlint from flagging a false positive for `parsedConfigs[key]`.
        // eslint-disable-next-line security/detect-object-injection
        const val = parsedConfigs[key];

        // Make sure that only valid EverestConfig objects are merged.
        if (LoopbackRpcIssuer.isEverestConfig(val)) {
          // There is no object injection possible here, `key` is valid. Also, `val`
          // is safe due to the type guard above.
          // Prevent ESlint from flagging false positives for `safeMerge[key]` and `val`.
          // eslint-disable-next-line security/detect-object-injection, @typescript-eslint/no-unsafe-assignment
          safeMerge[key] = val;
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
