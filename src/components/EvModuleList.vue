<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-expansion-panels v-model="expansionPanelState" class="ma-0">
    <v-expansion-panel data-cy="modules-expansion-panel" value="modules" :disabled="!current_config">
      <v-expansion-panel-title>{{ $t("evModuleList.modulesPanelTitle") }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          v-if="show_search"
          v-model="search"
          hide-details
          label="Search"
          density="compact"
          variant="outlined"
          data-cy="modules-search"
          clearable
        />
        <v-list class="ma-0">
          <v-tooltip v-for="module in filtered_module_list" :key="module.type" location="right" open-delay="500">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="module.type"
                data-cy="module-list-item"
                @click.stop="add_module_to_config(module.type)"
              >
                <template #append>
                  <v-icon>mdi-plus</v-icon>
                </template>
              </v-list-item>
            </template>
            <span>{{ module.type }}: {{ module.description }}</span>
          </v-tooltip>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel value="configs">
      <v-expansion-panel-title data-cy="configs-expansion-panel">
        {{ config_list.length == 0 ? $t("evModuleList.configsPanelTitleNone") : $t("evModuleList.configsPanelTitle") }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <create-config @create-config="create_config" />
        <v-list class="ma-0">
          <v-tooltip v-for="config in config_list" :key="config" location="right" open-delay="500">
            <template #activator="{ props }">
              <v-list-item
                :title="config"
                v-bind="props"
                data-cy="config-list-item"
                @click="load_config_if_empty(config)"
              >
                <template #append>
                  <v-icon>mdi-file-document-arrow-right</v-icon>
                </template>
              </v-list-item>
            </template>
            <span>{{ config }}</span>
          </v-tooltip>
        </v-list>
      </v-expansion-panel-text>
      <ev-dialog
        :show-dialog="show_dialog"
        :title="$t('evModuleList.configWarningDialogTitle')"
        :text="$t('evModuleList.configWarningDialogText')"
        :accept-text="$t('evModuleList.configWarningDialogAcceptText')"
        :deny-text="$t('evModuleList.configWarningDialogDenyText')"
        @accept="load_config(config_to_load)"
        @deny="close_dialog()"
      />
    </v-expansion-panel>
    <v-expansion-panel value="commands">
      <v-expansion-panel-title>{{ $t("evModuleList.commandsPanelTitle") }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list>
          <v-list-item :title="$t('evModuleList.commandsPanelRestart')" @click="restart_modules()">
            <template #append>
              <v-icon>mdi-run</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { useEvbcStore } from "@/store/evbc";
import EVBackendClient from "@/modules/evbc/client";
import EvDialog from "@/components/EvDialog.vue";
import EVConfigModel from "@/modules/evbc/config_model";
import { Notyf } from "notyf";
import CreateConfig from "@/components/CreateConfig.vue";
import { EverestConfig } from "@/modules/evbc";
import { useErrorStore } from "@/store/errorStore";
import { useI18n } from "vue-i18n";

const evbcStore = useEvbcStore();
const errorStore = useErrorStore();
const evbc = inject<EVBackendClient>("evbc") as EVBackendClient;
const notyf = inject<Notyf>("notyf");
const { t } = useI18n({ useScope: "global" });

const show_dialog = ref(false);
const config_to_load = ref<string | null>(null);
const search = ref("");
const expansionPanelState = ref<string[]>(["configs"]);

const current_config = computed<EVConfigModel | null>(() => evbcStore.current_config);
const show_search = computed<boolean>(() => !evbcStore.get_selected_terminal());

const filtered_module_list = computed(() => {
  const selectedTerminal = evbcStore.get_selected_terminal();
  if (selectedTerminal) {
    return Object.entries(evbc.everest_definitions.modules)
      .filter(([, value]) => {
        if (selectedTerminal.type === "requirement") {
          return (
            value.provides && Object.values(value.provides).some((e) => e.interface === selectedTerminal.interface)
          );
        } else {
          return (
            value.requires && Object.values(value.requires).some((e) => e.interface === selectedTerminal.interface)
          );
        }
      })
      .map(([key, value]) => ({
        type: key,
        description: value.description,
      }));
  } else {
    return Object.entries(evbc.everest_definitions.modules)
      .filter(([key, value]) => {
        return (
          !search.value ||
          search.value.trim() === "" ||
          key.toLowerCase().includes(search.value.toLowerCase()) ||
          value.description.toLowerCase().includes(search.value.toLowerCase())
        );
      })
      .map(([key, value]) => ({
        type: key,
        description: value.description,
      }));
  }
});

const config_list = computed(() => {
  return Object.entries(evbcStore.available_configs).map(([key]) => key);
});

function add_module_to_config(type: string) {
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
}

function create_config(name: string, content?: EverestConfig) {
  try {
    const new_config = evbc.create_config_model(name, content);
    evbcStore.setOpenedConfig(new_config);
    expansionPanelState.value = ["modules"];
  } catch (err) {
    errorStore.setError(err.toString());
  }
}

function load_config_if_empty(name: string) {
  if (!current_config.value) {
    load_config(name);
    return;
  }
  config_to_load.value = name;
  show_dialog.value = true;
}

function load_config(name: string | null) {
  if (!name) {
    return;
  }
  show_dialog.value = false;
  try {
    const new_config = evbc.load_config(name);
    evbcStore.setOpenedConfig(new_config);
    expansionPanelState.value = ["modules"];
  } catch (err) {
    errorStore.setError(err.toString());
  }
}

function restart_modules() {
  evbc._cxn.rpc_issuer.restart_modules().then(() => {
    notyf.success(t("evModuleList.restartModules"));
  });
}

function close_dialog() {
  show_dialog.value = false;
}
</script>

<style>
.v-expansion-panel-text__wrapper {
  padding: 0.5rem !important;
}
</style>
