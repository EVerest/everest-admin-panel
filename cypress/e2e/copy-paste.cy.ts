// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import { faker } from "@faker-js/faker";
import en from "../../src/locales/en.json";

describe("Copy and Paste Modules", () => {
  beforeEach(() => {
    cy.connectToSimulator();
    cy.createConfig(faker.word.words(1));
  });

  const waitForKonva = () => {
    // Wait for the canvas to be ready and have processed draws
    cy.window().should((win: any) => {
      // Check if configStage is mounted and has layers
      expect(win.configStage).to.exist;
      expect(win.configStage._konva.stage).to.exist;
      // We can also check if batchDraw is pending or check layer children count if relevant
      // For now, ensuring the stage exists is a good baseline.
      // But mainly we want to ensure the module we added is in the model.
      const config = win.evbc.evbcStore.current_config;
      expect(Object.keys(config._instances).length).to.be.gt(0);
    });
  };

  it("should copy and paste a module", () => {
    // Add a module
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();

    // Use deterministic wait instead of fixed sleep
    waitForKonva();

    // Select the module programmatically
    cy.window().then((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      const ids = Object.keys(config._instances).map(Number);
      win.configStage.context.select_instances([ids[0]]);
    });

    // Verify selection UI update
    cy.get('[data-cy="module-id-input"]').should("be.visible");

    // Copy
    cy.get("body").type("{meta}c");

    // Paste
    cy.get("body").type("{meta}v");

    // Verify model update
    cy.get("#show-preview-button").click();
    cy.get("[data-cy='config-preview-component']").should(
      "contain.text",
      "EvseManager0:",
    );
    cy.get("[data-cy='config-preview-component']").should(
      "contain.text",
      "EvseManager0 (1):",
    );
  });

  it("should cut and paste a module", () => {
    // Add a module
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    waitForKonva();

    // Select programmatically
    cy.window().then((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      const ids = Object.keys(config._instances).map(Number);
      win.configStage.context.select_instances([ids[0]]);
    });

    // Verify selection
    cy.get('[data-cy="module-id-input"]').should("be.visible");

    // Cut
    cy.get("body").type("{meta}x");

    // Verify it's gone
    cy.get('[data-cy="module-id-input"]').should("not.exist");
    cy.window().should((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      expect(Object.keys(config._instances).length).to.eq(0);
    });

    // Paste
    cy.get("body").type("{meta}v");

    // Verify it's back
    cy.get("#show-preview-button").click();
    cy.get("[data-cy='config-preview-component']").should(
      "contain.text",
      "EvseManager",
    );
  });

  it("should delete a module with confirmation", () => {
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    waitForKonva();

    // Select programmatically
    cy.window().then((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      const ids = Object.keys(config._instances).map(Number);
      win.configStage.context.select_instances([ids[0]]);
    });

    cy.get('[data-cy="module-id-input"]').should("be.visible");

    // Press Delete
    cy.get("body").type("{backspace}");

    // Verify confirmation dialog
    cy.contains(
      en.evConfigCanvas.deleteDialog.text.split("|")[0].trim(),
    ).should("be.visible");

    // Confirm
    cy.contains("button", en.evConfigCanvas.deleteDialog.accept).click({
      force: true,
    });

    // Verify module is gone
    cy.get('[data-cy="module-id-input"]').should("not.exist");
    cy.window().should((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      expect(Object.keys(config._instances).length).to.eq(0);
    });
  });

  it("should cancel deletion", () => {
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    waitForKonva();

    // Select programmatically
    cy.window().then((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      const ids = Object.keys(config._instances).map(Number);
      win.configStage.context.select_instances([ids[0]]);
    });

    cy.get('[data-cy="module-id-input"]').should("be.visible");

    // Press Delete
    cy.get("body").type("{backspace}");

    // Verify confirmation dialog
    cy.contains(
      en.evConfigCanvas.deleteDialog.text.split("|")[0].trim(),
    ).should("be.visible");

    // Cancel
    cy.contains(en.evConfigCanvas.deleteDialog.deny).click();

    // Verify module is still there
    cy.get('[data-cy="module-id-input"]').should("be.visible");
  });

  it("should not delete when editing input", () => {
    cy.get('[data-cy="modules-search"]').type("EvseManager");
    cy.get('[data-cy="module-list-item"]').contains("EvseManager").click();
    waitForKonva();

    // Select programmatically
    cy.window().then((win: any) => {
      const config = win.evbc.evbcStore.current_config;
      const ids = Object.keys(config._instances).map(Number);
      win.configStage.context.select_instances([ids[0]]);
    });

    cy.get('[data-cy="module-id-input"]').should("be.visible");

    // Focus input
    cy.get('[data-cy="module-id-input"] input').click().focus();

    // Press Delete
    cy.get('[data-cy="module-id-input"] input').type("{backspace}");

    // Verify NO confirmation dialog
    cy.contains(
      en.evConfigCanvas.deleteDialog.text.split("|")[0].trim(),
    ).should("not.exist");

    // Verify module is still there
    cy.get('[data-cy="module-id-input"]').should("be.visible");
  });
});
