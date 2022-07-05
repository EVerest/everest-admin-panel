<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-card v-if="module_node">
    <v-card-title> Module instance information </v-card-title>
    <v-card-text>
      <p class="font-weight-bold">Module type: {{ module_node.instance.type }}</p>
      <v-form>
        <!-- FIXME (aw): howto do the binding here? -->
        <v-text-field :value="module_node.instance.id" label="Module ID" :rules="moduleIDRules"></v-text-field>
      </v-form>
      <v-form>
        <template v-if="module_node.instance.module_config">
          <v-divider />
          <p class="font-weight-bold">Module configuration</p>
          <v-jsf
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
              <v-expansion-panel-header>
                {{ id }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-jsf v-for="(item, index) in impl_config" :key="index" v-model="item.model" :schema="item.schema" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="context.unselect()"> Discard selection </v-btn>
      <v-btn color="primary" text @click="delete_module_instance(module_node.instance_id)"> Delete instance </v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else-if="connection">
    <v-card-title> Connection </v-card-title>
    <v-card-text>
      The requirement <code>{{ connection.to.name }}</code> of <code>{{ connection.to.id }}</code> is fulfilled by
      implementation <code>{{ connection.from.name }}</code> of <code>{{ connection.from.id }}</code>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="context.unselect()"> Discard selection </v-btn>
      <v-btn color="primary" text @click="delete_connection(connection.id)"> Delete connection </v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else-if="terminal">
    <v-card-title>
      {{ terminal.type === "provide" ? "Implementation" : "Requirement" }}: <code>{{ terminal.id }}</code>
    </v-card-title>
    <v-card-text>
      Interface type: <code>{{ terminal.interface }}</code>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="context.unselect()"> Discard selection </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import { ModuleInstanceModel, Terminal, ConnectionID, ModuleInstanceID } from "@/modules/evbc";
import EVConfigModel from "@/modules/evbc/config_model";
import ConfigStageContext from "@/modules/evconf_konva/stage_context";

export default Vue.extend({
  // data() {
  //   return {
  //     model: {},
  //   };
  // },
  computed: {
    // FIXME (aw): this is not how it works!
    module_node(): { instance_id: number; instance: ModuleInstanceModel } {
      const instance_id = this.$store.getters["evbc/selected_module_instance"];
      if (instance_id === null) {
        return null;
      }
      const instance = this.config_model.get_module_instance(instance_id);
      return {
        instance_id,
        instance,
      };
    },
    terminal(): Terminal {
      return this.$store.getters["evbc/selected_terminal"];
    },
    config_model: function (): EVConfigModel {
      return this.$store.getters["evbc/current_config"];
    },
    connection: function (): {
      from: { type: string; id: string; name: string };
      to: { type: string; id: string; name: string };
      id: ConnectionID;
    } {
      const connection_id = this.$store.getters["evbc/selected_connection"];
      if (connection_id === null) {
        return null;
      }
      const cxn = this.config_model.get_connection(connection_id);
      const requiring_module = this.config_model.get_module_instance(cxn.requiring_instance_id);
      const implementing_module = this.config_model.get_module_instance(cxn.providing_instance_id);

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
    },
    context: function (): ConfigStageContext {
      return this.$store.getters["evbc/config_context"];
    },
    moduleIDRules: function () {
      return [
        (v: string) => {
          const instance_id = this.module_node.instance_id;
          const result = this.config_model.update_module_id(instance_id, v);
          return result || "This module id is not available";
        },
      ];
    },
  },
  methods: {
    delete_connection(id: ConnectionID) {
      this.config_model.delete_connection(id);
    },
    delete_module_instance(id: ModuleInstanceID) {
      this.config_model.delete_module_instance(id);
    },
  },
  components: {
    VJsf,
  },
});
</script>
