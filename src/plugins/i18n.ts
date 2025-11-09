// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { computed, ComputedRef, nextTick } from "vue";
import { createI18n } from "vue-i18n";
import defaultMessages from "@/locales/en.json";
import defaultModuleMessages from "@/locales/en_module_info";
import { en as vuetifyMessages } from "vuetify/locale";

export const SUPPORTED_LOCALES = ["en", "de", "zh"];
export const LOCALE_ITEMS = [
  { title: "English", value: "en" },
  { title: "Deutsch", value: "de" },
  { title: "简体中文", value: "zh" },
];
const DEFAULT_LOCALE = "en";

const options = {
  legacy: false,
  useScope: "global",
  globalInjection: true,
  // allowComposition: true, // XXX: via https://vue-i18n.intlify.dev/guide/migration/vue3
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {} as Record<string, any>,
} as const;

export const i18n = createI18n(options);

function setI18nLanguage(locale: string) {
  if (typeof i18n.global.locale !== "string" && "value" in i18n.global.locale) {
    i18n.global.locale.value = locale;
  } else {
    (i18n.global.locale as any) = locale;
  }
  document.querySelector("html").setAttribute("lang", locale);
}

async function loadLocaleMessages(locale: string) {
  const messages = await import(`../locales/${locale}.json`);
  const moduleMessages = await import(`../locales/${locale}_module_info.ts`);
  const interfacesMessages = await import(`../locales/${locale}_interfaces_list.ts`);
  const mod = await import("vuetify/locale");
  const vuetifyLocale = (mod as Record<string, any>)[locale] ?? (mod as any).default;
  const allMessages = {
    ...messages.default,
    ...moduleMessages.default,
    ...interfacesMessages.default,
    $vuetify: vuetifyLocale,
  };

  i18n.global.setLocaleMessage(locale, allMessages);
  return nextTick();
}

export function verifyLocale(locale: string) {
  if (SUPPORTED_LOCALES.includes(locale)) {
    return locale;
  } else {
    return DEFAULT_LOCALE;
  }
}

export async function establishLocale(paramsLocale: string) {
  const locale = verifyLocale(paramsLocale);

  if (!i18n.global.availableLocales.includes(locale)) {
    await loadLocaleMessages(locale);
  }

  setI18nLanguage(locale);

  return locale;
}

/**
 * Synchronous translator usable at module scope.
 * Returns i18n.global.t(...) when available, falls back to returning the key
 * string otherwise
 */
export function t(key: string, params?: Record<string, unknown>): string {
  try {
    const tfn = i18n?.global?.t;

    if (typeof tfn !== "function") {
      return String(key);
    }

    const translator = tfn as (k: string, p?: Record<string, unknown>) => unknown;
    const result = translator(key, params);
    return typeof result === "string" ? result : String(key);
  } catch {
    return String(key);
  }
}

/**
 * Helper function to use computed translations in components that are not
 * automatically updated when the global locale changes.
 */
export function tc(key: string, ...args: unknown[]): ComputedRef<string> {
  return computed(() => {
    try {
      const tfn = i18n?.global?.t;

      if (typeof tfn !== "function") {
        return String(key);
      }

      const translator = tfn as (...a: unknown[]) => unknown;
      const result = translator(key, ...args);
      return typeof result === "string" ? result : String(key);
    } catch {
      return String(key);
    }
  });
}

options.messages[DEFAULT_LOCALE] = {
  ...defaultMessages,
  ...defaultModuleMessages,
  $vuetify: { ...vuetifyMessages },
};
options.messages[DEFAULT_LOCALE].$vuetify = { ...vuetifyMessages };

i18n.global.setLocaleMessage(DEFAULT_LOCALE, options.messages[DEFAULT_LOCALE]);
setI18nLanguage(DEFAULT_LOCALE);
