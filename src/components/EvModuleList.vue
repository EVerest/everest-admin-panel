<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-expansion-panels class="ma-0" v-model="expansionPanelState">
    <v-expansion-panel data-cy="modules-expansion-panel" value="modules" :disabled="!current_config">
      <v-expansion-panel-title> Available modules</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field v-model="search"
                      v-if="show_search"
                      hide-details
                      label="Search"
                      density="compact"
                      variant="outlined"
                      data-cy="modules-search"
                      clearable
        ></v-text-field>
        <v-list class="ma-0">
          <v-tooltip location="right" v-for="module in filtered_module_list" :key="module.type" open-delay="500">
            <template v-slot:activator="{ props }">
              <v-list-item
                  v-bind="props"
                  :title="module.type"
                  @click.stop="add_module_to_config(module.type)"
                  data-cy="module-list-item"
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
    <v-expansion-panel value="configs">
      <v-expansion-panel-title data-cy="configs-expansion-panel">
        {{ config_list.length == 0 ? "No configs available" : "Available configs" }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <create-config @create-config="create_config"></create-config>
        <v-list class="ma-0">
          <v-tooltip location="right" v-for="config in config_list" :key="config" open-delay="500">
            <template v-slot:activator="{ props }">
              <v-list-item :title="config" v-bind="props" @click="load_config_if_empty(config)" data-cy="config-list-item">
                <template v-slot:append>
                  <v-icon>mdi-file-document-arrow-right</v-icon>
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
    <v-expansion-panel value="commands">
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
import {Notyf} from "notyf";
import CreateConfig from "@/components/CreateConfig.vue";
import {EverestConfig} from "@/modules/evbc";

let evbcStore: ReturnType<typeof useEvbcStore>;
let evbc: EVBackendClient;
let notyf: Notyf;

export default defineComponent({
  data: () => {
    return {
      show_dialog: false,
      config_to_load: null,
      search: "",
      expansionPanelState: ["configs"],
    } as {
      show_dialog: boolean;
      config_to_load: string | null;
      search: string;
      expansionPanelState: string[];
    };
  },
  created() {
    evbcStore = useEvbcStore();
    evbc = inject<EVBackendClient>('evbc') as EVBackendClient;
    notyf = inject<Notyf>('notyf');
  },
  components: {CreateConfig, EvDialog},
  computed: {
    current_config(): EVConfigModel | null {
      return evbcStore.current_config;
    },
    show_search(): boolean {
      return !evbcStore.get_selected_terminal();
    },
    filtered_module_list(): Array<{ type: string; description: string }> {
      const selectedTerminal = evbcStore.get_selected_terminal();
      if (selectedTerminal) {
        return Object.entries(evbc.everest_definitions.modules)
            .filter(([, value]) => {
              if (selectedTerminal.type === "requirement") {
                return value.provides && Object.values(value.provides).some((e) => e.interface === selectedTerminal.interface);
              } else {
                return value.requires && Object.values(value.requires).some((e) => e.interface === selectedTerminal.interface);
              }
            })
            .map(([key, value]) => ({
              type: key,
              description: value.description,
            }));
      } else {
        return Object.entries(evbc.everest_definitions.modules)
            .filter(([key, value]) => {
              return !this.search || this.search.trim() === "" ||
                  key.toLowerCase().includes(this.search.toLowerCase()) ||
                  value.description.toLowerCase().includes(this.search.toLowerCase());
            })
            .map(([key, value]) => ({
              type: key,
              description: value.description,
            }));
      }
    },
    config_list(): Array<string> {
      return Object.entries(evbcStore.available_configs).map(([key]) => key);
    },
  },
  methods: {
    add_module_to_config(type: string) {
      let added_module_id: number;
      if (evbcStore.current_config) {
        added_module_id = evbcStore.current_config.add_new_module_instance(type);
      } else {
        throw new Error("No config loaded");
      }
      if (evbcStore.get_selected_terminal()) {
        const selectedTerminal = evbcStore.get_selected_terminal();
        const addedModuleInstance = evbcStore.current_config.get_module_instance(added_module_id);
        const terminals = Object.values(addedModuleInstance.view_config.terminals).flat();
        let terminalToClick;
        if (selectedTerminal.type === "requirement") {
          terminalToClick = terminals.find((t) => t.interface === selectedTerminal.interface && t.type === "provide");
        } else {
          terminalToClick = terminals.find((t) => t.interface === selectedTerminal.interface && t.type === "requirement");
        }
        evbcStore.get_config_context().clicked_terminal(terminalToClick, added_module_id);
      }
    },
    create_config(name: string, content?: EverestConfig) {
      const new_config = evbc.create_config_model(name, content);
      evbcStore.setOpenedConfig(new_config);
      this.expansionPanelState = ["modules"];
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
      this.expansionPanelState = ["modules"];
    },
    restart_modules() {
      evbc._cxn.rpc_issuer.restart_modules().then(() => {
        notyf.success("Issued restart modules command");
      });
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
