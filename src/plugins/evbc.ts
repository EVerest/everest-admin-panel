// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import EVBackendClient from "@/modules/evbc/client";
import { App } from "vue";

export default {
  install(app: App) {
    const evbc: EVBackendClient = new EVBackendClient();
    app.provide("evbc", evbc);
    // Expose evbc to window for E2E testing and debugging
    if (import.meta.env.DEV) {
      (window as any).evbc = evbc;
    }
  },
};
