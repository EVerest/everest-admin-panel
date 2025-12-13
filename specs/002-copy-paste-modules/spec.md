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

### User Story 3 - Canvas Selection, Navigation & Zoom (Priority: P1)

As a user, I want to select multiple modules using click, shift-click, or drag-rectangle, move them together, and navigate the canvas using pan and zoom.

**Why this priority**: Prerequisite for effective copy/paste of groups and basic navigation.

**Independent Test**: Shift-click two modules, drag one. Verify both move. Left-click drag on background. Verify selection rectangle appears. Right-click drag on background. Verify canvas pans. Click Zoom In/Out buttons. Verify canvas scales.

**Acceptance Scenarios**:

1. **Given** no selection, **When** user clicks a module, **Then** only that module is selected.
2. **Given** a selection, **When** user Shift-clicks an unselected module, **Then** it is added to selection.
3. **Given** any state, **When** user drags with **Left Mouse Button** on background, **Then** a selection rectangle appears; on release, enclosed modules are selected.
4. **Given** any state, **When** user drags with **Right Mouse Button** on background, **Then** the canvas pans (moves).
5. **Given** multiple modules selected, **When** user drags one, **Then** all selected modules move by the same delta.
6. **Given** multiple modules, **When** user clicks multiple modules, **Then** the properties of all modules are shown in the right bar (grouped per module).
7. **Given** any state, **When** user clicks the **Zoom In (+)** button, **Then** the canvas scales up (zooms in).
8. **Given** any state, **When** user clicks the **Zoom Out (-)** button, **Then** the canvas scales down (zooms out).

---

### User Story 4 - Delete Modules (Priority: P2)

As a user, I want to delete selected modules using the Delete key, with a confirmation step to prevent accidental data loss.

**Why this priority**: Essential editing function.

**Independent Test**: Select module, press Delete. Verify confirmation dialog appears. Confirm. Verify module is removed. Select module, focus input field, press Delete. Verify module is NOT removed.

**Acceptance Scenarios**:

1. **Given** one or more selected modules, **When** user presses **Delete** key, **Then** a confirmation dialog appears asking to confirm deletion.
2. **Given** the confirmation dialog is open, **When** user confirms, **Then** the selected modules are removed from the canvas.
3. **Given** the confirmation dialog is open, **When** user cancels, **Then** the modules remain on the canvas.
4. **Given** a selected module and focus is inside a text input field, **When** user presses **Delete** key, **Then** the character in the input is deleted, but the module is NOT deleted and NO confirmation dialog appears.

## Requirements *(mandatory)*

### Functional Requirements

* **FR-001**: System MUST support single selection via click (clears previous).
* **FR-002**: System MUST support additive selection via Shift-click (toggles or adds).
* **FR-003**: System MUST support rectangle selection via **Left Mouse Button** drag on background (clears previous, selects enclosed).
* **FR-004**: System MUST support canvas panning via **Right Mouse Button** drag on background.
* **FR-005**: System MUST support moving all selected modules in unison when one is dragged.
* **FR-006**: System MUST support Copy (Cmd/Ctrl+C) to store selected modules and their internal connections in memory; this buffer MUST be retained for multiple pastes until overwritten.
* **FR-007**: System MUST support Cut (Cmd/Ctrl+X) to store selection in memory and remove originals from canvas.
* **FR-008**: System MUST support Paste (Cmd/Ctrl+V) to create new instances from clipboard.
* **FR-009**: Pasted modules MUST have unique names generated by Smart Increment: if name ends in " (n)", increment n; otherwise append " (1)".
* **FR-010**: Pasted modules MUST be positioned at a fixed offset (exactly +2px X, +2px Y) from the original source position.
* **FR-011**: Pasted modules MUST retain all properties (`module_config`, `implementation_config`) of the original.
* **FR-012**: Pasted modules MUST retain connections *between* the copied modules, but lose connections to modules *outside* the selection.
* **FR-013**: When multiple modules are selected, the right bar MUST display a summary state (e.g. 'N items selected') and disable single-module property editing.
* **FR-014**: System MUST display a brief visual confirmation (e.g., toast notification) when Copy or Cut is performed.
* **FR-015**: System MUST provide UI buttons for **Zoom In (+)** and **Zoom Out (-)**.

### User Story 5 - Connection Creation Overhaul (Priority: P1)

As a user, I want to create connections by dragging from one module's interface to another, with clear visual feedback on compatibility, so that I can easily link modules without confusion.

**Why this priority**: Improves the core usability of the configuration editor.

**Independent Test**: Drag from an outgoing interface. Verify incompatible modules fade out. Verify compatible terminals enlarge. Drop on a compatible module. Verify connection is created. Drop on background. Verify no connection.

