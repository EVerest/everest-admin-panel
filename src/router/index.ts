// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import MainPanel from "../pages/MainPanel.vue";
import AccountPage from "../pages/AccountPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import ConfigPage from "../pages/ConfigPage.vue";
import TestPage from "../pages/TestPage.vue";

import { evbc } from "../plugins/evbc";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
        path: "account",
        component: AccountPage,
      },
      {
        path: "tests",
        component: TestPage,
      },
    ],
    meta: { requiresConnection: true },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresConnection)) {
    if (evbc.initialized) {
      next();
    } else {
      next("login");
    }
  } else {
    next();
  }
});

export default router;
