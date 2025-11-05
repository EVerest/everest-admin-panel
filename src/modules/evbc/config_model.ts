// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import {
  ConfigSet,
  ConfigSetSchema,
  ConfigSetWithSchema,
  Connection,
  ConnectionID,
  EventHandler,
  EverestConfig,
  EverestDefinitions,
  EverestModuleConfig,
  EverestModuleDefinition,
  EverestModuleDefinitionList,
  ModuleInstanceID,
  ModuleInstanceModel,
  ModuleViewConfig,
  TerminalAlignment,
  TerminalArrangement,
} from ".";
import { default_terminals, generate_interface_parents_map, InterfaceParentMap } from "./utils";

import clone from "just-clone";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

function get_next_available_name(prefix: string, name_list: string[]): string {
  const valid_integral_endings = name_list
    .filter((item) => item.startsWith(prefix))
    .map((item) => Number(item.slice(prefix.length)))
    .filter((item) => Number.isInteger(item) && item >= 0)
    .sort((a, b) => a - b);

  const count = valid_integral_endings.length;

  const next_number = count === 0 ? 0 : valid_integral_endings[count - 1] + 1;

  return `${prefix}${next_number}`;
}

function config_set_with_schema_to_config_set(config_set: ConfigSetWithSchema): ConfigSet {
  const entries = config_set.filter((item) => item.model !== undefined).map((item) => [item.schema.title, item.model]);

  return Object.fromEntries(entries);
}

type ModulInstanceeAddedEvent = {
  readonly type: "MODULE_INSTANCE_ADDED";
  readonly id: ModuleInstanceID;
};

type ModulInstanceeUpdatedEvent = {
  readonly type: "MODULE_INSTANCE_UPDATED";
  readonly id: ModuleInstanceID;
};

type ModuleInstanceDeletedEvent = {
  readonly type: "MODULE_INSTANCE_DELETED";
  readonly id: ModuleInstanceID;
};

type ConnectionAddedEvent = {
  readonly type: "CONNECTION_ADDED";
  readonly id: ConnectionID;
};

type ConnectionDeletedEvent = {
  readonly type: "CONNECTION_DELETED";
  readonly id: ConnectionID;
};

export type ConfigModelEvent =
  | ModulInstanceeAddedEvent
  | ModulInstanceeUpdatedEvent
  | ModuleInstanceDeletedEvent
  | ConnectionAddedEvent
  | ConnectionDeletedEvent;

class EVConfigModel {
  readonly _module_definitions: EverestModuleDefinitionList;
  readonly _interface_parents: InterfaceParentMap;

  _next_instance_id: ModuleInstanceID = 0;
  _next_connection_id: ConnectionID = 0;
  _name: string;
  _instances: Record<ModuleInstanceID, ModuleInstanceModel> = {};
  _connections: Record<ConnectionID, Connection> = {};

  // FIXME (aw): refactor this functionality like a mixin or something similar
  readonly _event_handlers: EventHandler<ConfigModelEvent>[] = [];

  constructor(definitions: EverestDefinitions, name: string, config?: EverestConfig) {
    this._module_definitions = definitions.modules;

    // FIXME (aw): this belongs somewhere else, client and config model should
    // share some common set or similar
    this._interface_parents = generate_interface_parents_map(definitions.interfaces);

    // FIXME (aw): validate name
    this._name = name;

    if (!config) {
      return;
    }

    Object.entries(config.active_modules).forEach(([module_id, module_config]) => {
      this._add_module_instance(module_config.module, module_id, module_config, config["x-module-layout"]?.[module_id]);
    });

    Object.entries(this._instances).forEach(([_instance_id, module_instance]) => {
      const instance_connections = config.active_modules[module_instance.id].connections;
      if (!instance_connections) {
        return;
      }

      Object.entries(instance_connections).forEach(([requirement_name, requirement_connections]) => {
        requirement_connections.forEach((provider) => {
          const providing_instance_id = this._module_instance_id_from_module_id(provider.module_id);
          this.add_connection({
            providing_impl_name: provider.implementation_id,
            providing_instance_id,
            requirement_name,
            requiring_instance_id: Number(_instance_id),
          });
        });
      });
    });
  }

  _module_instance_id_from_module_id(module_id: string) {
    const pair = Object.entries(this._instances).find(([, instance]) => instance.id === module_id);
    return pair ? Number(pair[0]) : null;
  }

  add_observer(handler: EventHandler<ConfigModelEvent>) {
    this._event_handlers.push(handler);
  }

  _notify(event: ConfigModelEvent) {
    this._event_handlers.forEach((handler) => {
      handler(event);
    });
  }

  add_new_module_instance(module_type: string, module_id?: string): ModuleInstanceID {
    module_id =
      module_id ||
      get_next_available_name(
        module_type,
        Object.values(this._instances).map((item) => item.id),
      );
    return this._add_module_instance(module_type, module_id);
  }

