<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="activator" :activatorProps="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Config Preview">
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
import {computed, ref} from "vue";

import yaml from 'js-yaml';


const props = defineProps<{
  config: EVConfigModel,
}>();

const tab = ref('yaml');

const jsonCode = computed(() => JSON.stringify(props.config.serialize(), null, 2));
const yamlCode = computed(() => yaml.dump(props.config.serialize()));

</script>

