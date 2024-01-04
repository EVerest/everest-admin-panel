<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
    <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon class="icon-right" @click="$emit('onClick')" :variant="$props.variant" :density="$props.density">
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
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>
