# Feature Specification: Copy/Paste Modules

**Feature Branch**: `002-copy-paste-modules`
**Created**: 2025-12-02
**Status**: Draft
**Input**: User description: "Add the possibility to copy/paste components in the existing web application. Add new interactions to the canvas, e.g. the ability to select or deselect components by clicking (selects one component, deselects everything else), shift-clicking (adds a component to the existing collection) or drag-selecting (deselects everything and starts adding components within the visual drag rectangle). Add the possibility to copy, cut, or paste components using the platform's standard key combination (e.g. command-C on Mac, control-C on Windows for copy). Newly copied components should retain links between the originally selected nodes, but lose all links to non-selected components. Copied components should retain the stored values for their properties. The title of copied components should resemble the title of the original, but with a count appended to keep the names unique and discernable. For example, if the original was named "EVSC", the first pasted copy should be named "EVSC (1)" and the second pasted copy should be named "EVSC (2)". Pasting should not result in duplicate component names, so if "EVSC (1)" was copied and "EVSC (2)" already exists, a newly pasted copy should be named "EVSC (3)". Components can already be dragged and repositioned on the canvas. If multiple components are selected, they all can be dragged and repositioned in unison."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Copy & Paste Modules (Priority: P1)

As a user, I want to copy selected modules and paste them to create duplicates with unique names, preserving their internal configuration and connections.

**Why this priority**: Core feature request to enable rapid configuration building.

**Independent Test**: Select a module "A", Copy, Paste. Verify "A (1)" appears. Verify "A (1)" has same properties as "A".

**Acceptance Scenarios**:

1. **Given** an unselected module "Node", **When** user clicks the module, **Then** the module highlights.
2. **Given** a selected module "Node", **When** user copies and pastes, **Then** a new module "Node (1)" is created.
3. **Given** a selected module "Node (1)", **When** user copies and pastes, **Then** a new module is created with name "Node (2)" (Smart Increment strategy)
4. **Given** selected modules "Node A" and "Node B", **When** user copies and pastes, **Then** new modules "Node A (1)" and "Node B (1)" are created. If "Node A" and "Node B" were connected, "Node A (1)" and "Node B (1)" are connected similarly. The new nodes are not connected to any pre-existing nodes.
5. **Given** a selected module "Node A" and not selected module "Node B", **When** user selects module "Node B", **Then** module "Node A" is deselected.
6. **Given** multiple selected modules with connections between them, **When** copied and pasted, **Then** the new modules are connected to each other, but not to the originals or other modules.
7. **Given** a clipboard with modules, **When** user pastes, **Then** the new modules appear at a slight offset (e.g. +20px) from the original position.

---

### User Story 2 - Cut & Paste Modules (Priority: P2)

As a user, I want to cut modules to move them to a new location or just remove them to the clipboard.

**Why this priority**: Standard editing expectation.

**Independent Test**: Select module, Cut. Verify module is removed. Paste. Verify module appears.

**Acceptance Scenarios**:

1. **Given** a selected module, **When** user Cuts, **Then** the module is removed from the canvas and added to clipboard.
2. **Given** a cut module in clipboard, **When** user Pastes, **Then** the module appears as a new instance (with new ID but same name/config).

---

### User Story 3 - Canvas Selection & Dragging (Priority: P1)

As a user, I want to select multiple modules using click, shift-click, or drag-rectangle, and move them together.

**Why this priority**: Prerequisite for effective copy/paste of groups.

**Independent Test**: Shift-click two modules, drag one. Verify both move. Click background, drag rectangle. Verify enclosed modules are selected.

**Acceptance Scenarios**:

1. **Given** no selection, **When** user clicks a module, **Then** only that module is selected.
2. **Given** a selection, **When** user Shift-clicks an unselected module, **Then** it is added to selection.
3. **Given** any state, **When** user drags on background, **Then** a selection rectangle appears; on release, enclosed modules are selected.
4. **Given** multiple modules selected, **When** user drags one, **Then** all selected modules move by the same delta.
5. **Given** multiple modules, **When** user clicks multiple modules, **Then** the properties of all modules are shown in the right bar (grouped per module).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST support single selection via click (clears previous).
- **FR-002**: System MUST support additive selection via Shift-click (toggles or adds).
- **FR-003**: System MUST support rectangle selection via drag on background (clears previous, selects enclosed).
- **FR-004**: System MUST support moving all selected modules in unison when one is dragged.
- **FR-005**: System MUST support Copy (Cmd/Ctrl+C) to store selected modules and their internal connections in memory; this buffer MUST be retained for multiple pastes until overwritten.
- **FR-006**: System MUST support Cut (Cmd/Ctrl+X) to store selection in memory and remove originals from canvas.
- **FR-007**: System MUST support Paste (Cmd/Ctrl+V) to create new instances from clipboard.
- **FR-008**: Pasted modules MUST have unique names generated by Smart Increment: if name ends in " (n)", increment n; otherwise append " (1)".
- **FR-009**: Pasted modules MUST be positioned at a fixed offset (e.g. +20px X, +20px Y) from the original source position.
- **FR-010**: Pasted modules MUST retain all properties (`module_config`, `implementation_config`) of the original.
- **FR-011**: Pasted modules MUST retain connections *between* the copied modules, but lose connections to modules *outside* the selection.
- **FR-012**: Selected modules MUST show their properties editable in the right bar (grouped per module)
- **FR-013**: System MUST display a brief visual confirmation (e.g., toast notification) when Copy or Cut is performed.

### Constraints & Out of Scope

- **Undo/Redo**: A general Undo/Redo system is NOT included in this feature. Operations are immediate.
- **Clipboard Persistence**: Clipboard is in-memory only and clears on page reload.

### Key Entities

- **Clipboard**: In-memory storage for a list of module snapshots and their internal connections.
- **ModuleSnapshot**: A deep copy of a module's configuration and view state.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Copy/Paste of 50 modules completes in under 1 second.
- **SC-002**: 100% of internal connections are preserved after paste.
- **SC-003**: 0% of external connections are preserved after paste.
- **SC-004**: Generated names are unique 100% of the time.

