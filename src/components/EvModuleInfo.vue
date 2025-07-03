<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-card v-if="module_node" :title="'Module instance information'">
    <template #append>
      <icon-button-with-tooltip
        icon="mdi-close"
        title="Discard selection"
        variant="text"
        density="compact"
        @click="context.unselect()"
      />
    </template>
    <v-card-text>
      <p class="font-weight-bold">Module type: {{ module_node?.instance?.type }}</p>
      <v-form @submit.prevent>
        <!-- FIXME (aw): howto do the binding here? -->
        <v-text-field :model-value="module_node?.instance.id" label="Module ID" :rules="moduleIDRules" />
      </v-form>
      <v-form @submit.prevent>
        <template v-if="module_node.instance.module_config">
          <v-divider />
          <p class="font-weight-bold">Module configuration</p>
          <vjsf
            v-for="(item, index) in module_node.instance.module_config"
            :key="index"
            v-model="item.model"
            :schema="item.schema"
          />
        </template>
        <template v-if="module_node.instance.implementation_config">
          <v-divider />
          <p class="font-weight-bold">Implementation configurations</p>
          <v-expansion-panels>
            <v-expansion-panel v-for="(impl_config, id) in module_node.instance.implementation_config" :key="id">
              <v-expansion-panel-title>
                {{ id }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <vjsf v-for="(item, index) in impl_config" :key="index" v-model="item.model" :schema="item.schema" />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
        <template v-if="showMappingSection">
          <v-divider />
          <p class="font-weight-bold">EVSE/Connector Mapping</p>
          <v-checkbox
            v-model="enableMappingForThisModule"
            label="Configure mapping for this module"
            density="compact"
            hide-details
            class="mb-3"
          />

          <template v-if="enableMappingForThisModule">
            <v-alert v-if="mappingValidation.warnings.length > 0" type="warning" variant="tonal" class="mb-4">
              <v-icon icon="mdi-alert" />
              <div><strong>Configuration Issues:</strong></div>
              <ul class="mt-2">
                <li v-for="warning in mappingValidation.warnings" :key="warning" class="ml-4">
                  {{ warning }}
                </li>
              </ul>
            </v-alert>

            <p class="text-caption text-medium-emphasis mb-4">
              Configure EVSE and connector mappings for this module.
              <v-tooltip text="EVSE ID 0 = entire charging station, EVSE IDs 1+ = individual charging points">
                <template #activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-help-circle" size="small" />
                </template>
              </v-tooltip>
              Choose EVSE IDs from 0 to the number of EvseManager modules in your configuration.
            </p>

            <!-- Module-level mappings - only show when implementation mode is OFF -->
            <div v-if="!showImplementationMappings && module_node.instance.mapping?.module">
              <v-select
                v-model="module_node.instance.mapping.module.evse"
                :items="availableEvseIds"
                label="Module EVSE ID"
                hint="EVSE ID for this module (0 = charging station level)"
                persistent-hint
                clearable
                class="mb-3"
              />
              <v-text-field
                v-model.number="module_node.instance.mapping.module.connector"
                label="Module Connector ID (optional)"
                hint="Connector ID for this module (1-4 typical, optional)"
                persistent-hint
                type="number"
                min="1"
                clearable
                class="mb-3"
              />
            </div>

            <!-- Checkbox to switch between module and implementation mappings -->
            <v-checkbox
              v-if="hasImplementationMappings"
              v-model="showImplementationMappings"
              label="Use implementation-specific mappings (instead of module-level)"
              density="compact"
              class="mt-2 mb-3"
            />

            <!-- Implementation-level mappings -->
            <div v-if="showImplementationMappings && module_node.instance.mapping?.implementations">
              <v-divider class="mb-3" />
              <p class="text-caption text-medium-emphasis mb-3">
                Advanced: Configure specific mappings for individual implementations
              </p>
              <div
                v-for="(implMapping, implName) in module_node.instance.mapping.implementations"
                :key="implName"
                class="mb-4"
              >
                <h4 class="text-subtitle-2 mb-2">{{ implName }} Implementation</h4>
                <v-select
                  v-model="implMapping.evse"
                  :items="availableEvseIds"
                  :label="`${implName} EVSE ID`"
                  hint="EVSE ID for this implementation"
                  persistent-hint
                  clearable
                  class="mb-3"
                />
                <v-text-field
                  v-model.number="implMapping.connector"
                  :label="`${implName} Connector ID (optional)`"
                  hint="Connector ID for this implementation (1-4 typical, optional)"
                  persistent-hint
                  type="number"
                  min="1"
                  clearable
                  class="mb-3"
                />
              </div>
            </div>
          </template>
        </template>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <icon-button-with-tooltip
        icon="mdi-delete"
        title="Delete instance"
        @click="delete_module_instance(module_node.instance_id)"
      />
    </v-card-actions>
  </v-card>
  <v-card v-else-if="connection">
    <v-card-title>
      Connection
      <icon-button-with-tooltip
        icon="mdi-close"
        title="Discard selection"
        variant="text"
        density="compact"
        @click="context.unselect()"
      />
    </v-card-title>
    <v-card-text>
      The requirement <code>{{ connection.to.name }}</code> of <code>{{ connection.to.id }}</code> is fulfilled by
      implementation <code>{{ connection.from.name }}</code> of <code>{{ connection.from.id }}</code>
    </v-card-text>
    <v-card-actions>
      <icon-button-with-tooltip icon="mdi-delete" title="Delete connection" @click="delete_connection(connection.id)" />
    </v-card-actions>
  </v-card>
  <v-card v-else-if="terminal">
    <v-card-title>
      {{ terminal.type === "provide" ? "Implementation" : "Requirement" }}: <code>{{ terminal.id }}</code>
      <icon-button-with-tooltip
        icon="mdi-close"
        title="Discard selection"
        variant="text"
        density="compact"
        @click="context.unselect()"
      />
    </v-card-title>
    <v-card-text>
      Interface type: <code>{{ terminal.interface }}</code>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Vjsf } from "@koumoul/vjsf";
