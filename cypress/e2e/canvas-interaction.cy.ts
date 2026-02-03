// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import { faker } from "@faker-js/faker";
import en from "../../src/locales/en.json";

describe("Canvas Interaction", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.connectToSimulator();
    cy.createConfig(faker.word.words(1));
  });

  const placeModules = () => {
    // Add two EvseManagers
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    cy.wait(200);
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    cy.wait(500);

    // Position them programmatically
    cy.window().then((win: any) => {
      const evbc = win.evbc;
      const config = evbc.evbcStore.current_config;

      // Get entries [numericId, instance]
      const entries = Object.entries(config._instances) as [string, any][];

      // Sort by string ID to be deterministic (EvseManager0, EvseManager1)
      entries.sort((a, b) => a[1].id.localeCompare(b[1].id));

      if (entries.length >= 2) {
        const id1 = Number(entries[0][0]);
        const id2 = Number(entries[1][0]);

        // Module 1 at (200, 300)
        // Grid: x=200/24=8.3 -> 8, y=300/24=12.5 -> 12
        // Actual: 192, 288
        config.update_module_view_position(id1, { x: 8, y: 12 });

        // Module 2 at (600, 300)
        // Grid: x=600/24=25, y=12
        // Actual: 600, 288
        config.update_module_view_position(id2, { x: 25, y: 12 });
      }
    });
    cy.wait(500);
    cy.get("#reset-view-button").click();
  };

  it("should select multiple modules with shift-click", () => {
    placeModules();

    // Module 1 center: 192 + 144 = 336, 288 + 72 = 360
    // Module 2 center: 600 + 144 = 744, 288 + 72 = 360

    // Click Module 1
    cy.get(".konvajs-content").click(336, 360, { force: true });
    cy.get('[data-cy="module-id-input"]').should("be.visible");

    // Shift-click Module 2
    cy.get("body").type("{shift}", { release: false });
    cy.get(".konvajs-content").click(744, 360, { force: true });
    cy.get("body").type("{shift}", { release: true });

    // Verify multiple selection
    cy.contains(en.evModuleInfo.multipleSelection).should("be.visible");
  });

  it("should select modules with rectangle drag", () => {
    placeModules();

    // Drag rectangle from (100, 100) to (800, 500)
    // Should cover both modules
    cy.get(".konvajs-content")
      .trigger("mousedown", {
        button: 0,
        clientX: 100,
        clientY: 100,
        force: true,
      })
      .trigger("mousemove", { clientX: 800, clientY: 500, force: true })
      .trigger("mouseup", { force: true });

    // Verify multiple selection
    cy.contains(en.evModuleInfo.multipleSelection).should("be.visible");
  });

  it("should pan the canvas with right click", () => {
    // Add one module
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    cy.wait(500);

    // Position at (500, 300) -> Grid 21, 12 -> 504, 288
    cy.window().then((win: any) => {
      const evbc = win.evbc;
      const config = evbc.evbcStore.current_config;
      const entries = Object.entries(config._instances) as [string, any][];

      if (entries.length > 0) {
        const id = Number(entries[0][0]);
        config.update_module_view_position(id, { x: 21, y: 12 });
      }
    });
    cy.wait(500);

    // Module center: 504 + 144 = 648, 288 + 72 = 360

    // Pan by dragging right click from 400,400 to 200,400 (Delta x = -200)
    // Canvas moves LEFT by 200.
    // Objects move LEFT by 200.
    // New Module center: 448, 360.

    cy.get(".konvajs-content")
      .trigger("mousedown", {
        button: 2,
        clientX: 400,
        clientY: 400,
        force: true,
      })
      .trigger("mousemove", { clientX: 200, clientY: 400, force: true })
      .trigger("mouseup", { force: true });

    cy.wait(500);

    // Click at old position (648, 360) -> should miss (or hit background)
    // Note: If we click background, selection clears.
    cy.get(".konvajs-content").click(648, 360, { force: true });
    cy.get('[data-cy="module-id-input"]').should("not.exist");

    // Click at new position (448, 360) -> should hit
    cy.get(".konvajs-content").click(448, 360, { force: true });
    cy.get('[data-cy="module-id-input"]').should("be.visible");
  });

  it("should zoom in and out", () => {
    // Add a module
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    cy.wait(500);

    // Initial scale check
    cy.window().then((win: any) => {
      // Ensure configStage is available (might need a small wait if exposed in Mounted)
      // But we waited 500ms after adding module, so it should be mounted.
      expect(win.configStage).to.exist;
      const scale = win.configStage._konva.static_layer.scaleX();
      expect(scale).to.equal(1);
    });

    // Zoom in
    cy.get("#zoom-in-button").click();
    cy.wait(200);
    cy.window().then((win: any) => {
      const scale = win.configStage._konva.static_layer.scaleX();
      // Only one click might be small zoom, but should be > 1
      expect(scale).to.be.greaterThan(1);
    });

    // Zoom out
    cy.get("#zoom-out-button").click();
    cy.wait(200);
    cy.window().then((win: any) => {
      const scale = win.configStage._konva.static_layer.scaleX();
      // Should be back to 1 (or close)
      expect(scale).to.be.closeTo(1, 0.001);
    });

    // Zoom out again
    cy.get("#zoom-out-button").click();
    cy.wait(200);
    cy.window().then((win: any) => {
      const scale = win.configStage._konva.static_layer.scaleX();
      expect(scale).to.be.lessThan(1);
    });
  });
});
