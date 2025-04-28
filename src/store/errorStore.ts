/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
 */

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useErrorStore = defineStore("error", () => {
  const error = ref<string | null>(null);
  function setError(errorMessage: string) {
    error.value = errorMessage;
  }

  function clearError() {
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
