---
description: "Task list for Copy/Paste Modules feature"
---

# Tasks: Copy/Paste Modules

**Input**: Design documents from `/specs/002-copy-paste-modules/`
**Prerequisites**: plan.md, spec.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Verify `just-clone` dependency is available (used in `config_model.ts`)

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T002 Define Clipboard types (`ClipboardSnapshot`, `CopiedModule`, `CopiedConnection`) in `src/modules/evconf_konva/types.ts` (or new file)
- [x] T003 Update `ConfigStageContext` in `src/modules/evconf_konva/stage_context.ts` to support multi-selection state (`Set<ModuleInstanceID>`)

**Checkpoint**: Foundation ready - user story implementation can now begin

## Phase 3: User Story 3 - Canvas Selection & Dragging (Priority: P1)

**Goal**: Enable multi-selection via Shift+Click and Rectangle Drag to support group operations, and restore panning via Right-Click.

**Independent Test**: Shift-click multiple modules, drag one to move all. Drag rectangle on background (Left-Click) to select multiple. Drag background (Right-Click) to pan. Click Zoom In/Out buttons to scale canvas.

### Implementation for User Story 3

- [x] T004 [US3] Implement `select_instances` and `toggle_instance_selection` methods in `src/modules/evconf_konva/stage_context.ts`
- [x] T005 [US3] Update `ModuleView` in `src/modules/evconf_konva/views/module.ts` to handle Shift+Click (additive selection)
- [x] T006 [US3] Implement rectangle drag selection logic (Left-Click) in `src/modules/evconf_konva/config_stage.ts`
- [x] T007 [US3] Implement manual panning logic (Right-Click) in `src/modules/evconf_konva/config_stage.ts`
- [x] T008 [US3] Implement Zoom In/Out logic in `src/modules/evconf_konva/config_stage.ts` (methods `zoomIn`, `zoomOut`)
- [x] T009 [US3] Add Zoom In/Out buttons to `src/components/EvConfigCanvas.vue` and bind to `ConfigStage` methods
- [x] T010 [US3] Implement visual feedback for multi-selection in `ModuleView` (update stroke/highlight based on selection state)
- [x] T011 [US3] Update `ModuleView` drag handler to move ALL selected modules when one is dragged
- [x] T012 [US3] Update right bar logic to detect multi-selection and show a 'Multiple items selected' placeholder state
- [x] T039 [US3] Implement auto-zoom logic on config load in `src/modules/evconf_konva/config_stage.ts` to fit all modules

**Checkpoint**: Multi-selection, group dragging, panning, and zooming working.

## Phase 4: User Story 1 - Copy & Paste Modules (Priority: P1)

**Goal**: Enable duplicating modules with unique names and preserved connections.

**Independent Test**: Select modules -> Copy -> Paste. Verify new modules appear with " (1)" suffix and internal connections.

### Implementation for User Story 1

- [x] T011 [P] [US1] Implement `Smart Increment` name generation utility in `src/modules/evbc/utils.ts` (or `config_model.ts`)
- [x] T012 [US1] Implement `Copy` logic in `src/modules/evconf_konva/config_stage.ts`: serialize selected modules to `ClipboardSnapshot`
- [x] T013 [US1] Implement `Paste` logic in `src/modules/evconf_konva/config_stage.ts`: deserialize, generate names, map IDs, recreate connections, apply offset (+20px)
- [x] T014 [US1] Register keyboard shortcuts (Cmd/Ctrl+C, Cmd/Ctrl+V) in `src/modules/evconf_konva/config_stage.ts`
- [x] T015 [US1] Add visual confirmation (Toast) for Copy action using Vuetify `VSnackbar`

**Checkpoint**: Copy/Paste working for single and multiple modules.

## Phase 5: User Story 2 - Cut & Paste Modules (Priority: P2)

**Goal**: Enable moving modules via Cut/Paste.

**Independent Test**: Select -> Cut (disappears) -> Paste (reappears).

### Implementation for User Story 2

- [x] T016 [US2] Implement `Cut` logic in `src/modules/evconf_konva/config_stage.ts`: Copy + Delete selected instances
- [x] T017 [US2] Register keyboard shortcut (Cmd/Ctrl+X) in `src/modules/evconf_konva/config_stage.ts`

**Checkpoint**: Cut/Paste working.

## Phase 6: User Story 4 - Delete Modules (Priority: P2)

**Goal**: Enable deleting modules with confirmation.