import IconButtonWithTooltip from "./IconButtonWithTooltip.vue";
import { ConnectionID, ModuleInstanceID } from "@/modules/evbc";
import ConfigStageContext from "@/modules/evconf_konva/stage_context";
import { useEvbcStore } from "@/store/evbc";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    Vjsf,
    IconButtonWithTooltip,
  },
  setup() {
    const evbcStore = useEvbcStore();
    const { current_config } = storeToRefs(evbcStore);

    const module_node = computed(() => {
      const instance_id = evbcStore.get_selected_module_instance();
      if (instance_id === null) {
        return null;
      }
      const instance = current_config.value.get_module_instance(instance_id);
      return {
        instance_id,
        instance,
      };
    });

    const terminal = computed(() => {
      return evbcStore.get_selected_terminal();
    });

    const connection = computed(() => {
      const connection_id = evbcStore.get_selected_connection();
      if (connection_id === null) {
        return null;
      }
      const cxn = current_config.value.get_connection(connection_id);
      const requiring_module = current_config.value.get_module_instance(cxn.requiring_instance_id);
      const implementing_module = current_config.value.get_module_instance(cxn.providing_instance_id);

      return {
        from: {
          type: implementing_module.type,
          id: implementing_module.id,
          name: cxn.providing_impl_name,
        },
        to: {
          type: requiring_module.type,
          id: requiring_module.id,
          name: cxn.requirement_name,
        },
        id: connection_id,
      };
    });

    const context = computed((): ConfigStageContext => {
      return evbcStore.config_context;
    });

    const moduleIDRules = computed(() => {
      return [
        (v: string) => {
          const instance_id = module_node.value.instance_id;
          const result = current_config.value.update_module_id(instance_id, v);
          return result || "This module id is not available";
        },
      ];
    });

    function delete_connection(id: ConnectionID) {
      current_config.value.delete_connection(id);
    }

    function delete_module_instance(id: ModuleInstanceID) {
      current_config.value.delete_module_instance(id);
    }

    // Checkbox state derived from mapping object (YAML-first)
    const showImplementationMappings = computed({
      get: () => !!module_node.value?.instance?.mapping?.implementations,
      set: (useImplementations: boolean) => {
        if (!module_node.value?.instance) return;

        const instance = module_node.value.instance;
        const module_definition = current_config.value.module_definitions[instance.type];

        // Initialize mapping if it doesn't exist
        if (!instance.mapping) {
          instance.mapping = {};
        }

        if (useImplementations) {
          // Switch to implementations mode: delete module, create implementations with defaults
          if (instance.mapping.module) {
            delete instance.mapping.module;
          }

          if (module_definition.provides) {
            instance.mapping.implementations = {};
            Object.keys(module_definition.provides).forEach((impl_name) => {
              instance.mapping.implementations[impl_name] = { evse: 0 };
            });
          }
        } else {
          // Switch to module mode: delete implementations, create module with default
          if (instance.mapping.implementations) {
            delete instance.mapping.implementations;
          }

          instance.mapping.module = { evse: 0 };
        }
      },
    });

    // Computed properties for intelligent mapping UI
    const isMappingNeeded = computed(() => {
      return current_config.value.is_mapping_needed();
    });

    // Always show the mapping section - let users decide
    const showMappingSection = computed(() => {
      return !!module_node.value;
    });

    // User-controlled checkbox to enable mapping for this specific module
    const enableMappingForThisModule = computed({
      get: () => !!module_node.value?.instance?.mapping,
      set: (enabled: boolean) => {
        if (!module_node.value?.instance) return;

        const instance = module_node.value.instance;

        if (enabled) {
          // Initialize mapping with default module-level mapping
          instance.mapping = {
            module: { evse: 0 },
          };
        } else {
          // Remove mapping entirely
          delete instance.mapping;
        }
      },
    });

    const availableEvseIds = computed(() => {
      return current_config.value.get_available_evse_ids().map((id) => ({
        title: id === 0 ? `${id} (Charging Station)` : `${id} (EVSE ${id})`,
        value: id,
      }));
    });

    const mappingValidation = computed(() => {
      return current_config.value.validate_mapping_configuration();
    });

    const hasImplementationMappings = computed(() => {
      if (!module_node.value?.instance) return false;
      const module_definition = current_config.value.module_definitions[module_node.value.instance.type];
      return !!(module_definition.provides && Object.keys(module_definition.provides).length > 0);
    });

    return {
      module_node,
      terminal,
      current_config,
      connection,
      context,
      moduleIDRules,
      delete_connection,
      delete_module_instance,
      isMappingNeeded,
      showMappingSection,
      enableMappingForThisModule,
      availableEvseIds,
      mappingValidation,
      showImplementationMappings,
      hasImplementationMappings,
    };
  },
});
</script>
