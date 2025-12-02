# Research: Copy/Paste Modules

**Feature**: Copy/Paste Modules
**Status**: Complete

## Unknowns & Resolutions

### 1. Cloning Strategy
*   **Question**: How to deep-clone module instances for the clipboard?
*   **Findings**: `ModuleInstanceModel` contains `ConfigSetWithSchema` which is a plain object structure. The project uses `just-clone`.
*   **Decision**: Use `just-clone` to snapshot the data. To ensure clean re-insertion, we will convert the `ModuleInstanceModel` to its serialized form (`EverestModuleConfig`) using the existing `config_set_with_schema_to_config_set` logic (or similar) before storing in the clipboard. This ensures that when we paste, we pass "clean" data to `_add_module_instance`, triggering standard validation and schema application.

### 2. ID Generation & Naming
*   **Question**: How to generate unique names (e.g., "Node (1)")?
*   **Findings**: `EVConfigModel` has `get_next_available_name` but it might not support the specific "Smart Increment" strategy requested (nested vs flat).
*   **Decision**: Implement a custom name generation utility that parses the existing name, detects the " (n)" suffix, increments it, and checks for collisions against the current model.

### 3. Connection Handling
*   **Question**: How to preserve internal connections but drop external ones?
*   **Findings**: Connections are stored by ID in `EVConfigModel`.
*   **Decision**: The clipboard snapshot will explicitly store a list of connections where *both* endpoints are in the selected set. On paste, we map the old IDs to the new IDs and re-create these connections.

## Technology Choices

*   **Clipboard Storage**: In-memory array (singleton or component state).
*   **Keyboard Handling**: `keydown` listener on the `window` or the canvas container, filtering for `Cmd/Ctrl+C/V/X`.

## Alternatives Considered

*   **Browser Clipboard API**: Storing JSON in the system clipboard.
    *   *Pros*: Allows copy/paste between tabs/windows.
    *   *Cons*: Requires permission prompts; complexity with serialization formats.
    *   *Decision*: Rejected for now (Out of Scope per spec assumptions), stick to in-memory.