**Independent Test**: Select -> Delete -> Confirm (disappears). Select -> Delete -> Cancel (remains). Select -> Focus Input -> Type -> Delete (input char deleted, module remains).

### Implementation for User Story 4

- [x] T034 [US4] Implement `Delete` logic in `src/modules/evconf_konva/config_stage.ts`: Trigger confirmation dialog
- [x] T035 [US4] Create Confirmation Dialog component (or use existing `EvDialog`) and integrate with `ConfigStage`
- [x] T036 [US4] Register keyboard shortcut (Delete/Backspace) in `src/modules/evconf_konva/config_stage.ts`
- [x] T037 [US4] Implement input focus check to prevent deletion when editing text

**Checkpoint**: Delete with confirmation working.

## Phase 7: Polish & Cross-Cutting

- [x] T018 Verify performance with ~50 modules (ensure no lag during drag/paste)
- [x] T019 Ensure clipboard clears on page reload (implicit by in-memory storage, but verify)
- [x] T049 Fix flaky E2E tests (connections, canvas interaction) using programmatic setup via window.evbc
- [x] T050 Fix YAML preview `x-module-layout` synchronization with visual state (terminal positions)

## Phase 8: User Story 5 - Connection Creation Overhaul (Priority: P1)

**Goal**: Implement drag-to-connect workflow with visual feedback.

**Independent Test**: Drag outgoing interface -> Incompatible modules ghost -> Drop on compatible module -> Connection created.

### Implementation for User Story 5

- [x] T040 [US5] Add `power-plug` and `power-socket` SVG paths to `src/modules/evconf_konva/views/constants.ts`
- [x] T041 [US5] Update `TerminalShape` in `src/modules/evconf_konva/views/shapes/terminal.ts` to render icons based on type
- [x] T042 [US5] Update `ModuleView` in `src/modules/evconf_konva/views/module.ts` to emit `TERMINAL_DRAG_START/MOVE/END` events to `ConfigStage` (unless Alt is pressed)
- [x] T043 [US5] Implement `_handle_connection_drag_start` in `ConfigStage`: Initialize drag state, create temporary line, calculate compatibility
- [x] T044 [US5] Implement `set_ghost` method in `ModuleView` and call it from `ConfigStage` for incompatible modules
- [x] T045 [US5] Implement `set_highlight_terminals` method in `ModuleView` and call it from `ConfigStage` for compatible targets
- [x] T046 [US5] Implement `_handle_connection_drag_move` in `ConfigStage`: Update drag line position, update highlighting
- [x] T047 [US5] Implement `_handle_connection_drag_end` in `ConfigStage`: Check drop target, create connection via `evbc`, reset state
- [x] T048 [US5] Verify legacy Alt+Drag behavior for terminal rearrangement

## Phase 8: Testing & Verification (Constitution Principle II)

- [x] T020 [Test] Write Unit Tests for Smart Increment logic in `src/modules/evbc/utils.test.ts` (create if needed)
- [x] T021 [Test] Write Cypress E2E test for Copy/Paste flow in `cypress/e2e/copy-paste.cy.ts`
- [x] T022 [Test] Verify FR-001 (Single selection) & FR-002 (Additive selection) in E2E tests
- [x] T023 [Test] Verify FR-003 (Rectangle selection) & FR-005 (Group dragging) in E2E tests
- [x] T024 [Test] Verify FR-004 (Right-click panning) in E2E tests
- [x] T025 [Test] Verify FR-006 (Copy), FR-007 (Cut), FR-008 (Paste) basic flow in E2E tests
- [x] T026 [Test] Verify FR-009 (Smart Increment naming) in E2E tests
- [x] T027 [Test] Verify FR-010 (Offset positioning) & FR-011 (Property retention) in E2E tests
- [x] T028 [Test] Verify FR-012 (Connection handling) in E2E tests
- [x] T029 [Test] Verify FR-013 (Right bar summary) in E2E tests
- [x] T030 [Test] Verify FR-014 (Toast confirmation) in E2E tests
- [x] T031 [Test] Verify FR-015 (Zoom buttons) & FR-016 (No scroll zoom) in E2E tests
- [x] T032 [Test] Verify connected module dragging stability (EvseSecurity -> EvseV2G -> EvseManager) in `cypress/e2e/connected-drag.cy.ts`
- [x] T033 [Test] Verify multi-select dragging moves all selected modules in `cypress/e2e/multi-select-drag.cy.ts`
- [x] T038 [Test] Verify FR-017 (Delete key), FR-018 (Confirmation), FR-019 (Input protection) in E2E tests
