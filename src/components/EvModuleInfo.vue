<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-card
    v-if="module_node"
    :title="'Module instance information'"
  >
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
      <p class="font-weight-bold">
        Module type: {{ module_node?.instance?.type }}
      </p>
      <v-form @submit.prevent>
        <!-- FIXME (aw): howto do the binding here? -->
        <v-text-field
          :model-value="module_node?.instance.id"
          label="Module ID"
          :rules="moduleIDRules"
        />
      </v-form>
      <v-form @submit.prevent>
        <template v-if="module_node.instance.module_config">
          <v-divider />
          <p class="font-weight-bold">
            Module configuration
          </p>
          <vjsf
            v-for="(item, index) in module_node.instance.module_config"
            :key="index"
            v-model="item.model"
            :schema="item.schema"
          />
        </template>
        <template v-if="module_node.instance.implementation_config">
          <v-divider />
          <p class="font-weight-bold">
            Implementation configurations
          </p>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(impl_config, id) in module_node.instance.implementation_config"
              :key="id"
            >
              <v-expansion-panel-title>
                {{ id }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <vjsf
                  v-for="(item, index) in impl_config"
                  :key="index"
                  v-model="item.model"
                  :schema="item.schema"
                />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
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
      <icon-button-with-tooltip
        icon="mdi-delete"
        title="Delete connection"
        @click="delete_connection(connection.id)"
      />
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
import { defineComponent, computed, } from "vue";
import { Vjsf, } from "@koumoul/vjsf";
import IconButtonWithTooltip from "./IconButtonWithTooltip.vue";
import { ConnectionID, ModuleInstanceID, } from "@/modules/evbc";
import ConfigStageContext from "@/modules/evconf_konva/stage_context";
import { useEvbcStore, } from "@/store/evbc";
import { storeToRefs, } from "pinia";

export default defineComponent({
  components: {
    Vjsf,
    IconButtonWithTooltip,
  },
  setup() {
    const evbcStore = useEvbcStore();
    const { current_config, } = storeToRefs(evbcStore,);

    const module_node = computed(() => {
      const instance_id = evbcStore.get_selected_module_instance();
      if (instance_id === null) {
        return null;
      }
      const instance = current_config.value.get_module_instance(instance_id,);
      return {
        instance_id,
        instance,
      };
    },);

    const terminal = computed(() => {
      return evbcStore.get_selected_terminal();
    },);

    const connection = computed(() => {
      const connection_id = evbcStore.get_selected_connection();
      if (connection_id === null) {
        return null;
      }
      const cxn = current_config.value.get_connection(connection_id,);
      const requiring_module = current_config.value.get_module_instance(cxn.requiring_instance_id,);
      const implementing_module = current_config.value.get_module_instance(cxn.providing_instance_id,);

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
    },);

    const context = computed((): ConfigStageContext => {
      return evbcStore.config_context;
    },);

    const moduleIDRules = computed(() => {
      return [
        (v: string,) => {
          const instance_id = module_node.value.instance_id;
          const result = current_config.value.update_module_id(instance_id, v,);
          return result || "This module id is not available";
        },
      ];
    },);

    function delete_connection(id: ConnectionID,) {
      current_config.value.delete_connection(id,);
    }

    function delete_module_instance(id: ModuleInstanceID,) {
      current_config.value.delete_module_instance(id,);
    }

    return {
      module_node,
      terminal,
      current_config,
      connection,
      context,
      moduleIDRules,
      delete_connection,
      delete_module_instance,
    };
  },
},);
</script>
