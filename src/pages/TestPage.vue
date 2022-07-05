<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-spacer />
      <v-col class="pt-0" cols="7">Local storage: {{ ls }} </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    const reactive = {
      ls: null as string,
    };

    return reactive as typeof reactive & {
      //
    };
  },
  computed: {
    nodes() {
      return null;
    },
  },
  created() {
    // FIXME (aw): can we assume, localStorage always exists?
    const storage = window.localStorage;
    const ls_item = storage.getItem("ls");
    if (!ls_item) {
      this.ls = `No item named 'ls' in our storage :(`;
      storage.setItem("ls", "Saved stuff");
    } else {
      this.ls = ls_item;
    }
  },
  mounted() {
    //
  },
  methods: {
    loadConfig() {
      //
    },
  },
  components: {
    //
  },
});
</script>

<style lang="scss" scoped></style>
