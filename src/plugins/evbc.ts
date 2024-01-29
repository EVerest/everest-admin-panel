// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import EVBackendClient from "@/modules/evbc/client";
import { App } from "vue";

const evbc = new EVBackendClient();

export default {
  install(app: App) {
    app.provide('evbc', evbc);
  },
};
