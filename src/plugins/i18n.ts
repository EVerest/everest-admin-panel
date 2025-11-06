// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { computed, ComputedRef, nextTick } from "vue";
import { createI18n, I18n, I18nOptions } from "vue-i18n";
import defaultMessages from "@/locales/en.json";
import defaultModuleMessages from "@/locales/en_module_info";
import defaultInterfacesMessages from "@/locales/en_interfaces_list";
import { en as vuetifyMessages } from "vuetify/locale";
import { verify } from "crypto";

export const SUPPORTED_LOCALES = ["en", "de", "zh"];
export const LOCALE_ITEMS = [
    { "title": "English", "value": "en" },
    { "title": "Deutsch", "value": "de" },
    { "title": "简体中文", "value": "zh" }
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
};
options.messages[DEFAULT_LOCALE] = {
    ...defaultMessages,
    ...defaultModuleMessages,
    $vuetify: { ...vuetifyMessages },
};
// See: https://vuetifyjs.com/en/features/internationalization/#vue-i18n
options.messages[DEFAULT_LOCALE]["$vuetify"] = { ...vuetifyMessages };

async function setupI18n(options: I18nOptions) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale!);
  return i18n;
}

function setI18nLanguage(i18n: I18n, locale: string) {
  if (typeof i18n.global.locale !== "string" && "value" in i18n.global.locale) {
    i18n.global.locale.value = locale;
  } else {
    i18n.global.locale = locale;
  }
  document.querySelector("html").setAttribute("lang", locale);
}

async function loadLocaleMessages(i18n: I18n, locale: string) {
  const messages = await import(`../locales/${locale}.json`);
  const moduleMessages = await import(`../locales/${locale}_module_info.ts`);
  const interfacesMessages = await import(`../locales/${locale}_interfaces_list.ts`);
  const mod = await import("vuetify/locale");
  const vuetifyLocale = (mod as Record<string, any>)[locale] ?? (mod as any).default;
  const allMessages = {
    ...messages.default,
    ...moduleMessages.default,
    ...interfacesMessages.default,
    "$vuetify": vuetifyLocale,
  };

  i18n.global.setLocaleMessage(locale, allMessages);
  return nextTick()
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
    await loadLocaleMessages(i18n, locale);
  }

  setI18nLanguage(i18n, locale);

  return locale;
}

/**
 * Synchronous translator usable at module scope. 
 * Returns i18n.global.t(...) when available, falls back to returning the key
 * string otherwise
 */
export function t(key: string, params?: Record<string, unknown>): string {
  // i18n is initialized by top-level await above; guard for safety
  if (i18n?.global && typeof i18n.global.t === "function") {
    // cast to any to avoid overly specific type issues
    return (i18n.global.t as any)(key, params) as string;
  }
  return String(key);
}

/**
 * Helper function to use computed translations in components that are not
 * automatically updated when the global locale changes.
 */
export function tc(key: string, ...args: unknown[]): ComputedRef<string> {
  const t = i18n.global.t as (key: string, ...args: unknown[]) => string;

  return computed(() => t(key, ...args));
}

export const i18n = await setupI18n(options);
