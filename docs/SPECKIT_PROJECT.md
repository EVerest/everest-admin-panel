# Speckit Project Notes

This file contains human-maintained notes to help Speckit/A.I. tools understand the repository.

Overview

- Stack: Vue 3 (Composition API) + TypeScript, Vite, Pinia, Vuetify
- Purpose: Admin UI for EVerest configuration data, module files, and runtime management.

Key files & directories

- `src/` — application source code
- `src/modules/evbc/` — backend RPC client, connection logic, config model
- `src/modules/evconf_konva/` — Konva-based config editor views and stage
- `plugins/` — Vue plugin setup (i18n, vuetify)
- `store/` — Pinia stores
- `cypress/` — e2e tests

Development scripts

- `pnpm dev` — run dev server
- `pnpm build` — build production assets
- `pnpm test` — run unit tests (Vitest)

Generated docs

- `docs/speckit-generated.md` is produced by `scripts/generate-speckit-docs.js`.
