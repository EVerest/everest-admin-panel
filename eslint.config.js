// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vuetifyPlugin from "eslint-plugin-vuetify";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import vueParser from "vue-eslint-parser";
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";
import globals from "globals";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
  // Include .gitignore patterns
  includeIgnoreFile(gitignorePath),
  
  // Base configuration for all files
  eslint.configs.recommended,
  
  // Global configuration for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        // Vite globals
        VITE_APP_VERSION: "readonly",
      },
    },
  },
  
  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      // Project-specific rules
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "quotes": ["warn", "double", { avoidEscape: true }],
      "prefer-const": "warn",
      "prettier/prettier": ["error"],
      "no-unused-vars": "off", // Turn off base rule for TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }],
    },
  },
  
  // Vue-specific configuration
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      vue: vuePlugin,
      vuetify: vuetifyPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Project-specific rules
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "quotes": ["warn", "double", { avoidEscape: true }],
      "vue/no-mutating-props": "error",
      "prefer-const": "warn",
      "prettier/prettier": ["error"],
      "no-unused-vars": "off", // Turn off base rule for TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }],
    },
  },
  
  // TypeScript declaration files
  {
    files: ["**/*.d.ts"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  
  // Cypress-specific configuration
  {
    files: ["cypress/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        before: "readonly",
        after: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off", // Turn off base rule for TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "args": "none", // Don't check function parameters in tests
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }],
    },
  },
  
  // Prettier configuration (disable conflicting rules)
  prettierConfig,
];
