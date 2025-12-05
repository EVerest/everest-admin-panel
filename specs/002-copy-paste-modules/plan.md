# Implementation Plan: Copy/Paste Modules & Connection Overhaul

**Branch**: `002-copy-paste-modules` | **Date**: 2025-12-04 | **Spec**: `specs/002-copy-paste-modules/spec.md`
**Input**: Feature specification from `specs/002-copy-paste-modules/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement Copy, Cut, and Paste functionality for the admin panel canvas, along with a graphical overhaul of connection creation. This involves:
1.  **Selection, Navigation & Zoom**: Enhancing canvas interactions (Shift+Click, Left-Click Rectangle Drag for selection, Right-Click Drag for panning, UI Buttons for Zoom).
2.  **Clipboard**: In-memory storage of serialized module snapshots and internal connections.
3.  **Paste Logic**: Re-instantiating modules with unique names (Smart Increment), preserving properties, and re-linking internal connections while dropping external ones.
4.  **Delete Logic**: Deleting selected modules with confirmation dialog, ensuring input fields are protected.
5.  **UX**: Keyboard shortcuts (Cmd/Ctrl+C/X/V/Delete) and visual feedback (Toast, Dialog).
6.  **Auto-Zoom**: Automatically adjusting zoom and pan to fit all modules when a config is loaded.
7.  **Connection Overhaul**: Drag-to-connect workflow with visual feedback (ghosting incompatible modules, enlarging targets) and new icons (plug/socket).

## Technical Context

**Language/Version**: Vue 3 + TypeScript
**Primary Dependencies**: Konva (Canvas), Pinia (State), Vuetify (UI), just-clone (Deep copy)
**Storage**: In-memory clipboard (non-persistent)
**Testing**: Vitest (Unit), Cypress (E2E)
**Target Platform**: Web (Modern Browsers)
**Project Type**: Web application
**Performance Goals**: Copy/Paste < 1s for ~50 modules; 60fps canvas interactions
**Constraints**: No Undo/Redo support; Clipboard clears on reload
**Scale/Scope**: ~50 modules typical workload

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Code Quality**: TypeScript strictness enforced.
- **Testing**: Unit tests for ID generation and connection mapping; E2E for canvas interactions. Ensure modules are spaced out in E2E tests to avoid visual overlap and improve screenshot interpretability.
- **UX Consistency**: Standard keyboard shortcuts; Toast notifications for feedback.
- **Performance**: In-memory operations are fast; Konva handles rendering efficiently.
- **Safety**: Input validation via `EVConfigModel` on paste.

## Project Structure

### Documentation (this feature)

```text
specs/002-copy-paste-modules/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── modules/
│   ├── evbc/
│   │   ├── config_model.ts       # Logic for instance creation/validation
│   │   └── index.ts              # Types
│   └── evconf_konva/
│       ├── config_stage.ts       # Canvas controller, keyboard events, clipboard logic
│       ├── stage_context.ts      # Selection state management
│       ├── connection_manager.ts # Connection rendering
│       └── views/                # Konva views (ModuleView, TerminalShape)
```

**Structure Decision**: Single project (Vue frontend). Logic resides in `evconf_konva` (controller) and `evbc` (model).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
