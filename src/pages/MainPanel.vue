<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" data-cy="hamburger-menu"></v-app-bar-nav-icon>
      <v-spacer/>
      <v-img class="mx-4 rotateable" max-height="40" max-width="40" src="/img/icons/everest_lf_logo_white.svg"/>
      <v-toolbar-title class="app-bar-title">EVerest Admin Panel</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" position="fixed" temporary>
      <v-list nav density="compact">
        <v-list-item to="config" append-icon="mdi-cog" link>
          <v-list-item-title>Config</v-list-item-title>
        </v-list-item>
        <v-tooltip location="end">
          <template v-slot:activator="{ props }">
            <v-list-item @click="changeInstance()" append-icon="mdi-image-filter-hdr" link v-bind="props"
                         data-cy="switch-instance">
              <v-list-item-title>Change EVerest instance</v-list-item-title>
            </v-list-item>
          </template>
          <span>Connected to {{ connectionUrl }}</span>
        </v-tooltip>
      </v-list>
      <v-list-item class="bottom-list d-flex flex-column">
        <span>Version {{ version }}</span>
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <router-view v-if="!evbc_disconnected"/>
      <v-overlay :dark="false" v-else>
        <!-- FIXME (aw): remove absolute dimensions without changing v-card size -->
        <v-card elevation="10" loading="true" width="400" height="150">
          <template v-slot:actions>
            <v-progress-linear height="10" indeterminate></v-progress-linear>
          </template>
          <v-card-title>Lost connection to EVerest backend</v-card-title>
          <v-card-text>Trying to reconnect ...</v-card-text>
        </v-card>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<style scoped>
.rotateable {
  transition: transform 1s ease-in-out;
}

.rotateable:hover {
  transform: rotateZ(360deg);
}

.bottom-list {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.app-bar-title {
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
}
</style>

<script lang="ts">
import {defineComponent, inject} from "vue";
import EVBackendClient from "@/modules/evbc/client";

import {Router, useRouter} from "vue-router";
import {Notyf} from "notyf";

let evbc: EVBackendClient;
let router: Router;
let notyf: Notyf;
export default defineComponent({
  data: () => ({
    drawer: false,
    evbc_disconnected: false,
    evbc_status: "",
    version: VITE_APP_VERSION,
  }),
  computed: {
    connectionUrl() {
      return evbc?.connection.url ?? "nothing";
    }
  },
  methods: {
    async changeInstance() {
      let notification;
      // show notification if disconnect takes longer than 250ms
      const timeout = setTimeout(() => {
        notification = notyf.open({type: "warning", message: "Disconnecting from EVerest backend ...", ripple: false});
      }, 250)
      await evbc.disconnect();
      clearTimeout(timeout);
      if (notification) {
        notyf.dismiss(notification);
      }
      await router.push({path: "/connect", query: {auto_connect: "false"}});
    },
  },
  created() {
    evbc = inject<EVBackendClient>("evbc");
    router = useRouter();
    notyf = inject<Notyf>("notyf");
    evbc.on("connection_state", (ev) => {
      this.evbc_status = ev.text;
      if (ev.type === "RECONNECT" || ev.type === "IDLE") {
        this.evbc_disconnected = true;
      } else if (ev.type === "INITIALIZED") {
        this.evbc_disconnected = false;
      }
    });
  },
});
</script>