  delete_module_instance(id: ModuleInstanceID) {
    if (!(id in this._instances)) {
      throw Error(t("config_model.deleteModelInstanceError", { id }));
    }

    const cxns = Object.entries(this._connections).filter(
      ([, cxn]) => cxn.providing_instance_id === id || cxn.requiring_instance_id === id,
    );

    cxns.forEach(([cxn_id]) => {
      this.delete_connection(parseInt(cxn_id));
    });

    delete this._instances[id];
    this._notify({ type: "MODULE_INSTANCE_DELETED", id });
  }

  add_connection(conn: Connection): ConnectionID {
    this._validate_connection(conn);

    this._connection_exists(conn);

    const new_connection_id = this._next_connection_id;
    this._next_connection_id++;

    const new_connection: Connection = Object.assign({}, conn);

    this._connections[new_connection_id] = new_connection;

    this._add_connection_to_instance(conn.requiring_instance_id, new_connection_id);

    // FIXME (aw): signal new connection
    this._notify({ type: "CONNECTION_ADDED", id: new_connection_id });

    return new_connection_id;
  }

  // FIXME (aw): all these update module things need to factored out in a module instance model class
  update_module_id(module_instance_id: ModuleInstanceID, new_module_id: string): boolean {
    const module_instance = this.get_module_instance(module_instance_id);
    if (module_instance.id === new_module_id) {
      // module id stays the same, so nothing to do ¯\_(ツ)_/¯
      return true;
    }

    if (Object.values(this._instances).filter((config) => config.id === new_module_id).length) {
      return false;
    }

    module_instance.id = new_module_id;

    this._notify({ type: "MODULE_INSTANCE_UPDATED", id: module_instance_id });

    return true;
  }

  update_module_view_position(module_instance_id: ModuleInstanceID, pos: ModuleViewConfig["position"]) {
    const module_instance = this.get_module_instance(module_instance_id);
    module_instance.view_config.position = clone(pos);
  }

  update_module_view_terminals(module_instance_id: ModuleInstanceID, arrangement: TerminalArrangement) {
    const module_instance = this.get_module_instance(module_instance_id);
    for (const _alignment in arrangement) {
      // FIXME (aw): is any clever way for solving this retyping?
      const alignment = _alignment as TerminalAlignment;
      module_instance.view_config.terminals[alignment] = clone(arrangement[alignment]);
    }
  }

  get_connection(connection_id: ConnectionID) {
    return this._connections[connection_id];
  }

  delete_connection(connection_id: ConnectionID) {
    if (!(connection_id in this._connections)) {
      throw Error(t("config_model.deleteConnectionError", { id: connection_id }));
    }

    const conn = this._connections[connection_id];
    this._remove_connection_from_instance(conn.requiring_instance_id, connection_id);

    delete this._connections[connection_id];

    this._notify({ type: "CONNECTION_DELETED", id: connection_id });
  }

  get module_definitions() {
    return this._module_definitions;
  }

  get_module_instance(id: ModuleInstanceID) {
    // FIXME (aw): check for existance and throw?
    return this._instances[id];
  }

  interfaces_match(provide: string, requirement: string): boolean {
    return provide === requirement || (this._interface_parents[provide]?.has(requirement) ?? false);
  }

  serialize(): EverestConfig {
    const config: EverestConfig = { active_modules: {}, "x-module-layout": {} };
    Object.entries(this._instances).forEach(([, instance]) => {
      const modules_config = config.active_modules;
      // FIXME (aw): clean this up
      const connections: Record<
        string,
        {
          module_id: string;
          implementation_id: string;
        }[]
      > = {};

      instance.connections
        .map((id) => this._connections[id])
        .forEach((cxn) => {
          const fullfilment = {
            module_id: this._instances[cxn.providing_instance_id].id,
            implementation_id: cxn.providing_impl_name,
          };
          if (cxn.requirement_name in connections) {
            connections[cxn.requirement_name].push(fullfilment);
          } else {
            connections[cxn.requirement_name] = [fullfilment];
          }
        });

      modules_config[instance.id] = {
        module: instance.type,
        connections,
        ...(instance.mapping && { mapping: instance.mapping }),
      };

      config["x-module-layout"][instance.id] = instance.view_config;

      // FIXME (aw): looks ugly, also the naming twist is annoying
      if (instance.module_config && Object.keys(instance.module_config).length !== 0) {
        modules_config[instance.id].config_module = config_set_with_schema_to_config_set(instance.module_config);
      }

      if (instance.implementation_config) {
        const implementation_config: Record<string, ConfigSet> = {};
        Object.entries(instance.implementation_config).forEach(([impl_name, config_set_with_schema]) => {
          const config_set = config_set_with_schema_to_config_set(config_set_with_schema);
          if (Object.keys(config_set).length !== 0) {
            implementation_config[impl_name] = config_set;
          }
        });

        if (Object.keys(implementation_config).length !== 0) {
          modules_config[instance.id].config_implementation = implementation_config;
        }
      }
    });

    return config;
  }

