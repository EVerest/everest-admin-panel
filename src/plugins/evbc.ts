// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import EVBackendClient from "@/modules/evbc/client";
import { App, } from "vue";


export default {
  install(app: App,) {
    const evbc = new EVBackendClient();
    app.provide("evbc", evbc,);
  },
};
