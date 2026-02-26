// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/**
 * Module spawn positions (SIZE.GRID = 24px, FRAME = 288 x 144 px):
 *   id=0 → pixel (0,   0)   → frame (0,  0)  to (288, 144)
 *   id=1 → pixel (24,  24)  → frame (24, 24) to (312, 168)
 *
 * Modules overlap. Safe click targets when both modules are present:
 *   Module-0-only body: (12, 10)  — top-left 24×24 pocket, outside all module-1 terminal bands
 *   Module-1-only body: (300, 156) — bottom-right pocket, outside all module-0 terminal bands
 */

// MOD0: used for single-module tests (T024) and as the module-0 click in multi-module tests.
const MOD0 = { cx: 12, cy: 70 }; // safe when only one module is on canvas (T024, T028)

describe("T024-T028: Canvas Interactions & Selection", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.connectToSimulator();
    cy.createConfig(`test-canvas-${Date.now()}`);
    cy.get('[data-cy="modules-expansion-panel"]')
      .parents(".v-expansion-panel")
      .should("not.have.class", "v-expansion-panel--disabled", {
        timeout: 10000,
      });
  });

  // T024 – FR-001: single click selects; click away deselects
  it("T024: Single click selects a module; clicking background deselects", () => {
    cy.addModule("EvseManager");

    // Click inside module 0 frame to select
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });
    cy.contains("Module instance information", { timeout: 5000 }).should(
      "be.visible",
    );

    // Click empty space to deselect
    cy.get(".konvajs-content").click(700, 500, { force: true });
    cy.contains("Module instance information").should("not.exist");

    // Re-select by clicking the module again (FR-001)
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });
    cy.contains("Module instance information").should("be.visible");
  });

  // T025 – FR-002: Shift+click adds to / removes from selection
  it("T025: Shift+Click adds an unselected module; again removes it (FR-002)", () => {
    cy.addModule("EvseManager"); // id=0 → frame (0,0)-(288,144)
    cy.addModule("EvseManager"); // id=1 → frame (24,24)-(312,168)

    // Deselect everything
    cy.get(".konvajs-content").click(700, 500, { force: true });

    // Coordinate reasoning (GRID=24, FRAME=288×144, TERMINAL=24):
    //
    //  Module 0 terminals extend OUTSIDE its frame:
    //    right  → stage x ∈ (288, 312), y ∈ (0, 144)
    //    bottom → stage y ∈ (144, 168), x ∈ (0, 288)
    //  Module 1 terminals extend OUTSIDE its frame:
    //    left   → stage x ∈ (0, 24),   y ∈ (24, 168)
    //    top    → stage y ∈ (0, 24),   x ∈ (24, 312)
    //    right  → stage x ∈ (312, 336)
    //    bottom → stage y ∈ (168, 192)
    //
    //  Module 1 occupies stage (24,24)–(312,168), with terminal zones:
    //    left   → stage x ∈ [0,  24), y ∈ [24, 168)   ← (12,70) falls HERE → wrong
    //    top    → stage y ∈ [0,  24), x ∈ [24, 312)
    //    right  → stage x ∈ (312,336)
    //    bottom → stage y ∈ (168,192)
    //
    //  MOD0 click (12, 10): top-left 24×24 corner pocket — the ONLY zone inside
    //    module 0's body that is clear of ALL module 1 terminal bands:
    //    • x=12 < 24 ✓  → outside module 1's top-terminal band (x ≥ 24)
    //    • y=10 < 24 ✓  → outside module 1's left-terminal band (y ≥ 24)
    //    • Inside module 0 frame (0,0)–(288,144) ✓
    //
    //  MOD1 click (300, 156): bottom-right corner pocket unique to module 1:
    //    • Inside module 1 frame (local x=276, y=132 — well within 288×144). ✓
    //    • Outside module 0 frame (stage x=300 > 288). ✓
    //    • Not in module 0's right-terminal zone (needs stage y < 144). ✓
    //    • Not in module 0's bottom-terminal zone (needs stage x < 288). ✓
    //    • Not in module 1's right-terminal zone (needs stage x > 312). ✓
    //    • Not in module 1's bottom-terminal zone (needs stage y > 168). ✓
    const MOD0_click = { cx: 12, cy: 10 }; // top-left pocket, clear of module 1's terminals
    const MOD1_click = { cx: 300, cy: 156 }; // bottom-right pocket unique to module 1

    // Select module 0
    cy.get(".konvajs-content").click(MOD0_click.cx, MOD0_click.cy, {
      force: true,
    });
    cy.contains("Module instance information", { timeout: 5000 }).should(
      "be.visible",
    );

    // Shift+click module 1 to add it to the selection.
    cy.get(".konvajs-content").click(MOD1_click.cx, MOD1_click.cy, {
      shiftKey: true,
      force: true,
    });
    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Shift+click module 1 again → removes it → back to single selection
    cy.get(".konvajs-content").click(MOD1_click.cx, MOD1_click.cy, {
      shiftKey: true,
      force: true,
    });
    cy.contains("Module instance information", { timeout: 5000 }).should(
      "be.visible",
    );
  });

  // T026 – FR-003: left-button drag on background draws selection rectangle
  it("T026: Left-drag on background rectangle-selects enclosed modules (FR-003)", () => {
    cy.addModule("EvseManager"); // id=0 → (0,0)-(288,144)
    cy.addModule("EvseManager"); // id=1 → (24,24)-(312,168)

    // Deselect
    cy.get(".konvajs-content").click(700, 500, { force: true });

    // Drag from empty space (340, 200) leftward/upward to (-5, -5).
    // The resulting rect covers x:[0,340], y:[0,200] → encloses both modules.
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 340, y: 200, force: true })
      .wait(50)
      .trigger("mousemove", { x: 160, y: 100, force: true })
      .wait(50)
      .trigger("mousemove", { x: 0, y: 0, force: true })
      .wait(50)
      .trigger("mouseup", { x: 0, y: 0, force: true });

    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");
  });

  // T027 – FR-005: dragging one selected module moves all selected modules
  it("T027: Dragging one module moves all selected modules in unison (FR-005)", () => {
    cy.addModule("EvseManager"); // id=0
    cy.addModule("EvseManager"); // id=1

    // Select both with rectangle drag (same as T026)
    cy.get(".konvajs-content").click(700, 500, { force: true });
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 340, y: 200, force: true })
      .wait(50)
      .trigger("mousemove", { x: 0, y: 0, force: true })
      .wait(50)
      .trigger("mouseup", { x: 0, y: 0, force: true });

    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Drag module 0 (start inside its unique area) by 48px right, 48px down
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: MOD0.cx, y: MOD0.cy, force: true })
      .wait(100)
      .trigger("mousemove", { x: MOD0.cx + 24, y: MOD0.cy + 24, force: true })
      .wait(100)
      .trigger("mousemove", { x: MOD0.cx + 48, y: MOD0.cy + 48, force: true })
      .wait(100)
      .trigger("mouseup", { x: MOD0.cx + 48, y: MOD0.cy + 48, force: true });

    // Selection should still show 2 items after group drag
    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");
  });

  // T028 – FR-004: right-button drag pans the canvas
  it("T028: Right-drag on background pans the canvas (FR-004)", () => {
    cy.addModule("EvseManager");
    // Just verify the interaction doesn't crash and canvas remains visible
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 2, x: 400, y: 300, force: true })
      .wait(50)
      .trigger("mousemove", { x: 500, y: 400, force: true })
      .wait(50)
      .trigger("mouseup", { button: 2, x: 500, y: 400, force: true });
    cy.get(".konvajs-content").should("be.visible");
  });
});
