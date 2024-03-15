<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-sheet id="konva-stage-container" width="100%" height="800" elevation="4">
    <div id="konva-stage" />
    <!-- <v-sheet id="config-stage-info" class="pa-2" height="100" width="200" elevation="2" v-if="selected_interface">
      {{ selected_interface }} <v-btn color="primary" x-small @click="discard_selected_terminal">Discard</v-btn>
    </v-sheet> -->
    <v-btn id="config-save-button" icon="mdi-content-save" color="primary" @click="save_config" v-if="current_config"></v-btn>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, onMounted, computed, watch, ComputedRef, inject} from 'vue';
import { useEvbcStore } from '@/store/evbc';
import ConfigStage from "@/modules/evconf_konva/config_stage";
import EVConfigModel from "@/modules/evbc/config_model";
import EVBackendClient from "@/modules/evbc/client";
import {useMainStore} from "@/store/main";

export default defineComponent({
  setup() {
    const mainStore = useMainStore();
    const evbcStore = useEvbcStore();
    const evbc = inject<EVBackendClient>('evbc');
    const selected_interface: string | null = null;

    let stage: ConfigStage;
    onMounted(() => {
      stage = new ConfigStage(
          {
            container: "konva-stage",
            width: 1024, // will automatically be resized responsively
            height: 800,
            draggable: false, // we only want to have the static layer draggable
          },
          evbcStore.config_context
      );
      if (current_config.value) {
        stage.set_model(current_config.value);
      }
    });


    const current_config: ComputedRef<EVConfigModel> = computed(evbcStore.get_current_config);

    const save_config = () => {
      if (!current_config.value) return;
      evbc
          .save_config(current_config.value)
          .then(() => {
            mainStore.setSnackbarMessage({
              text: `Successfully saved ${current_config.value._name}`,
              color: "blue",
              timeout: 2000,
            });
          })
          .catch((error: string) => {
            mainStore.setSnackbarMessage({
              text: `Failed to save ${current_config.value._name}\nReason: ${error}`,
              color: "red",
              timeout: 0,
            });
          });
    };

    watch(current_config, (new_config, old_config) => {
      if (old_config) {
        // FIXME (aw): should we ask for something here?
      }

      stage.set_model(new_config);
    });

    return {
      selected_interface,
      stage,
      current_config,
      save_config,
    };
  },
});
</script>

<style lang="scss">
#konva-stage-container {
  position: relative;
  max-height: calc(100vh - 96px);
}
#konva-stage {
  height: 100%;
  width: 100%;
}
#config-stage-info {
  position: absolute;
  top: 6px;
  right: 6px;
}
#config-save-button {
  position: absolute;
  bottom: 12px;
  right: 12px;
}
</style>
