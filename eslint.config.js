import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
    {
        plugins: {
            'typescript-eslint': tseslint.plugin,
        },
        files: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "src/*.d.ts"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                project: './tsconfig.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },
    },
    eslintConfigPrettier,
]
