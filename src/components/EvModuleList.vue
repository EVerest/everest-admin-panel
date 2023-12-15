<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-expansion-panels class="ma-0">
    <v-expansion-panel>
      <v-expansion-panel-header> Available modules </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-expansion-panels class="ma-0">
          <v-expansion-panel v-for="module in module_list" :key="module.type">
            <v-expansion-panel-header disable-icon-rotate>
              {{ module.type }}
              <template v-slot:actions>
                <v-btn icon @click.stop="add_module_to_config(module.type)">
                  <v-icon>mdi-plus-box-outline</v-icon>
                </v-btn>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ module.description }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel :disabled="config_list.length == 0">
      <v-expansion-panel-header>
        {{ config_list.length == 0 ? "No configs available" : "Available configs" }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-sheet class="d-flex align-center my-1 pa-2" elevation="1" v-for="config in config_list" :key="config">
          {{ config }}
          <v-spacer />
          <v-btn icon @click="check_if_config_can_be_loaded(config)">
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </v-sheet>
      </v-expansion-panel-content>
      <v-dialog
          v-model="dialog"
          width="auto"
      >
        <v-card>
          <v-card-title class="d-flex flex-row align-baseline">
            <v-icon
              size="large"
              color="error"
            >
              mdi-alert-circle
            </v-icon>
            &nbsp;
            Warning
          </v-card-title>
          <v-card-text>
            <p>Do you want to discard the current config and load the new one?</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" @click="load_config(config_to_load)">Load config</v-btn>
            <v-btn @click="dialog = false">Don't load config</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header> Issue commands </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-sheet class="d-flex align-center my-1 pa-2" elevation="1">
          Restart modules
          <v-spacer />
          <v-btn icon @click="execute('restart_modules')">
            <v-icon>mdi-run</v-icon>
          </v-btn>
        </v-sheet>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import Vue from "vue";
import EVConfigModel from "@/modules/evbc/config_model";

type Data = {
  dialog: boolean;
  config_to_load: string | null
}
export default Vue.extend({
  computed: {
    current_config(): EVConfigModel {
      return this.$store.getters["evbc/current_config"];
    },
    module_list(): Array<{ type: string; description: string }> {
      return Object.entries(this.$evbc.everest_definitions.modules).map(([key, value]) => ({
        type: key,
        description: value.description,
      }));
    },
    config_list(): Array<string> {
      const configs: Record<string, unknown> = this.$evbc._configs;
      return Object.entries(configs).map(([key]) => key);
    },
  },
  data: (): Data => ({
    dialog: false,
    config_to_load: null,
  }),
  methods: {
    add_module_to_config(type: string) {
      // FIXME (aw): does this logic belongs to here?
      if (this.current_config) {
        this.current_config.add_new_module_instance(type);
      } else {
        const new_config = this.$evbc.create_empty_config("test_config");
        new_config.add_new_module_instance(type);
        this.$store.dispatch("evbc/set_opened_config", new_config);
      }
    },
    check_if_config_can_be_loaded(name: string) {
      if (!this.current_config) {
        this.load_config(name);
        return;
      }
      this.config_to_load = name;
      this.dialog = true;
    },
    load_config(name: string) {
      this.dialog = false;
      const new_config = this.$evbc.load_config(name);
      this.$store.dispatch("evbc/set_opened_config", new_config);
    },
    execute(command: string) {
      this.$evbc.execute_remote_command(command);
    },
  },
});
</script>
