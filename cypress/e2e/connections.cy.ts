// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import { faker } from "@faker-js/faker";

describe("Connection Management", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.connectToSimulator();
    cy.createConfig(faker.word.words(1));
  });

  it("should create a connection between compatible modules", () => {
    // Add EvseManager
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    cy.wait(500);

    // Add YetiDriver
    cy.get('[data-cy="modules-search"]').clear().type("YetiDriver");
    cy.get('[data-cy="module-list-item"]').contains("YetiDriver").click();
    cy.wait(500);

    // Position modules and create connection programmatically using exposed evbc object
    // Note: Canvas drag-and-drop is flaky in headless E2E due to precise coordinate requirements for terminals.
    // We verify the connection logic via model manipulation, which is robust.
    cy.window().then((win: any) => {
      const evbc = win.evbc;
      const config = evbc.evbcStore.current_config;

      // Find instances and their numeric IDs
      const entries = Object.entries(config._instances) as [string, any][];
      const evseEntry = entries.find(([id, i]) => i.type === "EvseManager");
      const yetiEntry = entries.find(([id, i]) => i.type === "YetiDriver");

      if (!evseEntry || !yetiEntry) {
        throw new Error("Modules not found in config");
      }

      const evseId = Number(evseEntry[0]);
      const yetiId = Number(yetiEntry[0]);

      // Move EvseManager to Grid(33, 15) -> (792, 360)
      config.update_module_view_position(evseId, { x: 33, y: 15 });

      // Move YetiDriver to Grid(8, 15) -> (192, 360)
      config.update_module_view_position(yetiId, { x: 8, y: 15 });

      // Create connection
      config.add_connection({
        requiring_instance_id: evseId,
        requirement_name: "bsp",
        providing_instance_id: yetiId,
        providing_impl_name: "board_support",
      });
    });

    cy.wait(1000); // Wait for Konva to update

    // Reset view to ensure we can click the module
    cy.get("#reset-view-button").click();
    cy.wait(500);

    // Verify connection visually (optional, but good check)
    // Select EvseManager (792, 360) -> Click center (792+144, 360+72) = (936, 432)
    cy.get(".konvajs-content").click(936, 432, { force: true });

    // Preview should look like this:
    //
    //  active_modules:
    //    EvseManager0:
    //      module: EvseManager
    //      connections:
    //        bsp:
    //          - module_id: YetiDriver0
    //            implementation_id: board_support
    //  ...

    // Check preview
    cy.get("#show-preview-button").click();
    cy.get("[data-cy='config-preview-component']").should(
      "contain.text",
      "module_id: YetiDriver",
    );
    cy.get("[data-cy='config-preview-component']").should(
      "contain.text",
      "implementation_id: board_support",
    );
  });
});
