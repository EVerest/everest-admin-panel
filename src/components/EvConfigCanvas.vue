<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-sheet id="konva-stage-container" width="100%" height="100vh" elevation="0">
    <div id="konva-stage" />
    <div id="stage-controls">
      <config-preview :config="current_config" v-if="current_config">
        <template v-slot:activator="{ activatorProps }">
          <v-tooltip location="left">
            <template v-slot:activator="{ props }">
              <v-btn id="show-preview-button" color="primary" v-bind="{...activatorProps, ...props}"
                     prepend-icon="mdi-code-tags" icon="mdi-code-tags">
              </v-btn>
            </template>
            <span>Show config preview</span>
          </v-tooltip>
        </template>
      </config-preview>
      <v-tooltip location="left">
        <template v-slot:activator="{ props }">
          <v-btn id="reset-view-button" icon="mdi-undo" color="primary" @click="reset_view" v-bind="props"></v-btn>
        </template>
        <span>Reset View</span>
      </v-tooltip>
      <v-tooltip location="left" v-if="current_config">
        <template v-slot:activator="{ props }">
          <v-btn id="config-save-button" icon="mdi-content-save" color="primary" @click="save_config"
                 v-bind="props"></v-btn>
        </template>
        <span>Save Config</span>
      </v-tooltip>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, inject, onMounted, ref, watch} from 'vue';
import {useEvbcStore} from '@/store/evbc';
import ConfigStage from "@/modules/evconf_konva/config_stage";
import EVConfigModel from "@/modules/evbc/config_model";
import EVBackendClient from "@/modules/evbc/client";
import {Notyf} from "notyf";
import ConfigPreview from "@/components/ConfigPreview.vue";

export default defineComponent({
  components: {ConfigPreview},
  setup()
  {
    const evbcStore = useEvbcStore();
    const evbc = inject<EVBackendClient>('evbc');
    const selected_interface: string | null = null;
    const notyf = inject<Notyf>('notyf');

    ref(false);

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

    const reset_view = () => {
      stage.reset_view();
    };

    const save_config = () => {
      if (!current_config.value) return;
      evbc
          .save_config(current_config.value)
          .then(() => {
            notyf.success(`Successfully saved ${current_config.value._name}`)
          })
          .catch((error: string) => {
            notyf.error(`Failed to save ${current_config.value._name}\nReason: ${error}`)
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
      reset_view,
      save_config,
    };
  },
});
</script>

<style lang="scss">
#konva-stage-container {
  position: relative;
  max-height: calc(100vh - 64px);
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

#stage-controls {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
