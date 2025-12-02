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

**Goal**: Enable multi-selection via Shift+Click and Rectangle Drag to support group operations.

**Independent Test**: Shift-click multiple modules, drag one to move all. Drag rectangle on background to select multiple.

### Implementation for User Story 3

- [x] T004 [US3] Implement `select_instances` and `toggle_instance_selection` methods in `src/modules/evconf_konva/stage_context.ts`
- [x] T005 [US3] Update `ModuleView` in `src/modules/evconf_konva/views/module.ts` to handle Shift+Click (additive selection)
- [x] T006 [US3] Implement rectangle drag selection logic in `src/modules/evconf_konva/config_stage.ts` (handle background pointer events)
- [x] T007 [US3] Implement visual feedback for multi-selection in `ModuleView` (update stroke/highlight based on selection state)
- [x] T008 [US3] Update `ModuleView` drag handler to move ALL selected modules when one is dragged
- [x] T009 [US3] Update right bar logic to detect multi-selection and show a 'Multiple items selected' placeholder state

**Checkpoint**: Multi-selection and group dragging working.

## Phase 4: User Story 1 - Copy & Paste Modules (Priority: P1)

**Goal**: Enable duplicating modules with unique names and preserved connections.

**Independent Test**: Select modules -> Copy -> Paste. Verify new modules appear with " (1)" suffix and internal connections.

### Implementation for User Story 1

- [x] T010 [P] [US1] Implement `Smart Increment` name generation utility in `src/modules/evbc/utils.ts` (or `config_model.ts`)
- [x] T011 [US1] Implement `Copy` logic in `src/modules/evconf_konva/config_stage.ts`: serialize selected modules to `ClipboardSnapshot`
- [x] T012 [US1] Implement `Paste` logic in `src/modules/evconf_konva/config_stage.ts`: deserialize, generate names, map IDs, recreate connections, apply offset (+20px)
- [x] T013 [US1] Register keyboard shortcuts (Cmd/Ctrl+C, Cmd/Ctrl+V) in `src/modules/evconf_konva/config_stage.ts`
- [x] T014 [US1] Add visual confirmation (Toast) for Copy action using Vuetify `VSnackbar`

**Checkpoint**: Copy/Paste working for single and multiple modules.

## Phase 5: User Story 2 - Cut & Paste Modules (Priority: P2)

**Goal**: Enable moving modules via Cut/Paste.

**Independent Test**: Select -> Cut (disappears) -> Paste (reappears).

### Implementation for User Story 2

- [x] T015 [US2] Implement `Cut` logic in `src/modules/evconf_konva/config_stage.ts`: Copy + Delete selected instances
- [x] T016 [US2] Register keyboard shortcut (Cmd/Ctrl+X) in `src/modules/evconf_konva/config_stage.ts`

**Checkpoint**: Cut/Paste working.

## Phase 6: Polish & Cross-Cutting

- [x] T017 Verify performance with ~50 modules (ensure no lag during drag/paste)
- [x] T018 Ensure clipboard clears on page reload (implicit by in-memory storage, but verify)

## Phase 7: Testing & Verification (Constitution Principle II)

- [x] T019 [Test] Write Unit Tests for Smart Increment logic in `src/modules/evbc/utils.test.ts` (create if needed)
- [x] T020 [Test] Write Cypress E2E test for Copy/Paste flow in `cypress/e2e/copy-paste.cy.ts`
