// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { ComputedRef, nextTick } from "vue";
import { createI18n } from "vue-i18n";
import type { I18nOptions } from "vue-i18n";
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

type MessageValue = string | ComputedRef<string> | { [key: string]: MessageValue };
type LocaleMessages = Record<string, MessageValue>;

const defaultMessagesTyped = defaultMessages as unknown as LocaleMessages;
const defaultModuleMessagesTyped = defaultModuleMessages as unknown as LocaleMessages;
const vuetifyMessagesTyped = vuetifyMessages as unknown as Record<string, Record<string, string>>;

const defaultLocaleMessages: LocaleMessages = {
  ...defaultMessagesTyped,
  ...defaultModuleMessagesTyped,

  // Trust vuetify messages to not inject anything malicious for a valid locale
  // eslint-disable-next-line security/detect-object-injection
  $vuetify: { ...(vuetifyMessagesTyped[DEFAULT_LOCALE] ?? {}) },
};

const options: I18nOptions = {
  legacy: false,
  // useScope: "global",
  globalInjection: true,
  // allowComposition: true, // XXX: via https://vue-i18n.intlify.dev/guide/migration/vue3
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    [DEFAULT_LOCALE]: defaultLocaleMessages,
  } as Record<string, LocaleMessages>,
} as const;

// Make the concrete type explicit so analyzers can't treat `i18n` as unknown/error
type I18nInstance = ReturnType<typeof createI18n>;
export const i18n: I18nInstance = createI18n(options);

function setI18nLanguage(locale: string) {
  if (
    typeof i18n.global.locale !== "string" &&
    typeof i18n.global.locale === "object" &&
    "value" in i18n.global.locale
  ) {
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
  if (!isValidLocale(locale)) {
    return nextTick();
  }

  const messages = (await import(`../locales/${locale}.json`)) as LocaleModule;
  const moduleMessages = (await import(`../locales/${locale}_module_info.ts`)) as LocaleModule;
  const interfacesMessages = (await import(`../locales/${locale}_interfaces_list.ts`)) as LocaleModule;
  const mod = (await import("vuetify/locale")) as VuetifyLocaleModule;

  // Trust vuetify messages to not inject anything malicious for a valid locale
  // eslint-disable-next-line security/detect-object-injection
  const vuetifyLocale: LocaleMessages = mod[locale] ?? {};

  const allMessages: LocaleMessages = {
    ...messages.default,
    ...moduleMessages.default,
    ...interfacesMessages.default,
    $vuetify: vuetifyLocale,
  };

  i18n.global.setLocaleMessage(locale, allMessages);
  return nextTick();
}

function isValidLocale(locale: string) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function verifyLocale(locale?: string): string {
  if (typeof locale === "string" && isValidLocale(locale)) {
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

i18n.global.setLocaleMessage(DEFAULT_LOCALE, defaultLocaleMessages);
setI18nLanguage(DEFAULT_LOCALE);