  _setup_config_set(schema: ConfigSetSchema, config?: ConfigSet): ConfigSetWithSchema {
    if (schema === undefined) {
      return undefined;
    }
    return Object.entries(schema).map(([key, value]) => {
      const config_value = config !== undefined && key in config ? config[key] : value.default;
      return { schema: { ...value, title: key }, model: config_value };
    });
  }

  _setup_mapping_config_set(
    module_definition: EverestModuleDefinition,
    mapping?: {
      module?: { evse?: number; connector?: number };
      implementations?: Record<string, { evse: number; connector?: number }>;
    },
  ): ConfigSetWithSchema {
    // XXX: (pa) Not sure if schema entries need translation
    const schema_entries = [];

    // Add module-level mapping fields
    if (mapping?.module || Object.keys(module_definition.provides || {}).length > 0) {
      schema_entries.push({
        schema: {
          title: "Module EVSE ID",
          description: "EVSE ID for this module",
          type: "integer",
          minimum: 1,
        },
        model: mapping?.module?.evse || null,
      });

      schema_entries.push({
        schema: {
          title: "Module Connector ID",
          description: "Connector ID for this module (optional)",
          type: "integer",
          minimum: 1,
        },
        model: mapping?.module?.connector || null,
      });
    }

    // Add implementation-level mapping fields
    if (module_definition.provides) {
      Object.entries(module_definition.provides).forEach(([impl_name]) => {
        const impl_mapping = mapping?.implementations?.[impl_name];

        schema_entries.push({
          schema: {
            title: `${impl_name} Implementation EVSE ID`,
            description: `EVSE ID for ${impl_name} implementation`,
            type: "integer",
            minimum: 1,
          },
          model: impl_mapping?.evse || null,
        });

        schema_entries.push({
          schema: {
            title: `${impl_name} Implementation Connector ID`,
            description: `Connector ID for ${impl_name} implementation (optional)`,
            type: "integer",
            minimum: 1,
          },
          model: impl_mapping?.connector || null,
        });
      });
    }

    return schema_entries.length > 0 ? schema_entries : undefined;
  }

  _add_module_instance(type: string, id: string, config?: EverestModuleConfig, view_config?: ModuleViewConfig): number {
    if (!(type in this._module_definitions)) {
      throw Error(t("config_model.moduleInvalidError", { type }));
    }
    if (Object.values(this._instances).filter((value) => value.id === id).length) {
      throw Error(t("config_model.moduleExistsError", { moduleId: module.id }));
    }

    const manifest = this._module_definitions[type];
    const impl_configs: Record<string, ConfigSetWithSchema> = {};
    Object.entries(manifest.provides).forEach(([impl_name, impl_def]) => {
      const impl_config =
        config?.config_implementation !== undefined && impl_name in config.config_implementation
          ? config.config_implementation[impl_name]
          : undefined;
      if (impl_def.config !== undefined) {
        impl_configs[impl_name] = this._setup_config_set(impl_def.config, impl_config);
      }
    });

    const instance_id = this._next_instance_id;
    this._next_instance_id++;

    // Auto-assign mapping for new EvseManager instances
    let auto_mapping = config?.mapping;
    if (type === "EvseManager" && !auto_mapping) {
      const evse_manager_count = Object.values(this._instances).filter(
        (instance) => instance.type === "EvseManager",
      ).length;
      auto_mapping = {
        module: {
          evse: evse_manager_count + 1,
          connector: 1,
        },
      };
    }

    // Apply fallback logic: if both module and implementations exist, keep implementations only
    let final_mapping = auto_mapping;
    if (final_mapping?.module && final_mapping?.implementations) {
      // Invalid state: both module and implementations exist
      // Fallback: remove module, keep implementations (more complex mode)
      final_mapping = {
        implementations: final_mapping.implementations,
      };
    }

    // Initialize mapping with defaults if none exists (only for modules that need mappings)
    if (!final_mapping && this.needs_mapping_ui(type)) {
      final_mapping = {
        module: { evse: 0 }, // Default to charging station level
      };
    }

    this._instances[instance_id] = {
      id,
      type,
      module_config: this._setup_config_set(manifest.config, config?.config_module),
      implementation_config: Object.keys(impl_configs).length ? impl_configs : undefined,
      connections: [],
      view_config: view_config
        ? view_config
        : {
            position: null,
            terminals: default_terminals(manifest),
          },
      mapping: final_mapping,
      mapping_config: this._setup_mapping_config_set(manifest, final_mapping),
    };

    // FIXME (aw): notify about new module instance
    this._notify({ type: "MODULE_INSTANCE_ADDED", id: instance_id });
    return instance_id;
  }

