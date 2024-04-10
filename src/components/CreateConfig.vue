<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
  <div class="btn-container">
    <v-tooltip location="right" open-delay="500" v-if="state == ComponentStates.DEFAULT">
      <template v-slot:activator="{ props }">
        <v-btn color="default"
               variant="flat"
               density="compact"
               icon="mdi-plus"
               data-cy="plus-create-config-btn"
               v-bind="props"
               @click="state = ComponentStates.ASK_USER_FOR_CONFIG_NAME"
        ></v-btn>
      </template>
      <span>Create Config</span>
    </v-tooltip>
    <v-tooltip location="right" open-delay="500" v-if="state == ComponentStates.ASK_USER_FOR_CONFIG_NAME">
      <template v-slot:activator="{ props }">
        <v-btn color="default"
               variant="flat"
               density="compact"
               data-cy="abort-create-config-btn"
               icon="mdi-close"
               v-bind="props"
               @click="abortConfigCreation()"
        ></v-btn>
      </template>
      <span>Abort</span>
    </v-tooltip>
    <v-tooltip location="right" open-delay="500" v-if="state == ComponentStates.ASK_USER_FOR_CONFIG_NAME">
      <template v-slot:activator="{ props }">
        <v-btn color="default"
               variant="flat"
               density="compact"
               icon="mdi-check"
               data-cy="accept-create-config-btn"
               v-bind="props"
               :disabled="!configNameValid"
               @click="createConfig()"
        ></v-btn>
      </template>
      <span>Create Config</span>
    </v-tooltip>
  </div>
  <v-text-field
      density="compact"
      v-model="configName"
      v-if="state === ComponentStates.ASK_USER_FOR_CONFIG_NAME"
      data-cy="config-name-input"
      placeholder="config name"
      :rules="[validateConfigName]"
  ></v-text-field>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

  enum ComponentStates {
    DEFAULT,
    ASK_USER_FOR_CONFIG_NAME,
  }
  const state = ref<ComponentStates>(ComponentStates.DEFAULT);
  const configName = ref<string>("");
  const configNameValid = computed<boolean>(() => validateConfigName() === true);
  const emit = defineEmits<{
    createConfig: [name: string],
  }>();

  function createConfig() {
    if (validateConfigName() === true) {
      emit("createConfig", configName.value);
      state.value = ComponentStates.DEFAULT;
      configName.value = "";
    }
  }

  function abortConfigCreation() {
    state.value = ComponentStates.DEFAULT;
    configName.value = "";
  }

  /**
   * A config name must not be empty, must not contain the extension and must be a valid filename
   */
  function validateConfigName() {
    if (configName.value.trim().length === 0) {
      return "Please enter a name";
    } else if (/.*(\.json|\.ya?ml)$/.test(configName.value)) {
      return "The name must not contain the file extension";
    } else if (!/^[a-zA-Z0-9-_]+$/.test(configName.value)) {
      return "The name must only contain letters, numbers, dashes and underscores";
    } else {
      return true;
    }
  }
</script>


<style scoped lang="scss">
  .btn-container {
    display: flex;
    justify-content: end;
    width: 100%;
  }
</style>
