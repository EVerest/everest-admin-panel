import Vue from '@vitejs/plugin-vue';
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify';
import {defineConfig} from "vite";
import ViteFonts from 'unplugin-fonts/vite';
import {commonjsDeps} from '@koumoul/vjsf/utils/build';
import {fileURLToPath} from "node:url";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
    optimizeDeps: {
        include: commonjsDeps,
    },
    build: {
        commonjsOptions: {
            include: commonjsDeps,
        }
    },
    plugins: [
        commonjs(),
        Vue({
            template: { transformAssetUrls }
        }),
        Vuetify({
            autoImport: true,
        }),
        ViteFonts({
            google: {
                families: [ {
                    name: 'Roboto',
                    styles: 'wght@100;300;400;500;700;900',
                }],
            },
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    server: {
        port: 8080,
    },
});
