<!-- SPDX-License-Identifier: Apache-2.0
     Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-dialog :model-value="showDialog" width="auto" @click:outside="deny">
    <v-card>
      <v-card-title class="d-flex flex-row align-baseline">
        <v-icon size="large" color="error"> mdi-alert-circle </v-icon>
        &nbsp;
        {{ $props.title }}
      </v-card-title>
      <v-card-text>
        <p>{{ $props.text }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="accept">
          {{ $props.acceptText }}
        </v-btn>
        <v-btn @click="deny">
          {{ $props.denyText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    acceptText: {
      type: String,
      required: true,
    },
    denyText: {
      type: String,
      required: true,
    },
  },
  emits: ["accept", "deny"],
  methods: {
    accept() {
      this.$emit("accept");
    },
    deny() {
      this.$emit("deny");
    },
  },
});
</script>
