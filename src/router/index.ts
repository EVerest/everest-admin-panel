// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import MainPanel from "../pages/MainPanel.vue";
import ConnectPage from "../pages/ConnectPage.vue";
import ConfigPage from "../pages/ConfigPage.vue";
import EVBackendClient from "@/modules/evbc/client";
import {inject} from "vue";


const routes: RouteRecordRaw[] = [
  {
    path: "/connect",
    name: "connect",
    component: ConnectPage,
  },
  {
    path: "/",
    name: "main",
    component: MainPanel,
    children: [
      {
        path: "config",
        component: ConfigPage,
      },
    ],
    meta: { requiresConnection: true },
  },
];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const evbc = inject<EVBackendClient>("evbc");
  const userIsConnected = evbc?.initialized;

  // Redirect to ConfigPage if the user is logged in and navigating to the root path
  if (to.path === "/" && userIsConnected) {
    next("/config");
  } else if (to.matched.some(record => record.meta.requiresConnection)) {
    // Require connection for specific routes
    if (userIsConnected) {
      next();
    } else {
      next("/connect"); // Redirect to connect if not connected
    }
  } else {
    // Proceed with the navigation for all other cases
    next();
  }
});
