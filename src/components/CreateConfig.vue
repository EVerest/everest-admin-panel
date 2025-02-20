<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <div class="btn-container">
    <v-tooltip
      v-if="state == ComponentStates.DEFAULT"
      location="right"
      open-delay="500"
    >
      <template #activator="{ props }">
        <v-btn
          color="default"
          variant="flat"
          density="compact"
          icon="mdi-upload"
          data-cy="upload-config-btn"
          v-bind="props"
          @click="uploadConfigPrompt()"
        />
      </template>
      <span>Upload Config</span>
    </v-tooltip>
    <v-tooltip
      v-if="state == ComponentStates.DEFAULT"
      location="right"
      open-delay="500"
    >
      <template #activator="{ props }">
        <v-btn
          color="default"
          variant="flat"
          density="compact"
          icon="mdi-plus"
          data-cy="plus-create-config-btn"
          v-bind="props"
          @click="state = ComponentStates.ASK_USER_FOR_CONFIG_NAME"
        />
      </template>
      <span>Create Config</span>
    </v-tooltip>
    <v-tooltip
      v-if="state == ComponentStates.ASK_USER_FOR_CONFIG_NAME"
      location="right"
      open-delay="500"
    >
      <template #activator="{ props }">
        <v-btn
          color="default"
          variant="flat"
          density="compact"
          data-cy="abort-create-config-btn"
          icon="mdi-close"
          v-bind="props"
          @click="resetDialog()"
        />
      </template>
      <span>Abort</span>
    </v-tooltip>
    <v-tooltip
      v-if="state == ComponentStates.ASK_USER_FOR_CONFIG_NAME"
      location="right"
      open-delay="500"
    >
      <template #activator="{ props }">
        <v-btn
          color="default"
          variant="flat"
          density="compact"
          icon="mdi-check"
          data-cy="accept-create-config-btn"
          v-bind="props"
          :disabled="!configNameValid"
          @click="onAcceptBtnClick()"
        />
      </template>
      <span>Create Config</span>
    </v-tooltip>
  </div>
  <v-text-field
    v-if="state === ComponentStates.ASK_USER_FOR_CONFIG_NAME"
    v-model="configName"
    density="compact"
    data-cy="config-name-input"
    placeholder="config name"
    :rules="[validateConfigName]"
  />
  <v-dialog
    v-model="showErrorDialog"
    @click:outside="resetDialog()"
  >
    <v-card color="danger">
      <v-card-title>Couldn't load config</v-card-title>
      <v-card-text>
        <pre style="white-space: pre-wrap;"><code>{{ errors }}</code></pre>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          @click="resetDialog()"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref, inject, defineEmits, } from "vue";
import { useEvbcStore, } from "@/store/evbc";
import { storeToRefs, } from "pinia";
import yaml from "js-yaml";
import Ajv from "ajv";
import { EverestConfig, } from "@/modules/evbc";
import { urlToPublicAsset, } from "@/utils";

enum ComponentStates {
  DEFAULT,
  ASK_USER_FOR_CONFIG_NAME,
  }

const evbcStore = useEvbcStore();
const state = ref<ComponentStates>( ComponentStates.DEFAULT, );
const configName = ref<string>( "", );
const configNameValid = computed<boolean>( () => validateConfigName() === true, );
const emit = defineEmits<{
    createConfig: [name: string, content?: EverestConfig],
  }>();
const { available_configs, } = storeToRefs( evbcStore, );
const configContent = ref<EverestConfig>( null, );
const errors = ref<string>( null, );
const showErrorDialog = computed<boolean>( () => !!errors.value, );

function onAcceptBtnClick() {
  if ( validateConfigName() === true ) {
    emit( "createConfig", configName.value, configContent.value ?? undefined, );
    resetDialog();
  }
}

function resetDialog() {
  state.value = ComponentStates.DEFAULT;
  configName.value = "";
  configContent.value = null;
  errors.value = null;
}

function uploadConfigPrompt() {
  const input = document.createElement( "input", );
  input.type = "file";
  input.accept = ".json,.yaml,.yml";
  input.click();
  input.onchange = ( e, ) => {
    const file = ( e.target as HTMLInputElement ).files?.[0];
    if ( file ) {
      const reader = new FileReader();
      reader.onload = async ( e, ) => {
        const parseResult = await parseConfig( e.target?.result as string, );
        if ( !parseResult.errors ) {
          configContent.value = parseResult.config;
          configName.value = file.name.replace( /\.[^.]+$/, "", ); // remove file extension
          state.value = ComponentStates.ASK_USER_FOR_CONFIG_NAME;
        } else {
          errors.value = parseResult.errors;
        }
      };
      reader.readAsText( file, );
    }
  };
}

/**
   * A config name must not be empty, must not contain the extension and must be a valid filename
   */
function validateConfigName() {
  if ( configName.value.trim().length === 0 ) {
    return "Please enter a name";
  } else if ( /.*(\.json|\.ya?ml)$/.test( configName.value, ) ) {
    return "The name must not contain the file extension";
  } else if ( !/^[a-zA-Z0-9-_]+$/.test( configName.value, ) ) {
    return "The name must only contain letters, numbers, dashes and underscores";
  } else if ( Object.keys( available_configs.value, ).includes( configName.value.trim(), ) ) {
    return "The name must be unique";
  } else {
    return true;
  }
}

/**
 * Validates that the config content is a valid JSON or YAML config
 */
async function validateConfigContent( content: unknown, ): Promise<true | string> {
  const ajv = new Ajv();
  const schema = await getConfigJsonSchema();
  const validate = ajv.compile( schema, );
  const valid = validate( content, );
  if ( valid ) {
    return true;
  } else {
    return JSON.stringify( validate.errors, null, 2, );
  }
}

async function getConfigJsonSchema(): Promise<object> {
  const response = await fetch( urlToPublicAsset( "schemas/config.json", ), );
  if ( !response.ok ) {
    throw new Error( `HTTP error! status: ${response.status}`, );
  }
  return await response.json();
}

/**
 * Parse config
 */
async function parseConfig( content: string, ): Promise<{ errors: string, config: EverestConfig }> {
  try {
    const config = yaml.load( content, );
    const validationResult = await validateConfigContent( config, );
    if ( validationResult === true ) {
      return { errors: null, config: config as EverestConfig, };
    } else {
      return { errors: validationResult, config: null, };
    }
  } catch ( e ) {
    return { errors: e.toString(), config: null, };
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
