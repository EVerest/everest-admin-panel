// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { App, } from "vue";
import { router, } from "@/router";
import evbcPlugin from "@/plugins/evbc";
import vuetify from "@/plugins/vuetify";
import pinia from "@/store";
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/github-dark.min.css";
import yaml from "highlight.js/lib/languages/yaml";
import json from "highlight.js/lib/languages/json";

hljs.registerLanguage("yaml", yaml,);
hljs.registerLanguage("json", json,);


export function registerPlugins (app: App,) {
  app
    .use(pinia,)
    .use(evbcPlugin,)
    .use(vuetify,)
    .use(router,)
    .use(hljsVuePlugin,);
}
