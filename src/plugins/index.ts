import {App} from "vue";
import {router} from "@/router";
import evbcPlugin from "@/plugins/evbc";
import vuetify from "@/plugins/vuetify";
import pinia from "@/store";

export function registerPlugins (app: App) {
    app
        .use(pinia)
        .use(evbcPlugin)
        .use(vuetify)
        .use(router);
}
