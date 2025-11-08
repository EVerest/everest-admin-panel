// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { md3 } from "vuetify/blueprints";

// Composables
import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";

import { i18n } from "./i18n";
import { useI18n } from "vue-i18n";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export const everestTheme = {
  dark: false,
  colors: {
    background: "#EFEDE8",
    surface: "#EFEDE8",
    primary: "#254C84",
    secondary: "#35CE7C",
    error: "#b9352b",
    info: "#254C84",
    success: "#35CE7C",
    warning: "#c09112",
    "on-background": "#212121",
    "on-surface": "#212121",
  },
};
export const currentTheme = everestTheme;
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "everestTheme",
    themes: {
      everestTheme,
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n: i18n as any, useI18n }),
  },
});
