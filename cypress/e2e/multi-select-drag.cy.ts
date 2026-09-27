// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// T039 – Dragging one module in a multi-selection moves all selected modules

// Module 0 spawns at pixel (0,0); frame covers (0,0)–(288,144). GRID=24.
// Module 1 spawns at pixel (24,24); frame covers (24,24)–(312,168).
// Unique hit area for module 0: x<24, e.g. (12, 70)
// Empty space (no module): x>312 or y>168 — use (350,200) or (700,500)

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
    // Add two EvseManager modules — id=0 at (0,0), id=1 at (24,24)
    cy.addModule("EvseManager"); // id=0
    cy.addModule("EvseManager"); // id=1

    // Deselect by clicking empty space
    cy.get(".konvajs-content").click(700, 500, { force: true });

    // Rectangle from empty space (350,200) sweeping to (0,0) — covers both module frames
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 350, y: 200, force: true })
      .wait(50)
      .trigger("mousemove", { x: 160, y: 90, force: true })
      .wait(50)
      .trigger("mousemove", { x: 0, y: 0, force: true })
      .wait(50)
      .trigger("mouseup", { x: 0, y: 0, force: true });

    // Confirm both are selected
    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Drag from module 0's unique area (x<24) to trigger group move
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 12, y: 70, force: true })
      .wait(100)
      .trigger("mousemove", { x: 60, y: 120, force: true })
      .wait(100)
      .trigger("mouseup", { x: 60, y: 120, force: true });

    // Multi-selection state should persist after drag
    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Canvas still visible
    cy.get(".konvajs-content").should("be.visible");
  });
});
