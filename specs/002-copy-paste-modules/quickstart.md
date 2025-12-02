# Quickstart: Copy/Paste Modules

## Overview

This feature adds Copy, Cut, and Paste functionality to the admin panel canvas.

## Testing the Feature

### Prerequisites
1.  Run the dev server: `pnpm dev`.
2.  Open the app and navigate to the Configuration editor.
3.  Ensure you have at least one module on the canvas.

### Manual Test Steps

1.  **Selection**:
    *   Click a module -> Selected.
    *   Shift+Click another -> Both selected.
    *   Click background -> Deselected.
    *   Drag on background -> Rectangle selection selects enclosed modules.

2.  **Copy/Paste**:
    *   Select a module (e.g., named "Test").
    *   Press `Cmd+C` (or `Ctrl+C`).
    *   Press `Cmd+V` (or `Ctrl+V`).
    *   **Verify**: A new module "Test (1)" appears slightly offset.
    *   **Verify**: "Test (1)" has the same configuration.

3.  **Cut/Paste**:
    *   Select "Test (1)".
    *   Press `Cmd+X`.
    *   **Verify**: "Test (1)" disappears.
    *   Press `Cmd+V`.
    *   **Verify**: "Test (1)" reappears (or "Test (2)" if name collision logic applies to new ID generation, but logically it should try to reuse if possible or just generate new). *Note: Spec says new instance, so likely "Test (2)" if "Test (1)" is considered "taken" or if we just increment.*

4.  **Connections**:
    *   Connect "A" to "B".
    *   Connect "B" to "C".
    *   Select both "A" and "B".
    *   Copy and Paste.
    *   **Verify**: New modules "A (1)" and "B (1)" appear and are connected to *each other*.
    *   **Verify**: They are NOT connected to "A", "B", or "C".

## Development

### Key Files
*   `src/modules/evconf_konva/config_stage.ts`: Handles keyboard events and clipboard logic.
*   `src/modules/evbc/config_model.ts`: Handles instance creation and validation.

### Debugging
*   Check the browser console for "Clipboard" logs (if enabled).
*   Inspect `EVConfigModel` state in Vue DevTools.

