<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-sheet id="konva-stage-container" width="100%" height="800" elevation="4">
    <div id="konva-stage" />
    <!-- <v-sheet id="config-stage-info" class="pa-2" height="100" width="200" elevation="2" v-if="selected_interface">
      {{ selected_interface }} <v-btn color="primary" x-small @click="discard_selected_terminal">Discard</v-btn>
    </v-sheet> -->
    <v-btn id="config-save-button" fab color="primary" @click="save_config" v-if="current_config">
      <v-icon dark> mdi-content-save </v-icon>
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

import ConfigStage from "@/modules/evconf_konva/config_stage";
import EVConfigModel from "@/modules/evbc/config_model";

export default Vue.extend({
  data() {
    const reactive = {
      selected_interface: null as string,
    };

    return reactive as typeof reactive & {
      stage: ConfigStage;
    };
  },
  computed: {
    current_config(): EVConfigModel {
      return this.$store.getters["evbc/current_config"];
    },
  },
  methods: {
    save_config() {
      if (!this.current_config) return;
      this.$evbc
        .save_config(this.current_config)
        .then(() => {
          this.$store.commit("snackbar_message", {
            text: `Succuessfully saved ${this.current_config._name}`,
            color: "blue",
            timeout: 2000,
          });
        })
        .catch((error) => {
          this.$store.commit("snackbar_message", {
            text: `Failed to save ${this.current_config._name}\nReason: ${error}`,
            color: "red",
            timeout: 0,
          });
        });
    },
  },
  mounted() {
    this.stage = new ConfigStage(
      {
        container: "konva-stage",
        width: 1024,
        height: 800,
        draggable: true, // FIXME (aw): is this the best solution?
      },
      this.$store.getters["evbc/config_context"]
    );

    if (this.current_config) {
      this.stage.set_model(this.current_config);
    }
  },
  watch: {
    current_config(new_config, old_config) {
      if (old_config) {
        // FIXME (aw): should we ask for something here?
      }

      this.stage.set_model(new_config);
    },
  },
});
</script>

<style lang="scss">
#konva-stage-container {
  position: relative;
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
