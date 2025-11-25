// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { App, Plugin } from "vue";
import { router } from "@/router";
import evbcPlugin from "@/plugins/evbc";
import vuetify from "@/plugins/vuetify";
import { i18n } from "@/plugins/i18n";
import pinia from "@/store";
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/github-dark.min.css";
import yaml from "highlight.js/lib/languages/yaml";
import json from "highlight.js/lib/languages/json";

hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("json", json);

export function registerPlugins(app: App) {
  app
    .use(i18n as unknown as Plugin)
    .use(pinia as unknown as Plugin)
    .use(evbcPlugin as unknown as Plugin)
    .use(vuetify as unknown as Plugin)
    .use(router as unknown as Plugin)
    .use(hljsVuePlugin as unknown as Plugin);
}
