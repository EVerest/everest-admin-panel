<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-spacer />
      <v-col class="pt-0" cols="7">Local storage: {{ localStorageItem }} </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      localStorageItem: ""
    };
  },
  created() {
    this.loadLocalStorage();
  },
  methods: {
    loadLocalStorage() {
      const lsItem = window.localStorage.getItem("ls");
      if (!lsItem) {
        this.localStorageItem = `No item named 'ls' in our storage :(`;
        window.localStorage.setItem("ls", "Saved stuff");
      } else {
        this.localStorageItem = lsItem;
      }
    }
  }
});
</script>
