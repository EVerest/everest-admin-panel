import {defineStore} from 'pinia';
import {reactive, ref, watch} from 'vue';
import EVConfigModel from "@/modules/evbc/config_model";
import ConfigStageContext, {SelectionType} from "@/modules/evconf_konva/stage_context";
import {ConnectionID, ModuleInstanceID, Terminal} from "@/modules/evbc";

export const useEvbcStore = defineStore('evbc', () => {
  const config_opened = ref(false);
  const selection = ref({ type: "NONE" } as SelectionType);
  const config_model = ref<EVConfigModel | null>(null);
  const config_context = reactive(new ConfigStageContext());

  // Watcher inside the store
  watch(() => config_context, (configStageContext) => {
    configStageContext.add_observer((ev) => {
      if (ev.type === "SELECT") {
        selection.value = ev.selection;
      }
    });
  }, { deep: true });

  function setOpenedConfig(model: EVConfigModel) {
    if (config_opened.value) {
      config_opened.value = false;
    }

    config_model.value = model;
    config_opened.value = true;
  }

  function resetOpenedConfig() {
    config_model.value = null;
    config_opened.value = false;
  }

  function setCurrentSelection(sel: SelectionType) {
    selection.value = sel;
  }

  // Getters
  const get_config_context = (): ConfigStageContext => config_context;
  const get_current_config = (): EVConfigModel | null => config_opened.value ? config_model.value : null;
  const get_selected_module_instance = (): ModuleInstanceID | null => config_opened.value && selection.value.type === "MODULE_INSTANCE" ? selection.value.id : null;
  const get_selected_terminal = (): Terminal | null => config_opened.value && selection.value.type === "TERMINAL" ? selection.value.terminal : null;
  const get_selected_connection = (): ConnectionID | null => config_opened.value && selection.value.type === "CONNECTION" ? selection.value.id : null;

  return {
    config_opened,
    selection,
    config_model,
    config_context,
    setOpenedConfig,
    resetOpenedConfig,
    setCurrentSelection,
    get_config_context,
    get_current_config,
    get_selected_module_instance,
    get_selected_terminal,
    get_selected_connection
  };
});
