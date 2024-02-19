<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2023 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-dialog :model-value="show_dialog" @click:outside="deny" width="auto">
    <v-card>
      <v-card-title class="d-flex flex-row align-baseline">
        <v-icon
            size="large"
            color="error"
        >
          mdi-alert-circle
        </v-icon>
        &nbsp;
        {{ $props.title }}
      </v-card-title>
      <v-card-text>
        <p>{{ $props.text }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="accept">{{ $props.accept_text }}</v-btn>
        <v-btn @click="deny">{{ $props.deny_text }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    show_dialog: {
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
    accept_text: {
      type: String,
      required: true,
    },
    deny_text: {
      type: String,
      required: true,
    },
  },
  methods: {
    accept() {
      this.$emit("accept");
    },
    deny() {
      this.$emit("deny");
    },
  },
})
</script>

