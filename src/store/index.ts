// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import ConfigStageContext from "@/modules/evconf_konva/stage_context";
import Vue from "vue";
import Vuex from "vuex";

import evbc_store from "./evbc";

Vue.use(Vuex);

type SnackbarMessage = {
  text: string;
  color: string;
  timeout: number;
};

const store = new Vuex.Store({
  state: {
    snackbar_message: undefined as SnackbarMessage,
  },
  mutations: {
    snackbar_message(state, payload: SnackbarMessage) {
      state.snackbar_message = { ...payload };
    },
  },
  modules: {
    evbc: evbc_store,
  },
});

(store.getters["evbc/config_context"] as ConfigStageContext).add_observer((ev) => {
  if (ev.type === "SELECT") {
    store.dispatch("evbc/set_current_selection", ev.selection);
  }
});

export default store;
