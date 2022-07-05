<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-col cols="2" class="overflow-y-auto pa-0" style="max-height: 80vh">
        <ev-module-list />
      </v-col>
      <v-col class="pt-0" cols="7">
        <ev-config-canvas />
      </v-col>
      <v-col cols="3">
        <ev-module-info />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import EvConfigCanvas from "../components/EvConfigCanvas.vue";
import EvModuleList from "../components/EvModuleList.vue";
import EvModuleInfo from "../components/EvModuleInfo.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  data() {
    const reactive = {
      active_config: null as string,
    };

    return reactive as typeof reactive & {
      //
    };
  },
  computed: {
    ...mapGetters("evbc", ["current_config"]),
  },
  components: {
    EvConfigCanvas,
    EvModuleList,
    EvModuleInfo,
  },
});
</script>

<style lang="scss" scoped>
#config-plane {
  background-size: 24px 24px;
  background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px),
    linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
  background-repeat: repeat;
}

#config-toolpane {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
}
</style>
