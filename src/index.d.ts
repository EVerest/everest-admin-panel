// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import Vue from 'vue'
import EVBackendClient from "./modules/evbc/client";

declare module "vue/types/vue" {
  interface Vue {
    $evbc: EVBackendClient;
  }
}
