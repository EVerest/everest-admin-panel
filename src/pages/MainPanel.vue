<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-img class="mx-4 rotateable" max-height="40" max-width="40" contain src="img/icons/everest_lf_logo.svg" />
      <v-toolbar-title>EVerest admin panel</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app fixed temporary>
      <v-list nav dense>
        <v-list-item to="config" link>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Config</v-list-item-title>
        </v-list-item>
        <v-list-item to="account" link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
        <v-list-item to="tests" link>
          <v-list-item-icon>
            <v-icon>mdi-car-lifted-pickup</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Tests</v-list-item-title>
        </v-list-item>
        <v-list-item to="about" link>
          <v-list-item-icon>
            <v-icon>mdi-ninja</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Debug</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view v-if="!evbc_disconnected" />
      <v-overlay :dark="false" v-else>
        <!-- FIXME (aw): remove absolute dimensions without changing v-card size -->
        <v-card elevation="10" loading="true" width="400" height="150">
          <template slot="progress">
            <v-progress-linear height="10" indeterminate></v-progress-linear>
          </template>
          <v-card-title>Lost connection to EVerest backend</v-card-title>
          <v-card-text>Trying to reconnect ...</v-card-text>
        </v-card>
      </v-overlay>
      <v-snackbar v-model="show_snackbar" :color="snackbar.color" :timeout="snackbar.timeout" bottom>
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="show_snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
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
</style>

<script>
export default {
  data: () => ({
    drawer: false,
    evbc_disconnected: false,
    evbc_status: "",
    show_snackbar: false,
  }),
  created() {
    this.$evbc.on("connection_state", (ev) => {
      this.evbc_status = ev.text;
      if (ev.type === "RECONNECT") {
        this.evbc_disconnected = true;
      } else if (ev.type === "INITIALIZED") {
        this.evbc_disconnected = false;
      }
    });

    this.$store.commit("snackbar_message", { text: "Hi there", color: "blue", timeout: 3142 });
  },
  computed: {
    snackbar() {
      return this.$store.state.snackbar_message;
    },
  },
  watch: {
    snackbar(sb) {
      this.show_snackbar = sb === undefined ? false : true;
    },
  },
};
</script>
