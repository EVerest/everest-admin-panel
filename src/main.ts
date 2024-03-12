// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/roboto/index.css";
import Vue from "vue";
import {createApp} from "vue";
import App from "@/App.vue";
import {registerPlugins} from "@/plugins";

const app: Vue.App<Element> = createApp(App);
registerPlugins(app);

app.mount('#app');