**Acceptance Scenarios**:

1. **Given** a module with outgoing interfaces, **When** user drags an outgoing interface icon, **Then** a connection line follows the mouse, and all modules NOT accepting this interface type fade out (ghosted).
2. **Given** a connection drag in progress, **When** the mouse hovers near a compatible module, **Then** the compatible incoming interface icons on that module enlarge (3x size).
3. **Given** a connection drag in progress, **When** user releases the mouse over a compatible module (body or terminal), **Then** a connection is created to the closest compatible terminal.
4. **Given** a connection drag in progress, **When** user releases the mouse over an incompatible module or background, **Then** the action is cancelled.
5. **Given** a module, **When** user holds **Alt** and drags a terminal, **Then** the terminal position on the module is rearranged (legacy behavior).
6. **Given** a module, **When** user drags a terminal WITHOUT Alt, **Then** a new connection drag is initiated.

## Requirements *(mandatory)*

### Functional Requirements

* **FR-001**: System MUST support single selection via click (clears previous).
* **FR-002**: System MUST support additive selection via Shift-click (toggles or adds).
* **FR-003**: System MUST support rectangle selection via **Left Mouse Button** drag on background (clears previous, selects enclosed).
* **FR-004**: System MUST support canvas panning via **Right Mouse Button** drag on background.
* **FR-005**: System MUST support moving all selected modules in unison when one is dragged.
* **FR-006**: System MUST support Copy (Cmd/Ctrl+C) to store selected modules and their internal connections in memory; this buffer MUST be retained for multiple pastes until overwritten.
* **FR-007**: System MUST support Cut (Cmd/Ctrl+X) to store selection in memory and remove originals from canvas.
* **FR-008**: System MUST support Paste (Cmd/Ctrl+V) to create new instances from clipboard.
* **FR-009**: Pasted modules MUST have unique names generated by Smart Increment: if name ends in " (n)", increment n; otherwise append " (1)".
* **FR-010**: Pasted modules MUST be positioned at a fixed offset (exactly +2px X, +2px Y) from the original source position.
* **FR-011**: Pasted modules MUST retain all properties (`module_config`, `implementation_config`) of the original.
* **FR-012**: Pasted modules MUST retain connections *between* the copied modules, but lose connections to modules *outside* the selection.
* **FR-013**: When multiple modules are selected, the right bar MUST display a summary state (e.g. 'N items selected') and disable single-module property editing.
* **FR-014**: System MUST display a brief visual confirmation (e.g., toast notification) when Copy or Cut is performed.
* **FR-015**: System MUST provide UI buttons for **Zoom In (+)** and **Zoom Out (-)**.
* **FR-016**: System MUST NOT support zoom via mouse wheel (mouse wheel is reserved for scrolling/panning or ignored to prevent accidental zooms).
* **FR-017**: System MUST support deletion of selected modules via the **Delete** key.
* **FR-018**: System MUST display a confirmation dialog (e.g., "Are you sure you want to delete X modules?") before performing deletion.
* **FR-019**: System MUST NOT trigger module deletion if the user is currently editing a text input field (e.g., module name, search box).
* **FR-020**: System MUST automatically adjust the zoom level and pan position after loading a configuration so that all modules fit within the visible canvas area with a margin of at least 50px.

### Connection Requirements

* **FR-021**: Outgoing interfaces MUST be represented by a `power-plug` icon.
* **FR-022**: Incoming interfaces MUST be represented by a `power-socket` icon.
* **FR-023**: Dragging an interface icon (without modifiers) MUST initiate connection creation mode.
* **FR-024**: Dragging an interface icon with the **Alt** key pressed MUST initiate terminal rearrangement mode (changing alignment/position on the module).
* **FR-025**: During connection creation drag, all modules that do NOT offer a compatible interface MUST be visually ghosted (reduced opacity).
* **FR-026**: During connection creation drag, compatible terminal icons on target modules MUST be visually enlarged (approx. 3x) to facilitate targeting.
* **FR-027**: During connection creation drag, a visual line MUST connect the source terminal to the current mouse cursor position.
* **FR-028**: Releasing the drag over a compatible module body MUST create a connection to the compatible terminal closest to the mouse cursor.
* **FR-029**: Releasing the drag over a specific compatible terminal icon MUST create a connection to that terminal.
* **FR-030**: Releasing the drag over an incompatible module or the background MUST cancel the operation.
* **FR-031**: The system MUST prevent a module from being connected to itself.

### Testing Requirements

* **TR-001**: Tests MUST account for text translation strings. When verifying UI text, tests MUST use the exact strings defined in `en.json` (or the default locale) rather than hardcoded approximations.

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
