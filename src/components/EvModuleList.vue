<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-expansion-panels class="ma-0">
    <v-expansion-panel>
      <v-expansion-panel-title> Available modules</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list class="ma-0">
          <v-tooltip location="right" v-for="module in module_list" :key="module.type" open-delay="500">
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
            <span>{{ `${module.type}: ${module.description}` }}</span>
          </v-tooltip>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :disabled="config_list.length == 0">
      <v-expansion-panel-title>
        {{ config_list.length == 0 ? "No configs available" : "Available configs" }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list class="ma-0">
          <v-tooltip location="right" v-for="config in config_list" :key="config" open-delay="500">
            <template v-slot:activator="{ props }">
              <v-list-item :title="config" v-bind="props" @click="load_config_if_empty(config)">
                <template v-slot:append>
                  <v-icon>mdi-upload</v-icon>
                </template>
              </v-list-item>
            </template>
            <span>{{ config }}</span>
          </v-tooltip>
        </v-list>
      </v-expansion-panel-text>
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
      <v-expansion-panel-title> Issue commands</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list>
          <v-list-item @click="restart_modules()" :title="'Restart modules'">
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
import EvDialog from "@/components/EvDialog.vue";
import EVConfigModel from "@/modules/evbc/config_model";

let evbcStore: ReturnType<typeof useEvbcStore>;
let evbc: EVBackendClient;

export default defineComponent({
  data: () => {
    return {
      show_dialog: false,
      config_to_load: null,
    } as {
      show_dialog: boolean;
      config_to_load: string | null;
    };
  },
  created() {
    evbcStore = useEvbcStore();
    evbc = inject<EVBackendClient>('evbc') as EVBackendClient;
  },
  components: {EvDialog},
  computed: {
    current_config(): EVConfigModel | null {
      return evbcStore.get_current_config();
    },
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
  methods: {
    add_module_to_config(type: string) {
      // FIXME (aw): does this logic belongs to here?
      if (evbcStore.get_current_config()) {
        evbcStore.get_current_config()!.add_new_module_instance(type);
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
    load_config(name: string | null) {
      if (!name) return;
      this.show_dialog = false;
      const new_config = evbc.load_config(name);
      evbcStore.setOpenedConfig(new_config)
    },
    restart_modules() {
      evbc._cxn.rpc_issuer.restart_modules();
    },
    close_dialog() {
      this.show_dialog = false;
    },
  },
});
</script>

<style>
  .v-expansion-panel-text__wrapper {
    padding: 0.5rem !important;
  }
</style>
