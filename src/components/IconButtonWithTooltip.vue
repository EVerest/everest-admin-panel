<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
    <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :icon="$props.icon" class="icon-right" @click="$emit('click')" :variant="$props.variant" :density="$props.density">
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

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  icon: string,
  variant?: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | undefined,
  density?: null | 'default' | 'comfortable' | 'compact',
}>();
const emit = defineEmits<{
  click: []
}>();
</script>
