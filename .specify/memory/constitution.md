<!--
Sync Impact Report
- Version change: none detected -> 1.0.0
- Modified principles: added Principles I-V focused on Code Quality, Testing Standards, UX Consistency, Performance
- Added sections: Security & Data Handling; Development Workflow & Quality Gates
- Removed sections: none
- Templates requiring updates: .specify/templates/plan-template.md (⚠ pending), .specify/templates/spec-template.md (⚠ pending), .specify/templates/tasks-template.md (⚠ pending), .specify/templates/commands/ (⚠ pending) — these template files were not found in the repository and should be reviewed if you rely on them
- Files/areas to review for consistency: `src/modules/evbc/*` (runtime validation notes), ESLint config (security plugin references), `docs/` — ensure generator outputs desired artifacts
- Follow-up TODOs:
	- Add or verify AJV JSON Schemas for configuration models under `public/schemas` or `src/modules/evbc` so Speckit can extract them.
	- Reconcile ESLint plugin `security/detect-object-injection` references or install `eslint-plugin-security`.
	- Review `.specify/templates` directory (absent) and add or align templates with the new constitution where required.
-->

# Everest Admin Panel Constitution

## Core Principles

### Principle I — Code Quality (NON-NEGOTIABLE)

All production code MUST be clearly typed, maintainable, and reviewed. Use TypeScript strictness and linter rules as the baseline. Avoid `any` unless accompanied by a code comment explaining why and an associated runtime guard.

Rules:

- Enforce `vue-tsc`/TypeScript checks in CI.
- ESLint with `@typescript-eslint` rules MUST run in CI; rule exceptions require explicit justification in PR.
- New files MUST include basic documentation/comments explaining non-obvious algorithms or domain rules.

Rationale: High code quality reduces regressions and eases future automation and AI-assisted maintenance.

### Principle II — Testing Standards

Testing is mandatory: unit tests for all library logic and component logic (Vitest), and E2E tests for critical user flows (Cypress). Tests MUST be deterministic and fast where possible.

Rules:

- Developers MUST add unit tests for new features and bug fixes.
- Contract changes (public interfaces or RPC schemas) MUST include tests that demonstrate migration or backward compatibility behavior.
- E2E tests should cover connection lifecycle, config create/save/load flows, and module selection flows.

Rationale: Tests are the single best protection against regression, and they enable confident refactors and automation.

### Principle III — User Experience Consistency

The UI MUST present consistent interactions, labeling, and error handling across screens. Use centralized i18n messages and shared UI components for common behaviors (toasts, dialogs, confirmation flows).

Rules:

- All user-visible strings MUST go through `vue-i18n` and be present in `locales/`.
- Shared components (buttons, dialogs, notifications) MUST be used instead of ad-hoc implementations.
- Long-running operations MUST show progress and support cancellation where appropriate.

Rationale: Consistency reduces training and operational mistakes for administrators managing critical config.

### Principle IV — Performance Requirements

The application MUST remain responsive under typical admin workloads. Keep initial load time and runtime interactions performant.

Rules:

- Aim for reasonable bundle sizes (use code-splitting for infrequently used pages).
- UI interactions (drag, drop, canvas redraw) MUST remain under 16ms where feasible; expensive operations should be throttled/debounced or moved off the main thread.
- Use lazy-loading for large modules and images.

Rationale: Admins must quickly inspect and modify configuration; poor performance leads to errors and reduced productivity.

### Principle V — Runtime Safety & Observability

External inputs (backend RPCs, localStorage, uploaded files) MUST be treated as untrusted. Validate at the perimeter and instrument operations for debugging.

Rules:

- Use runtime type guards or AJV schema validation before merging external JSON into app state.
- Prevent prototype pollution by iterating own properties and rejecting keys like `__proto__`.
- Log important lifecycle events and errors with structured messages; surface high-level connection states in the UI.

Rationale: Safety and observability reduce incident time-to-resolution and prevent configuration corruption.

## Security & Data Handling

Configuration and module metadata are operationally important. The project MUST:

- Avoid persisting secrets in client-side storage; if required, mark them and handle carefully.
- Validate JSON payloads before use and reject malformed data.
- Sanitize any user-editable content and prevent injection or prototype pollution during merges.

## Development Workflow & Quality Gates

- Branching: feature branches named `feat/`, `fix/`, or `chore/`.
- PRs require automated CI passing (lint, typecheck, unit tests) and at least one reviewer.
- Merges to `main`/`master` and `speckit` require green CI; changes affecting runtime validation or security require two approvers.
- Release notes and migration guidance MUST accompany MINOR/MAJOR changes.

## Governance

Amendments and versioning:

- Propose amendments via a pull request against the `speckit` branch with rationale and migration steps.
- For clarity fixes or non-functional wording changes: a maintainer MAY merge with a PATCH version bump.
- For additions to principles or changes that affect workflows or security posture: require two maintainer approvals and a MINOR or MAJOR bump depending on impact.

Versioning policy:

- MAJOR: Backwards-incompatible or governance/principle removals.
- MINOR: New principle or material expansion of required behavior.
- PATCH: Typo fixes, clarifications, or non-semantic adjustments.

Compliance review expectations:

- Each PR should include a short checklist indicating which principles the change touches (Code Quality, Tests, UX, Performance, Security).
- The reviewer should confirm CI passes and that any necessary tests or docs were added.

**Version**: 1.0.0 | **Ratified**: 2025-12-01 | **Last Amended**: 2025-12-01
