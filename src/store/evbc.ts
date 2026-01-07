// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import { defineStore } from "pinia";
import { reactive, Ref, ref } from "vue";
import EVConfigModel from "@/modules/evbc/config_model";
import ConfigStageContext, { SelectionType } from "@/modules/evconf_konva/stage_context";
import { ConnectionID, EverestConfigList, ModuleInstanceID, Terminal } from "@/modules/evbc";

export const useEvbcStore = defineStore("evbc", () => {
  const selection = ref<SelectionType>({ type: "NONE" });
  const current_config = ref<EVConfigModel | null>(null);
  const config_context = reactive(new ConfigStageContext());
  const available_configs: Ref<EverestConfigList> = ref({});

  config_context.add_observer((ev) => {
    if (ev.type === "SELECT") {
      selection.value = ev.selection;
    }
  });

  function setOpenedConfig(model: EVConfigModel) {
    current_config.value = model;
  }

  // Getters
  const get_is_config_opened = (): boolean => !!current_config.value;
  const get_config_context = (): ConfigStageContext => config_context;

  const get_selected_module_instance = (): ModuleInstanceID | null => {
    if (!get_is_config_opened()) return null;

    const sel = selection.value;
    if (sel.type !== "MODULE_INSTANCE") return null;

    const ids = sel.ids;
    if (!ids || ids.length === 0) return null;

    return ids[ids.length - 1];
  };

  const get_selected_module_instances = (): ModuleInstanceID[] => {
    if (!get_is_config_opened()) return [];
    if (selection.value.type === "MODULE_INSTANCE") {
      return selection.value.ids;
    }
    return [];
  };

  const get_selected_terminal = (): Terminal | null => {
    if (!get_is_config_opened()) return null;
    if (selection.value.type === "TERMINAL") {
      return selection.value.terminal;
    }
    return null;
  };

  const get_selected_connection = (): ConnectionID | null => {
    if (!get_is_config_opened()) return null;
    if (selection.value.type === "CONNECTION") {
      return selection.value.id;
    }
    return null;
  };

  return {
    available_configs,
    selection,
    current_config,
    config_context,
    setOpenedConfig,
    get_config_context,
    get_selected_module_instance,
    get_selected_module_instances,
    get_selected_terminal,
    get_selected_connection,
  };
});
