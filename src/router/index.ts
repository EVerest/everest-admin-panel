// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import MainPanel from "../pages/MainPanel.vue";
import LoginPage from "../pages/LoginPage.vue";
import ConfigPage from "../pages/ConfigPage.vue";
import TestPage from "../pages/TestPage.vue";
import EVBackendClient from "@/modules/evbc/client";
import {inject} from "vue";


const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
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
      {
        path: "tests",
        component: TestPage,
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
  if (to.matched.some((record) => record.meta.requiresConnection)) {
    if (evbc?.initialized) {
      next();
    } else {
      next("login");
    }
  } else {
    next();
  }
});

