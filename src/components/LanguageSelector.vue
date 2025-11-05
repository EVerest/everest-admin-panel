<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-btn
            icon="mdi-web"
            v-bind="menu"
        >
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          @click="updateLocale(index)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
import { LOCALE_ITEMS, establishLocale } from "@/plugins/i18n";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const items = LOCALE_ITEMS;
const model = defineModel();

async function updateLocale(index: number) {
  const selectedLocale = items[index].value;
  const newLocale = await establishLocale(selectedLocale);

  if (route.params.locale === newLocale) {
    return;
  }

  router.push({
    name: route.name as string,
    params: {
      ...route.params,
      locale: newLocale,
    },
    query: route.query,
    hash: route.hash,
  });  
}
</script>

