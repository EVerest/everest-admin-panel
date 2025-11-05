// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import MainPanel from "../pages/MainPanel.vue";
import ConnectPage from "../pages/ConnectPage.vue";
import ConfigPage from "../pages/ConfigPage.vue";
import EVBackendClient from "@/modules/evbc/client";
import { inject } from "vue";
import { verifyLocale, establishLocale } from "@/plugins/i18n";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "main", params: { locale: "en" } },
  },
  {
    path: "/:locale/connect",
    name: "connect",
    component: ConnectPage,
  },
  {
    path: "/:locale",
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
  const paramsLocale = to.params.locale as string | undefined;
  const locale = verifyLocale(paramsLocale);

  if (paramsLocale !== locale) {
    // Redirect to the verified locale if the provided one is not supported
    next(`/${locale}${to.fullPath.substring((paramsLocale ? paramsLocale.length : 0) + 1)}`);
    return; // Prevent further execution
  }

  // Redirect to ConfigPage if the user is logged in and navigating to the root path
  if (to.path === `/${locale}`) {
    if (userIsConnected) {
      next(`/${locale}/config`);
    } else {
      next(`/${locale}/connect`);
    }
  } else if (to.matched.some((record) => record.meta.requiresConnection)) {
    // Require connection for specific routes
    if (userIsConnected) {
      // XXX (pa): locale?
      next();
    } else {
      next(`/${locale}/connect`); // Redirect to connect if not connected
    }
  } else {
    // Proceed with the navigation for all other cases
    next();
  }
});

router.beforeResolve(async to => {
  // Use beforeResolve() to lazy load locale messages, because using async
  // in combination with inject() in beforeEach() results in a warning.
  const paramsLocale = to.params.locale as string | undefined;
  await establishLocale(paramsLocale);
  return true;
});
