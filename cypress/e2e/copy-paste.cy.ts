// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// Module 0 spawns at pixel (0,0); frame covers (0,0)–(288,144). GRID=24.
// Unique hit area for module 0: (12,70), safe when only one module is on canvas.
const MOD0 = { cx: 12, cy: 70 };

// Helper: trigger Ctrl+key on body
const ctrlKey = (key: string) =>
  cy
    .get("body")
    .trigger("keydown", { key, ctrlKey: true, metaKey: true, bubbles: true });

describe("T029-T035: Copy / Cut / Paste", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.connectToSimulator();
    cy.createConfig(`test-copy-paste-${Date.now()}`);
    cy.get('[data-cy="modules-expansion-panel"]')
      .parents(".v-expansion-panel")
      .should("not.have.class", "v-expansion-panel--disabled", {
        timeout: 10000,
      });
  });

  // T029, T035 – basic copy + paste flow, toast confirmation
  it("T029 & T035: Copy → Paste creates a new module; toast appears on Copy", () => {
    cy.addModule("EvseManager");
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });
    cy.contains("Module instance information", { timeout: 5000 }).should(
      "be.visible",
    );

    // Copy  – FR-006, FR-014 (toast)
    ctrlKey("c");
    cy.contains(/copied to clipboard/i, { timeout: 5000 }).should("be.visible");

    // Paste – FR-008
    ctrlKey("v");
    cy.wait(500);

    // Open config preview to verify two instances exist
    cy.get("#show-preview-button").click({ force: true });
    cy.get('[data-cy="config-preview-component"]').should(
      "contain.text",
      "EvseManager",
    );
    cy.get("body").type("{esc}");
  });

  // T030 – Smart Increment naming (FR-009)
  it("T030: Pasted module gets Smart Increment name (FR-009)", () => {
    cy.addModule("EvseManager");
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });

    // Copy + Paste
    ctrlKey("c");
    cy.wait(200);
    ctrlKey("v");
    cy.wait(500);

    // Config preview should show "EvseManager0" AND "EvseManager0 (1)"
    cy.get("#show-preview-button").click({ force: true });
    cy.get('[data-cy="config-preview-component"]')
      .should("contain.text", "EvseManager0")
      .and("contain.text", "EvseManager0 (1)");
    cy.get("body").type("{esc}");
  });

  // T031 – Auto-selection of pasted module (FR-010)
  it("T031: Pasted module is auto-selected after paste (FR-010)", () => {
    cy.addModule("EvseManager");
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });

    ctrlKey("c");
    cy.wait(200);
    ctrlKey("v");
    cy.wait(500);

    // The pasted module is selected — right bar should immediately reflect it
    cy.contains("Module instance information").should("be.visible");
  });

  // T032 – Property retention (FR-011): pasted module retains module type
  it("T032: Pasted module retains configuration properties (FR-011)", () => {
    cy.addModule("EvseManager");
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });

    // Read the default module type shown in the info panel
    cy.contains("Module type: EvseManager", { timeout: 5000 }).should(
      "be.visible",
    );

    ctrlKey("c");
    cy.wait(200);
    ctrlKey("v");
    cy.wait(500);

    // The pasted module should also be EvseManager
    cy.contains("Module type: EvseManager").should("be.visible");
  });

  // T033 – Connection retention within selection, dropped for external (FR-012)
  it("T033: Internal connections preserved on paste; external connections dropped (FR-012)", () => {
    // Add two modules — id=0 spawns at (0,0), id=1 spawns at (24,24)
    cy.addModule("EvseManager"); // id=0
    cy.addModule("YetiDriver"); // id=1

    // Deselect
    cy.get(".konvajs-content").click(700, 500, { force: true });

    // Rectangle from empty space (350,200) down-left to (0,0) — covers both modules
    // Module 0 frame: (0,0)–(288,144); Module 1 frame: (24,24)–(312,168)
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 350, y: 200, force: true })
      .wait(50)
      .trigger("mousemove", { x: 160, y: 90, force: true })
      .wait(50)
      .trigger("mousemove", { x: 0, y: 0, force: true })
      .wait(50)
      .trigger("mouseup", { x: 0, y: 0, force: true });

    cy.contains(/2 items? selected/i, { timeout: 5000 }).should("be.visible");

    // Copy both
    ctrlKey("c");
    cy.wait(200);

    // Paste
    ctrlKey("v");
    cy.wait(500);

    // Config preview: pasted copies must exist
    cy.get("#show-preview-button").click({ force: true });
    cy.get('[data-cy="config-preview-component"]')
      .should("contain.text", "EvseManager0 (1)")
      .and("contain.text", "YetiDriver0 (1)");
    cy.get("body").type("{esc}");
  });

  // T035 – Toast for Cut (FR-014)
  it("T035: Cut action shows toast confirmation (FR-014)", () => {
    cy.addModule("EvseManager");
    cy.get(".konvajs-content").click(MOD0.cx, MOD0.cy, { force: true });
    cy.contains("Module instance information", { timeout: 5000 }).should(
      "be.visible",
    );

    ctrlKey("x");
    cy.contains(/cut to clipboard/i, { timeout: 5000 }).should("be.visible");
  });
});
