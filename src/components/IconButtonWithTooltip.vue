<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-tooltip location="bottom">
    <template #activator="{ props: slotProps }">
      <v-btn
        v-bind="slotProps"
        :icon="icon"
        class="icon-right"
        :variant="variant"
        :density="density"
        @click="emit('click')"
      />
    </template>
    <span> {{ props.title }} </span>
  </v-tooltip>
</template>

<script lang="ts" setup>
import type { VBtn, } from "vuetify/components";

const props = defineProps<{
  title: string,
  icon: string,
  variant?: VBtn["$props"]["variant"],
  density?: VBtn["$props"]["density"],
}>();
const emit = defineEmits<{
  click: []
}>();
</script>

<style scoped lang="scss">
.icon-right {
  position: absolute;
  right: 0;
  margin-bottom: 2rem;
}
</style>
