# 001-admin-ui — Admin UI to create & edit EVerest configurations

Short description
- Build a web-based admin UI that allows administrators to create, edit, and manage EVerest configurations by adding components (modules), connecting them by exposing/consuming interfaces, and editing component parameters.

Actors
- Administrator: user who configures and manages EVerest instances.
- System: the frontend application (this repo) interacting with backend RPC-over-WebSocket.

Scope & Constraints
- Web UI only (frontend); backend RPCs are out of scope but must be exercised via simulator data for offline testing.
- Must support creating configurations, adding/removing modules, wiring module terminals by interface compatibility, editing parameters, saving, loading, and validating configs.
- Must validate and sanitize external data (localStorage, backend responses) before merging into app state.

User Scenarios & Testing
- Scenario 1 — Create new config from template:
  - Admin opens "Create Config", selects a template, adds two modules (A and B), connects an output terminal from A to an input terminal of B, edits parameters on both modules, saves the configuration.
  - Test: E2E (Cypress) flow that performs UI clicks, asserts that the canvas shows both modules, connection exists, parameter values persist after save + reload.

- Scenario 2 — Edit existing config and validate:
  - Admin loads an existing config, modifies a component parameter that is schema-validated (e.g., numeric range), attempts to save; invalid values must show user-facing validation errors and prevent save.
  - Test: Unit tests for validation logic; E2E test: enter invalid value, assert validation message shown and save blocked.

- Scenario 3 — Protect against malformed input:
  - Admin imports or localStorage contains malformed entries (e.g., arrays where objects expected) or polluted keys like `__proto__`.
  - Test: Unit tests for runtime guards; ensure such entries are ignored/refused and app state remains intact.

Functional Requirements (testable)
- FR1: Create configuration — Admin can create and name a new configuration. (Test: UI creates a new config and it appears in the config list.)
- FR2: Add/Remove Module — Admin can add modules from the module list and remove them from the canvas. (Test: module count updates and persisted state matches canvas.)
- FR3: Connect Terminals — Admin can create connections between compatible terminals; the UI enforces interface compatibility. (Test: connecting incompatible terminals is blocked; connecting compatible terminals establishes a persistent connection saved into config.)
- FR4: Edit Parameters — Admin can edit module parameters using typed controls (string, number, enum) with inline validation. (Test: validation rules triggered for out-of-range values.)
- FR5: Save/Load — Admin can save a config (RPC or simulated persist) and later load it unchanged. (Test: saved config JSON equals loaded config JSON modulo non-deterministic metadata.)
- FR6: Validation & Safety — All externally sourced JSON (backend or localStorage) must pass runtime validation before merging; reject unsafe keys. (Test: unit tests for `isEverestConfig` and JSON schema validation.)

Success Criteria (measurable)
- SC1: 95% of user flows in E2E suite run within 10s on CI (excluding network wait). Measured by E2E run time.
- SC2: Validation tests detect and reject at least 100% of crafted malformed payloads in unit tests (explicit test vectors).
- SC3: 100% of new UI components and logic added to the repo include unit tests and TypeScript types; CI enforces `vue-tsc` with no errors.

Key Entities (data model)
- Configuration: { name: string, modules: Record<moduleId, ModuleInstance>, connections: Connection[], metadata }
- ModuleInstance: { id: string, module: string, terminals: Terminal[], parameters: Record<string, unknown> }
- Terminal: { id: string, direction: 'in' | 'out', interface: string }
- Connection: { from: moduleId.terminalId, to: moduleId.terminalId }

Assumptions
- Backend RPC methods exist to persist/load configs; for offline development, simulator data in `src/modules/evbc/simulator-sample-data` is sufficient.
- `EverestConfig` type is the canonical shape; where ambiguous, runtime guards and AJV schemas will be created.

Dependencies
- Simulator sample data: `src/modules/evbc/simulator-sample-data`
- Validation library: `ajv` (already in `package.json`) for schema checks.

Acceptance Criteria
- All FRs have corresponding unit or E2E tests added.
- No linter (ESLint) or typecheck errors introduced.
- UI shows clear error messages for validation failures.

Open Questions [NEEDS CLARIFICATION]
- Q1: Should connections support multi-sink (one output to many inputs) or strictly one-to-one? (Default: allow one output to multiple inputs.)
- Q2: Do we need role-based permissions in this UI (multi-tenant or RBAC)? (Default: single-admin mode; defer RBAC.)

Notes
- Use central `EVConfigModel` primitives in `src/modules/evbc/config_model.ts` to serialize/deserialize configurations.
- Add AJV JSON Schemas under `public/schemas` or `src/modules/evbc` so Speckit and automation can extract machine-readable specs.
