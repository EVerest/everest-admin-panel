// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import { ActionTree, GetterTree, MutationTree } from "vuex";
import EVConfigModel from "@/modules/evbc/config_model";
import ConfigStageContext, { SelectionType } from "@/modules/evconf_konva/stage_context";

// FIXME (aw): should this be made a per store instance variable?
const non_reactive_state = {
  config_model: null as EVConfigModel,
  config_context: new ConfigStageContext(),
};

type State = {
  config_opened: boolean;
  selection: SelectionType;
};

const state: State = {
  config_opened: false,
  selection: { type: "NONE" },
};

const getters: GetterTree<State, unknown> = {
  config_context: () => non_reactive_state.config_context,
  current_config: (state) => {
    return state.config_opened ? non_reactive_state.config_model : null;
  },
  selected_module_instance: (state) => {
    if (state.config_opened && state.selection.type === "MODULE_INSTANCE") {
      return state.selection.id;
    }

    return null;
  },
  selected_terminal: (state) => {
    // FIXME (aw): asymmetrie, shouldn't there be also a terminal id
    if (state.config_opened && state.selection.type === "TERMINAL") {
      return state.selection.terminal;
    }

    return null;
  },
  selected_connection: (state) => {
    if (state.config_opened && state.selection.type === "CONNECTION") {
      return state.selection.id;
    }

    return null;
  },
};

const mutations = <MutationTree<State>>{
  change_config_opened_state(state, opened) {
    state.config_opened = opened;
  },
  change_current_selection(state, selection: SelectionType) {
    state.selection = selection;
  },
};

const actions = <ActionTree<State, unknown>>{
  set_opened_config({ commit, state }, config_model: EVConfigModel) {
    if (state.config_opened) {
      // FIXME (aw): check vuex behaviour on changing a value which will become the same again eventually?
      commit("change_config_opened_state", false);
    }

    non_reactive_state.config_model = config_model;

    commit("change_config_opened_state", true);
  },
  reset_opened_config({ commit }) {
    non_reactive_state.config_model = null;

    commit("change_config_opened_state", false);
  },
  set_current_selection({ commit }, selection: SelectionType) {
    commit("change_current_selection", selection);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
