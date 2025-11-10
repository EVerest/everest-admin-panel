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

type LocaleMessages = Record<string, unknown>;

const options = {
  legacy: false,
  useScope: "global",
  globalInjection: true,
  // allowComposition: true, // XXX: via https://vue-i18n.intlify.dev/guide/migration/vue3
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {} as Record<string, LocaleMessages>,
} as const;

export const i18n = createI18n(options);

function setI18nLanguage(locale: string) {
  if (typeof i18n.global.locale !== "string" && "value" in i18n.global.locale) {
    i18n.global.locale.value = locale;
  } else {
    // vue-i18n has union type for locale, need to handle both cases
    i18n.global.locale = locale as typeof i18n.global.locale;
  }
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    htmlElement.setAttribute("lang", locale);
  }
}

interface LocaleModule {
  default: LocaleMessages;
}

interface VuetifyLocaleModule {
  [key: string]: LocaleMessages;
  default?: LocaleMessages;
}

async function loadLocaleMessages(locale: string) {
  const messages = (await import(`../locales/${locale}.json`)) as LocaleModule;
  const moduleMessages = (await import(`../locales/${locale}_module_info.ts`)) as LocaleModule;
  const interfacesMessages = (await import(`../locales/${locale}_interfaces_list.ts`)) as LocaleModule;
  const mod = (await import("vuetify/locale")) as VuetifyLocaleModule;
  const vuetifyLocale: LocaleMessages = mod[locale] ?? mod.default ?? {};
  const allMessages: LocaleMessages = {
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

const defaultLocaleMessages: LocaleMessages = {
  ...defaultMessages,
  ...defaultModuleMessages,
  $vuetify: { ...vuetifyMessages },
};

options.messages[DEFAULT_LOCALE] = defaultLocaleMessages;

i18n.global.setLocaleMessage(DEFAULT_LOCALE, defaultLocaleMessages);
setI18nLanguage(DEFAULT_LOCALE);
