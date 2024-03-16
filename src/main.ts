// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/roboto/index.css";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import Vue from "vue";
import {createApp} from "vue";
import App from "@/App.vue";
import {registerPlugins} from "@/plugins";

const app: Vue.App<Element> = createApp(App);
registerPlugins(app);

app.provide('notyf', new Notyf({
    duration: 3000, // default duration for notifications
    ripple: true, // adds a material design ripple effect to the notifications
    position: {
        x: 'right',
        y: 'top',
    },
}));

app.mount('#app');
