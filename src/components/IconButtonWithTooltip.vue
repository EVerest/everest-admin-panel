<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="icon-right" @click="onClick" >
            <v-icon> {{ $props.icon }} </v-icon>
            </v-btn>
        </template>
        <span> {{ $props.title }} </span>
    </v-tooltip>
</template>
  
<style scoped lang="scss">
.icon-right {
  position: absolute;
  right: 0;
  margin-bottom: 2rem;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    icon: String,
  },
  methods: {
    onClick() {
      this.$emit("on-click");
    },
  },
})
</script>
