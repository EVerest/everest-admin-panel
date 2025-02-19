// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vuetify/base",
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    quotes: [ "error", "double", {avoidEscape: true,}, ],
    indent: [ "error", 2, ],
    semi: [ "error", "always", ],
    curly: "error",
    eqeqeq: [ "error", "always", ],
    "comma-dangle": ["error", "always",],
    "vue/no-mutating-props": "error",

  },
  ignorePatterns: [ "node_modules", "dist", ],
};
