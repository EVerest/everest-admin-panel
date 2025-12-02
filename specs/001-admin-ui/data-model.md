# Data Model — Admin UI (001-admin-ui)

This document defines the core entities and their fields used by the Admin UI feature.

Entity: Configuration
- id: string (UUID)
- name: string
- modules: object — map of `moduleInstanceId` -> ModuleInstance
- connections: array of Connection
- metadata: object (free-form)

Entity: ModuleInstance
- id: string (UUID)
- module: string (module definition name)
- terminals: array of Terminal
- parameters: object — map string -> value (typed per module schema)

Entity: Terminal
- id: string
- direction: string — enum ['in','out']
- interface: string — interface identifier

Entity: Connection
- id: string (UUID)
- from: { moduleId: string, terminalId: string }
- to: { moduleId: string, terminalId: string }

Validation notes
- All external JSON (backend, localStorage) MUST be validated against JSON Schemas before use.
- Reject object keys that are non-own properties (e.g., `__proto__`).
- Module parameter schemas are module-specific; store them as part of module definitions and validate parameter edits at the UI layer.
