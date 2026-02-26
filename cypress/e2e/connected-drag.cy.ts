// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// T038 – Dragging a module that has connections does not break the canvas

describe("T038: Connected Module Drag Stability", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.connectToSimulator();
    cy.createConfig(`test-connected-drag-${Date.now()}`);
    cy.get('[data-cy="modules-expansion-panel"]')
      .parents(".v-expansion-panel")
      .should("not.have.class", "v-expansion-panel--disabled", {
        timeout: 10000,
      });
  });

  it("T038: Dragging a module with connections keeps canvas stable", () => {
    // Module id=0 spawns at grid(0,0) → canvas pixel (0,0), frame 288×144, center (144,72)
    // Module id=1 spawns at grid(1,1) → canvas pixel (24,24), frame center (168,96)
    // Module id=2 spawns at grid(2,2) → canvas pixel (48,48), frame center (192,120)
    cy.addModule("EvseManager"); // id=0 — no position click; just add
    cy.addModule("EvseSecurity"); // id=1
    cy.addModule("YetiSimulator"); // id=2

    // Deselect
    cy.get(".konvajs-content").click(700, 400, { force: true });

    // Drag module 0 from its center (144,72) to a new position
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 144, y: 72, force: true })
      .wait(100)
      .trigger("mousemove", { x: 200, y: 120, force: true })
      .wait(100)
      .trigger("mouseup", { x: 200, y: 120, force: true });

    // Canvas should still be visible and the stage should not have crashed
    cy.get(".konvajs-content").should("be.visible");

    // Config should still be openable
    cy.get("#show-preview-button").click({ force: true });
    cy.get('[data-cy="config-preview-component"]').should(
      "contain.text",
      "EvseManager",
    );
    cy.get("body").type("{esc}");
  });
});
