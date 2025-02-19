// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/roboto/index.css";
import "@fontsource/open-sans-condensed/latin-700.css";
import "@/main.scss";
import { Notyf, } from "notyf";
import "notyf/notyf.min.css";
import Vue, { createApp, } from "vue";
import App from "@/App.vue";
import { registerPlugins, } from "@/plugins";
import { currentTheme, } from "@/plugins/vuetify";

const app: Vue.App<Element> = createApp(App,);
registerPlugins(app,);

app.provide("notyf", new Notyf({
  duration: 3000, // default duration for notifications
  ripple: true, // adds a material design ripple effect to the notifications
  position: {
    x: "right",
    y: "top",
  },
  types: [
    {
      type: "info",
      background: currentTheme.colors.info,
    },
    {
      type: "success",
      background: currentTheme.colors.success,
    },
    {
      type: "warning",
      background: currentTheme.colors.warning,
    },
    {
      type: "error",
      background: currentTheme.colors.error,
    },
  ],
},),);

app.mount("#app",);
