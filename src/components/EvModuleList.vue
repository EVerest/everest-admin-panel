<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-expansion-panels class="ma-0">
    <v-expansion-panel>
      <v-expansion-panel-title> Available modules </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list class="ma-0">
          <v-tooltip location="right" v-for="module in module_list" :key="module.type">
            <template v-slot:activator="{ props }">
            <v-list-item
                         v-bind="props"
                         :title="module.type"
                         @click.stop="add_module_to_config(module.type)"
            >
              <template v-slot:append>
                <v-icon>mdi-plus</v-icon>
              </template>
            </v-list-item>
            </template>
            <span>{{`${module.type}: ${module.description}`}}</span>
          </v-tooltip>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :disabled="config_list.length == 0">
      <v-expansion-panel-header>
        {{ config_list.length == 0 ? "No configs available" : "Available configs" }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-sheet class="d-flex align-center my-1 pa-2" elevation="1" v-for="config in config_list" :key="config">
          {{ config }}
          <v-spacer />
          <v-btn icon @click="load_config_if_empty(config)">
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </v-sheet>
      </v-expansion-panel-content>
      <ev-dialog
          :show_dialog="show_dialog"
          title="Warning"
          text="Do you want to discard the current config and load the new one?"
          accept_text="Load config"
          deny_text="Don't load config"
          @accept="load_config(config_to_load)"
          @deny="close_dialog()"
      />
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title> Issue commands </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list>
          <v-list-item @click="execute('restart_modules')" :title="'Restart modules'">
            <template v-slot:append>
              <v-icon>mdi-run</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import {defineComponent, inject} from "vue";
import {useEvbcStore} from "@/store/evbc";
import EVBackendClient from "@/modules/evbc/client";

let evbcStore: ReturnType<typeof useEvbcStore>;
let evbc: EVBackendClient;

export default defineComponent({
  created() {
    evbcStore = useEvbcStore();
    evbc = inject<EVBackendClient>('evbc')
  },
  computed: {
    module_list(): Array<{ type: string; description: string }> {
      return Object.entries(evbc.everest_definitions.modules).map(([key, value]) => ({
        type: key,
        description: value.description,
      }));
    },
    config_list(): Array<string> {
      const configs: Record<string, unknown> = evbc._configs;
      return Object.entries(configs).map(([key]) => key);
    },
  },
  data: (): Data => ({
    show_dialog: false,
    config_to_load: null,
  }),
  methods: {
    add_module_to_config(type: string) {
      // FIXME (aw): does this logic belongs to here?
      if (evbcStore.get_current_config()) {
        evbcStore.get_current_config().add_new_module_instance(type);
      } else {
        const new_config = evbc.create_empty_config("test_config");
        new_config.add_new_module_instance(type);
        evbcStore.setOpenedConfig(new_config);
      }
    },
    load_config_if_empty(name: string) {
      if (!this.current_config) {
        this.load_config(name);
        return;
      }
      this.config_to_load = name;
      this.show_dialog = true;
    },
    load_config(name: string) {
      this.show_dialog = false;
      const new_config = evbc.load_config(name);
      evbcStore.setOpenedConfig(new_config);
    },
    execute(command: string) {
      evbc.execute_remote_command(command);
    },
    close_dialog() {
      this.show_dialog = false;
    },
  },
});
</script>
