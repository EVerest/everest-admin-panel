<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="activator" :activatorProps="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Config Preview">
        <v-card-text>
          <div class="controls">
            <v-btn icon="mdi-download" @click="downloadConfig()"></v-btn>
            <v-btn icon="mdi-content-copy" @click="copyConfig()"></v-btn>
          </div>
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
  .controls {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
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