  _validate_connection(conn: Connection) {
    const prov_id = conn.providing_instance_id;
    if (!(prov_id in this._instances)) {
      throw Error(t("config_model.providingInstanceDoesNotExistError", { instanceId: prov_id }));
    }

    const req_id = conn.requiring_instance_id;
    if (!(req_id in this._instances)) {
      throw Error(t("config_model.requiringInstanceDoesNotExistError", { instanceId: req_id }));
    }

    const prov_module = this._instances[prov_id].type;
    const prov_manifest = this._module_definitions[prov_module];

    const req_module = this._instances[req_id].type;
    const req_manifest = this._module_definitions[req_module];

    if (!(conn.providing_impl_name in prov_manifest.provides)) {
      throw Error(t("config_model.providingModuleDoesNotProvideError", { moduleType: prov_module, implementationName: conn.providing_impl_name }));
    }

    if (!(conn.requirement_name in req_manifest.requires)) {
      throw Error(t("config_model.requiringModuleDoesNotRequireError", { moduleType: req_module, requirementName: conn.requirement_name }));
    }

    const prov_interface = prov_manifest.provides[conn.providing_impl_name].interface;
    const req_interface = req_manifest.requires[conn.requirement_name].interface;

    if (!this.interfaces_match(prov_interface, req_interface)) {
      throw Error(t("config_model.interfaceMismatchError", { provider: prov_interface, requirement: req_interface }));
    }
  }

  _connection_exists(conn: Connection) {
    for (const [, other_conn] of Object.entries(this._connections)) {
      if (
        conn.providing_impl_name === other_conn.providing_impl_name &&
        conn.providing_instance_id === other_conn.providing_instance_id &&
        conn.requirement_name === other_conn.requirement_name &&
        conn.requiring_instance_id === other_conn.requiring_instance_id
      ) {
        throw Error(t("config_model.connectionExistsError", { connection: JSON.stringify(conn, null, 2) }));
      }
    }
  }

  _add_connection_to_instance(instance_id: ModuleInstanceID, connection_id: ConnectionID) {
    this._instances[instance_id].connections.push(connection_id);
  }

  _remove_connection_from_instance(instance_id: ModuleInstanceID, connection_id: ConnectionID) {
    const connection_list = this._instances[instance_id].connections;
    const index = connection_list.indexOf(connection_id);
    if (index > -1) {
      connection_list.splice(index, 1);
    }
  }

  is_mapping_needed(): boolean {
    const evse_managers = Object.values(this._instances).filter((instance) => instance.type === "EvseManager");
    return evse_managers.length > 1;
  }

  get_available_evse_ids(): number[] {
    const evse_ids = new Set<number>();

    // Always include EVSE ID 0 (charging station level)
    evse_ids.add(0);

    // Generate EVSE IDs based on EvseManager count
    const evse_manager_count = Object.values(this._instances).filter(
      (instance) => instance.type === "EvseManager",
    ).length;

    // Generate 1..N sequence based on EvseManager count
    for (let i = 1; i <= evse_manager_count; i++) {
      evse_ids.add(i);
    }

    return Array.from(evse_ids).sort((a, b) => a - b);
  }

  validate_mapping_configuration(): { valid: boolean; warnings: string[] } {
    const warnings: string[] = [];
    const evse_manager_count = Object.values(this._instances).filter(
      (instance) => instance.type === "EvseManager",
    ).length;

    // Check for mapping values that exceed available EvseManager count
    Object.values(this._instances).forEach((instance) => {
      if (instance.mapping?.module?.evse !== undefined) {
        const evse_id = instance.mapping.module.evse;
        if (evse_id > evse_manager_count) {
          warnings.push(t("config_model.evseIdCountWarning", { instanceId: instance.id, evseId: evse_id, evseManagerCount: evse_manager_count }));
        }
      }

      if (instance.mapping?.implementations) {
        Object.entries(instance.mapping.implementations).forEach(([impl_name, impl_mapping]) => {
          if (impl_mapping.evse > evse_manager_count) {
            warnings.push(t("config_model.moduleImplementationCountWarning", { instanceId: instance.id, implementation: impl_name, evseId: impl_mapping.evse, evseManagerCount: evse_manager_count }));
          }
        });
      }
    });

    return { valid: warnings.length === 0, warnings };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  needs_mapping_ui(module_type: string): boolean {
    // TODO: Implement smarter detection logic based on module type/interfaces
    // For now, show mapping UI for all modules when multiple EVSE managers exist
    // Let users decide if they need mappings for their specific use case
    return this.is_mapping_needed();
  }
}

export default EVConfigModel;
