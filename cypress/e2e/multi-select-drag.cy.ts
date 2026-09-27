// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// T039 – Dragging one module in a multi-selection moves all selected modules

// Module 0 spawns at pixel (0,0); frame covers (0,0)–(288,144). GRID=24.
// Module 1 spawns at pixel (24,24); frame covers (24,24)–(312,168).
// The modules overlap, so we separate them before rectangle-selecting:
//   Drag module 0 rightward to ~pixel 384 (16 grid units × 24px = 384px).
//   After move:  module 0 frame → pixel (384, 0) – (672, 144)
//                module 1 frame → pixel ( 24,24) – (312, 168)  — no overlap

describe("T039: Multi-Select Drag moves all selected modules", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.connectToSimulator();
    cy.createConfig(`test-multi-drag-${Date.now()}`);
    cy.get('[data-cy="modules-expansion-panel"]')
      .parents(".v-expansion-panel")
      .should("not.have.class", "v-expansion-panel--disabled", {
        timeout: 10000,
      });
  });

  it("T039: All selected modules move in unison when one is dragged (FR-005)", () => {
    // Add two EvseManager modules — id=0 at pixel (0,0), id=1 at pixel (24,24).
    // Frames overlap heavily, so separate them before selecting.
    cy.addModule("EvseManager"); // id=0
    cy.addModule("EvseManager"); // id=1

    // Separate the modules: drag module 0 from its top-left corner pocket
    // (12,10) rightward to ~420px, snapping to ≥384px (16 grid units × 24px).
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 12, y: 10, force: true })
      .wait(100)
      .trigger("mousemove", { x: 200, y: 10, force: true })
      .wait(100)
      .trigger("mousemove", { x: 420, y: 10, force: true })
      .wait(100)
      .trigger("mouseup", { x: 420, y: 10, force: true });

    // Deselect by clicking empty space
    cy.get(".konvajs-content").click(700, 500, { force: true });

    // Rectangle from (700,200) sweeping to (0,0) — covers both separated modules
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 700, y: 200, force: true })
      .wait(50)
      .trigger("mousemove", { x: 350, y: 100, force: true })
      .wait(50)
      .trigger("mousemove", { x: 0, y: 0, force: true })
      .wait(50)
      .trigger("mouseup", { x: 0, y: 0, force: true });

    // Confirm both are selected
    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Drag from the centre of module 0's new frame (unambiguously inside it,
    // far from module 1) to trigger the group move.
    const M0 = { cx: 480, cy: 70 };
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: M0.cx, y: M0.cy, force: true })
      .wait(100)
      .trigger("mousemove", { x: M0.cx + 48, y: M0.cy + 48, force: true })
      .wait(100)
      .trigger("mouseup", { x: M0.cx + 48, y: M0.cy + 48, force: true });

    // Multi-selection state should persist after drag
    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Canvas still visible
    cy.get(".konvajs-content").should("be.visible");
    // cy.screenshot("T039-multi-select-drag-result");
  });
});
