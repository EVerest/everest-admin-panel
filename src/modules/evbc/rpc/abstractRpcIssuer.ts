// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import {
  EverestConfig,
  EverestConfigList,
  EverestInterfaceDefinitionList,
  EverestModuleDefinitionList,
} from "@/modules/evbc";

export abstract class RpcIssuer {
  async get_modules(): Promise<EverestModuleDefinitionList> {
    return this.issue_rpc<EverestModuleDefinitionList>("get_modules", null, false);
  }
  async get_interfaces(): Promise<EverestInterfaceDefinitionList> {
    return this.issue_rpc<EverestInterfaceDefinitionList>("get_interfaces", null, false);
  }
  async get_configs(): Promise<EverestConfigList> {
    return this.issue_rpc<EverestConfigList>("get_configs", null, false);
  }
  async save_config(params: { name: string; config: EverestConfig }, notification: boolean): Promise<void> {
    return this.issue_rpc<void>("save_config", params, notification);
  }
  async restart_modules(): Promise<void> {
    return this.issue_rpc<void>("restart_modules", null, false);
  }
  async get_rpc_timeout(): Promise<number> {
    return this.issue_rpc<number>("get_rpc_timeout", null, false);
  }

  protected abstract issue_rpc<T>(method: string, params: unknown, notification: boolean): Promise<T>;
  public abstract disconnect(): Promise<void>;
}
