<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
    <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :icon="icon" class="icon-right" @click="emit('click')" :variant="variant" :density="density">
            </v-btn>
        </template>
        <span> {{ props.title }} </span>
    </v-tooltip>
</template>
  
<style scoped lang="scss">
.icon-right {
  position: absolute;
  right: 0;
  margin-bottom: 2rem;
}
</style>

<script lang="ts" setup>
import type { VBtn } from "vuetify/components";

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
