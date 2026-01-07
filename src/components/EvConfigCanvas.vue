<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-sheet id="konva-stage-container" width="100%" height="100vh" elevation="0">
    <div id="konva-stage" />
    <div id="stage-controls">
      <config-preview v-if="current_config" :config="current_config">
        <template #activator="{ activatorProps }">
          <v-tooltip location="left">
            <template #activator="{ props }">
              <v-btn
                id="show-preview-button"
                color="primary"
                v-bind="{ ...activatorProps, ...props }"
                prepend-icon="mdi-code-tags"
                icon="mdi-code-tags"
              />
            </template>
            <span>{{ t("evConfigCanvas.showConfigPreviewTooltip") }}</span>
          </v-tooltip>
        </template>
      </config-preview>
      <v-tooltip location="left">
        <template #activator="{ props }">
          <v-btn id="reset-view-button" icon="mdi-undo" color="primary" v-bind="props" @click="reset_view" />
        </template>
        <span>{{ t("evConfigCanvas.resetViewTooltip") }}</span>
      </v-tooltip>
      <v-tooltip location="left">
        <template #activator="{ props }">
          <v-btn id="zoom-in-button" icon="mdi-magnify-plus-outline" color="primary" v-bind="props" @click="zoom_in" />
        </template>
        <span>{{ t("evConfigCanvas.zoomInTooltip") }}</span>
      </v-tooltip>
      <v-tooltip location="left">
        <template #activator="{ props }">
          <v-btn
            id="zoom-out-button"
            icon="mdi-magnify-minus-outline"
            color="primary"
            v-bind="props"
            @click="zoom_out"
          />
        </template>
        <span>{{ t("evConfigCanvas.zoomOutTooltip") }}</span>
      </v-tooltip>
      <v-tooltip v-if="current_config" location="left">
        <template #activator="{ props }">
          <v-btn id="config-save-button" icon="mdi-content-save" color="primary" v-bind="props" @click="save_config" />
        </template>
        <span>{{ t("evConfigCanvas.saveConfigTooltip") }}</span>
      </v-tooltip>
    </div>
    <ev-dialog
      :show-dialog="showDeleteDialog"
      :title="t('evConfigCanvas.deleteDialog.title')"
      :text="t('evConfigCanvas.deleteDialog.text', { count: deleteCount })"
      :accept-text="t('evConfigCanvas.deleteDialog.accept')"
      :deny-text="t('evConfigCanvas.deleteDialog.deny')"
      @accept="confirmDelete"
      @deny="showDeleteDialog = false"
    />
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useEvbcStore } from "@/store/evbc";
import ConfigStage from "@/modules/evconf_konva/config_stage";
import EVConfigModel from "@/modules/evbc/config_model";
import EVBackendClient from "@/modules/evbc/client";
import { Notyf } from "notyf";
import ConfigPreview from "@/components/ConfigPreview.vue";
import EvDialog from "@/components/EvDialog.vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

export default defineComponent({
  components: { ConfigPreview, EvDialog },
  setup() {
    const evbcStore = useEvbcStore();
    const evbc = inject<EVBackendClient>("evbc");
    const selected_interface: string | null = null;
    const notyf = inject<Notyf>("notyf");
    const { current_config: current_config } = storeToRefs(evbcStore);
    const { t } = useI18n({ useScope: "global" });
    const theme = useTheme();

    ref(false);
    const showDeleteDialog = ref(false);
    const deleteCount = ref(0);

    let stage: ConfigStage;
    onMounted(() => {
      stage = new ConfigStage(
        {
          container: "konva-stage",
          width: 1024, // will automatically be resized responsively
          height: 800,
          draggable: false, // we only want to have the static layer draggable
        },
        evbcStore.config_context,
        notyf,
      );
      // Expose stage for Cypress tests
      if (import.meta.env.DEV || (window as any).Cypress) {
        (window as any).configStage = stage;
      }

      stage.updateTheme(theme.global.current.value.colors as any);

      watch(
        () => theme.global.current.value.colors,
        (newColors) => {
          stage.updateTheme(newColors as any);
        },
        { deep: true },
      );

      stage.onDeleteRequest = (count: number) => {
        deleteCount.value = count;
        showDeleteDialog.value = true;
      };
      if (current_config.value) {
        stage.set_model(current_config.value);
      }
    });

    onBeforeUnmount(() => {
      stage.destroy();
    });

    const reset_view = () => {
      stage.zoomToFit();
    };

    const zoom_in = () => {
      stage.zoomIn();
    };

    const zoom_out = () => {
      stage.zoomOut();
    };

    const confirmDelete = () => {
      stage.deleteSelected();
      showDeleteDialog.value = false;
    };

    const save_config = () => {
      if (!current_config.value) {
        return;
      }
      evbc
        .save_config(current_config.value)
        .then(() => {
          notyf.success(t("evConfigCanvas.successfullySavedNotification", { config: current_config.value._name }));
        })
        .catch((error: string) => {
          notyf.error(
            t("evConfigCanvas.failedToSaveNotification", { config: current_config.value._name, error: error }),
          );
        });
    };

    watch(current_config, (new_config: EVConfigModel, old_config: EVConfigModel) => {
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
      zoom_in,
      zoom_out,
      save_config,
      t,
      showDeleteDialog,
      deleteCount,
      confirmDelete,
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
