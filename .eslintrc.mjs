export default {
  root: true,
  env: {
    node: true,
    es2022: true
  },
  'extends': [
    'plugin:vue/essential',
    'plugin:vuetify/base',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  ignorePatterns: [
      "node_modules",
      "dist"
  ],
}
