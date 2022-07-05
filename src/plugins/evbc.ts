// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import { PluginObject } from "vue";
import EVBackendClient from "@/modules/evbc/client";

export const evbc = new EVBackendClient();

export default {
  install: function (Vue) {
    Vue.prototype.$evbc = evbc;
  },
} as PluginObject<void>;
