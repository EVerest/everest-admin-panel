import Vue from '@vitejs/plugin-vue';
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify';
import {defineConfig, loadEnv} from "vite";
import {commonjsDeps} from '@koumoul/vjsf/utils/build';
import {fileURLToPath} from "node:url";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig(({ mode}) => {
    loadEnv(mode, process.cwd(), '');
    return {
        base: mode === 'pages' ? `/everest-admin-panel/${process.env.SUBDIR}` : '',
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
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    server: {
        port: 8080,
    },}
});
