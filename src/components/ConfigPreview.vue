<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest -->
<template>
  <v-dialog v-model="dialogVisible" scrollable max-width="80vw" height="85vh">
    <template #activator="{ props: activatorProps }">
      <slot name="activator" :activator-props="activatorProps" />
    </template>
    <template #default="{}">
      <v-card class="d-flex flex-column" height="100%">
        <v-card-title class="flex-shrink-0">
          <div class="title-content">
            <div class="controls">
              <v-btn icon="mdi-download" data-cy="download-config-file-button" @click="downloadConfig()" />
              <v-btn icon="mdi-content-copy" @click="copyConfig()" />
            </div>
            <v-btn class="close-button" icon="mdi-close" variant="plain" density="compact" @click="closeDialog()" />
          </div>
        </v-card-title>

        <div class="flex-shrink-0">
          <v-tabs v-model="tab" bg-color="surface">
            <v-tab value="yaml"> YAML </v-tab>
          </v-tabs>
        </div>

        <v-card-text class="flex-grow-1 overflow-y-auto">
          <v-window v-model="tab">
            <v-window-item value="yaml">
              <highlightjs language="yaml" :code="yamlCode" data-cy="config-preview-component" />
            </v-window-item>
          </v-window>
        </v-card-text>
        <div class="flex-shrink-0 mb-4"></div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  components: {
    highlightjs: hljsVuePlugin.component,
  },
};
</script>

<script setup lang="ts">
import EVConfigModel from "@/modules/evbc/config_model";
import { inject, ref, watch } from "vue";
import { Notyf } from "notyf";
import yaml from "js-yaml";

const notyf = inject<Notyf>("notyf");
const dialogVisible = ref<boolean>(false);

const closeDialog = () => {
  dialogVisible.value = false;
};

const props = defineProps<{
  config: EVConfigModel;
}>();

const tab = ref("yaml");

const yamlCode = ref("");

watch(dialogVisible, (visible) => {
  if (visible) {
    yamlCode.value = yaml.dump(props.config.serialize());
  }
});

const downloadConfig = () => {
  const filename = `${props.config._name}.yaml`;
  const contentType = "text/yaml";
  const content = yaml.dump(props.config.serialize());

  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a); // This line is necessary for the Firefox browser
  a.click();
  document.body.removeChild(a); // Clean up
  URL.revokeObjectURL(url); // Free up memory
};

const copyConfig = () => {
  const content = yaml.dump(props.config.serialize());
  navigator.clipboard.writeText(content);
  notyf.success("Copied to clipboard!");
};
</script>
<style scoped lang="scss">
.title-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .controls {
    margin-top: 0.5rem;
  }
}
.controls {
  display: flex;
  gap: 0.5rem;
}
</style>
