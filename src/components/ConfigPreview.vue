<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->
<template>
  <v-dialog v-model="dialogVisible">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="activator" :activatorProps="activatorProps"></slot>
    </template>
    <template v-slot:default="{ }">
      <v-card>
        <v-card-title>
          <div class="title-content">
            <div class="controls">
              <v-btn icon="mdi-download" @click="downloadConfig()"></v-btn>
              <v-btn icon="mdi-content-copy" @click="copyConfig()"></v-btn>
            </div>
            <v-btn class="close-button" icon="mdi-close" variant="plain" density="compact" @click="closeDialog()"></v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-tabs v-model="tab">
            <v-tab value="yaml">
              YAML
            </v-tab>
            <v-tab value="json">
              JSON
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="yaml">
              <highlightjs language="yaml" :code="yamlCode"></highlightjs>
            </v-window-item>
            <v-window-item value="json">
              <highlightjs language="json" :code="jsonCode"></highlightjs>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

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

<script lang="ts">
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  components: {
    highlightjs: hljsVuePlugin.component,
  }
}
</script>
<script setup lang="ts">
import EVConfigModel from "@/modules/evbc/config_model";
import {computed, inject, ref} from "vue";
import {Notyf} from "notyf";
import yaml from 'js-yaml';

const notyf = inject<Notyf>('notyf')
const dialogVisible = ref<boolean>(false);

const closeDialog = () => {
  dialogVisible.value = false;
}

const props = defineProps<{
  config: EVConfigModel,
}>();

const tab = ref('yaml');

const jsonCode = computed(() => JSON.stringify(props.config.serialize(), null, 2));
const yamlCode = computed(() => yaml.dump(props.config.serialize()));

const downloadConfig = () => {
  let filename = '';
  let contentType = '';
  let content = '';

  if (tab.value === 'json') {
    filename = `${props.config._name}.json`;
    contentType = 'application/json';
    content = jsonCode.value;
  } else if (tab.value === 'yaml') {
    filename = `${props.config._name}.yaml`;
    contentType = 'text/yaml';
    content = yamlCode.value;
  }

  const blob = new Blob([content], {type: contentType});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a); // This line is necessary for the Firefox browser
  a.click();
  document.body.removeChild(a); // Clean up
  URL.revokeObjectURL(url); // Free up memory
};

const copyConfig = () => {
  let content = '';
  if (tab.value === 'json') {
    content = jsonCode.value;
  } else if (tab.value === 'yaml') {
    content = yamlCode.value;
  }
  navigator.clipboard.writeText(content);
  notyf.success("Copied to clipboard!");
};

</script>

