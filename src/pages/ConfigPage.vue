<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-container fluid class="fill-height px-0 py-0">
    <splitpanes class="default-theme" style="height: calc(100vh - 64px)" @resize="on_splitpanes_resize">
      <pane size="15">
        <ev-module-list />
      </pane>
      <pane size="70">
        <ev-config-canvas />
      </pane>
      <pane size="15">
        <ev-module-info />
      </pane>
    </splitpanes>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import EvConfigCanvas from "../components/EvConfigCanvas.vue";
import EvModuleList from "../components/EvModuleList.vue";
import EvModuleInfo from "../components/EvModuleInfo.vue";
import { Pane, Splitpanes } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  components: {
    EvConfigCanvas,
    EvModuleList,
    EvModuleInfo,
    Splitpanes,
    Pane,
  },
  methods: {
    on_splitpanes_resize() {
      window.dispatchEvent(new Event("resize"));
    },
  },
});
</script>

<style lang="scss" scoped>
#config-plane {
  background-size: 24px 24px;
  background-image:
    linear-gradient(to right, #f1f1f1 1px, transparent 1px), linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
  background-repeat: repeat;
}

#config-toolpane {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
}
</style>
