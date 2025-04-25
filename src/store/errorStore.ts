/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
 */

import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useErrorStore = defineStore("error", () => {
  console.log("[Store] Initializing error store...");
  const error = ref<string | null>(null);
  watch(error, (newValue: string | null) => {
    console.log("Error changed:", newValue);
  });
  // Inside useErrorStore
  function setError(errorMessage: string) {
    console.log("[Store] setError called with:", errorMessage); // <-- Add this
    console.log("[Store] error.value BEFORE:", error.value); // <-- Add this
    error.value = errorMessage;
    console.log("[Store] error.value AFTER:", error.value); // <-- Add this
  }

  function clearError() {
    console.trace("[Store] clearError called");
    error.value = null;
  }

  const hasError = computed(() => {
    return error.value !== null;
  });

  function getError() {
    return error.value;
  }

  return {
    error,
    getError,
    setError,
    clearError,
    hasError,
  };
});
