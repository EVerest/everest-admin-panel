import { ModuleViewConfig, ConfigSetWithSchema } from "../evbc/index";

export type CopiedModule = {
  /** The ID of the module at the time of copy (used for connection mapping) */
  original_id: string;
  /** The user-visible name (ID) */
  name: string;
  /** The module type (e.g., "EvseManager") */
  type: string;
  /** The configuration values (stripped of schema, similar to EverestModuleConfig) */
  config: ConfigSetWithSchema;
  /** The visual configuration (position, terminals) */
  view_config: ModuleViewConfig;
};

export type CopiedConnection = {
  /** ID of the providing module (refers to original_id in CopiedModule) */
  provider_original_id: string;
  /** Name of the implementation provided */
  provider_impl: string;
  /** ID of the requiring module (refers to original_id in CopiedModule) */
  requirer_original_id: string;
  /** Name of the requirement */
  requirement: string;
};

export type ClipboardSnapshot = {
  /** Timestamp of the copy operation */
  timestamp: number;
  /** List of modules included in this snapshot */
  modules: CopiedModule[];
  /** List of connections that exist strictly between the copied modules */
  connections: CopiedConnection[];
};
