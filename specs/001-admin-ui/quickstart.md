# Quickstart — Admin UI (001-admin-ui)

This quickstart explains how to run the frontend locally, use the simulator data, and exercise the admin UI feature for creating and editing configurations.

Steps

* 1. Install dependencies

```bash
pnpm install
```

* 2. Run the dev server (simulator data used when backend is unavailable)

```bash
pnpm dev
```

* 3. Open the app in the browser (usually at `http://localhost:5173`), navigate to the Config page and use the "Create Config" flow.

* 4. Run E2E tests for admin flows (requires Cypress installed)

```bash
pnpm run test:e2e
```

Developer notes

* Use `src/modules/evbc/simulator-sample-data` to inspect sample configurations and interfaces.
* Add AJV schemas under `specs/001-admin-ui/contracts/` and `public/schemas/` to enable schema-driven validation.
