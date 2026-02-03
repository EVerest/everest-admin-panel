<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest -->

<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "App",
  setup() {
    const theme = useTheme();

    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      theme.global.name.value = e.matches ? "everestThemeDark" : "everestTheme";
    };

    onMounted(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      updateTheme(mediaQuery);
      mediaQuery.addEventListener("change", updateTheme);
    });

    onUnmounted(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.removeEventListener("change", updateTheme);
    });
  },
});
</script>
