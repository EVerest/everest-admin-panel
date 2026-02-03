// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineConfig, loadEnv } from "vite";
import { commonjsDeps } from "@koumoul/vjsf/utils/build.js";
import { fileURLToPath } from "node:url";
import commonjs from "@rollup/plugin-commonjs";
import { VitePWA } from "vite-plugin-pwa";
import { vitePluginFetchSchemas } from "./build-tools/fetch-schemas-plugin";

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), "");
  return {
    base: mode === "pages" ? `/everest-admin-panel/${process.env.SUBDIR}` : "",
    optimizeDeps: {
      include: commonjsDeps,
    },
    build: {
      commonjsOptions: {
        include: commonjsDeps,
      },
      minify: true,
    },
    test: {
      include: ["**/*.test.ts", "**/*.test.vue"],
      coverage: {
        reporter: ["json-summary"],
        reportOnFailure: true,
      },
    },
    define: {
      VITE_APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      commonjs(),
      Vue({
        template: { transformAssetUrls },
      }),
      Vuetify({
        autoImport: true,
      }),
      VitePWA({ registerType: "autoUpdate" }),
      vitePluginFetchSchemas(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    server: {
      port: 8080,
      host: "127.0.0.1",
    },
  };
});
