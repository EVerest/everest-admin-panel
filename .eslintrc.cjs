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
    quotes: [ "warn", "double", { avoidEscape: true, }, ],
    indent: [ "warn", 2, ],
    semi: [ "warn", "always", ],
    curly: "warn",
    eqeqeq: [ "error", "always", ],
    "comma-dangle": [ "warn", "always", ],
    "vue/no-mutating-props": "error",
    "object-curly-spacing": [ "warn", "always", ],
    "array-bracket-spacing": [ "warn", "always", ],
    "arrow-parens": [ "warn", "always", ],
    "brace-style": [ "warn", "1tbs", ],
    "comma-spacing": [ "warn", { before: false, after: true, }, ],
    "newline-per-chained-call": [ "warn", { ignoreChainWithDepth: 2, }, ],
    "function-paren-newline": [ "warn", "consistent", ],
    "space-in-parens": [ "warn", "always", ],
    "prefer-const": "warn",
  },
  ignorePatterns: [ "node_modules", "dist", ],
};
