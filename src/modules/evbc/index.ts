// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// FIXME (aw): clean up all the different types, introduce namespaces?

type ConfigSetSchemaEntry = {
  description: string;
  type: string;
  default?: unknown;
};
export type ConfigSetSchema = Record<string, ConfigSetSchemaEntry>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ConfigSetEntry = any;

export type ConfigSetWithSchema = Array<{
  readonly schema: ConfigSetSchemaEntry & { title: string };
  model: ConfigSetEntry;
}>;

export type ConfigSet = Record<string, ConfigSetEntry>;

export type EverestModuleDefinition = {
  description: string;
  config?: ConfigSetSchema;
  provides?: Record<
    string,
    {
      interface: string;
      description: string;
      config?: ConfigSetSchema;
    }
  >;
  requires?: Record<
    string,
    {
      interface: string;
    }
  >;
  enable_external_mqtt?: boolean;
  metadata: {
    base_license?: string;
    license: string;
    authors: Array<string>;
  };
};

export type EverestModuleDefinitionList = Record<string, EverestModuleDefinition>;

export type TerminalArrangement = {
  top?: Terminal[];
  right?: Terminal[];
  bottom?: Terminal[];
  left?: Terminal[];
};

export type ModuleViewConfig = {
  position: {
    x: number;
    y: number;
  };
  terminals: TerminalArrangement;
};

export type ModuleInstanceModel = {
  readonly type: string;
  id: string;
  module_config?: ConfigSetWithSchema;
  implementation_config?: Record<string, ConfigSetWithSchema>;
  view_config: ModuleViewConfig;
  connections: ConnectionID[];
};

export type EverestModuleConfig = {
  module: string;
  config_module?: ConfigSet;
  config_implementation?: Record<string, ConfigSet>;
  connections?: Record<
    string,
    Array<{
      module_id: string;
      implementation_id: string;
    }>
  >;
};

export type EverestInterfaceDefinition = {
  description: string;
  parent?: string;
  // FIXME (aw): to be done ...
  cmds?: unknown;
  vars?: unknown;
};

export type EverestInterfaceDefinitionList = Record<string, EverestInterfaceDefinition>;

export type EverestConfig = {
  active_modules: Record<string, EverestModuleConfig>;
  "x-module-layout"?: Record<string, ModuleViewConfig>;
};

export type EventHandler<K> = ( ev: K ) => void;

export type EverestConfigList = Record<string, EverestConfig>;

export type EverestDefinitions = {
  modules: EverestModuleDefinitionList;
  interfaces: EverestInterfaceDefinitionList;
};

export type ModuleInfo = {
  type: string;
  definition: EverestModuleDefinition;
};

export type ModuleNodeInfo = {
  id: string;
};

export type TerminalAlignment = keyof TerminalArrangement;

export type TerminalType = "requirement" | "provide";

export type Terminal = {
  readonly type: TerminalType;
  readonly interface: string;
  readonly id: string;
};

export type ModuleInstanceID = number;
export type ConnectionID = number;

export type Connection = {
  providing_instance_id: ModuleInstanceID;
  providing_impl_name: string;
  requiring_instance_id: ModuleInstanceID;
  requirement_name: string;
};
