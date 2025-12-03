// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes(
      "ResizeObserver loop completed with undelivered notifications",
    )
  ) {
    return false;
  }
});

describe("Delete Modules", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Simulator / Mock").click();
    cy.get("[data-cy='plus-create-config-btn']").click();
    const configName = `test-config-${Date.now()}`;
    cy.get("[data-cy='config-name-input']").type(configName);
    cy.get("[data-cy='accept-create-config-btn']").click();
    cy.get("#konva-stage").should("be.visible");
  });

  it("should delete a module after confirmation", () => {
    // Add a module
    cy.get("[data-cy='modules-search']").type("EvseManager");
    cy.contains("div", "EvseManager").click({ force: true });
    cy.wait(500);

    // Select the module
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      view._vm.clicked_title(false);
    });

    // Press Delete key
    cy.get("body").trigger("keydown", {
      key: "Delete",
      code: "Delete",
      keyCode: 46,
      which: 46,
      force: true,
    });

    // Verify confirmation dialog appears
    cy.contains("Delete Modules").should("be.visible");
    cy.contains("Are you sure you want to delete 1 module(s)?").should(
      "be.visible",
    );

    // Confirm deletion
    cy.contains("button", "Delete").click();

    // Verify module is gone
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      expect(view).to.be.undefined;
    });
  });

  it("should not delete a module if cancelled", () => {
    // Add a module
    cy.get("[data-cy='modules-search']").type("EvseManager");
    cy.contains("div", "EvseManager").click({ force: true });
    cy.wait(500);

    // Select the module
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      view._vm.clicked_title(false);
    });

    // Press Delete key
    cy.get("body").trigger("keydown", {
      key: "Delete",
      code: "Delete",
      keyCode: 46,
      which: 46,
      force: true,
    });

    // Verify confirmation dialog appears
    cy.contains("Delete Modules").should("be.visible");

    // Cancel deletion
    cy.contains("button", "Cancel").click();

    // Verify module is still there
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      expect(view).to.not.be.undefined;
    });
  });

  it("should not delete a module when typing in an input field", () => {
    // Add a module
    cy.get("[data-cy='modules-search']").type("EvseManager");
    cy.contains("div", "EvseManager").click({ force: true });
    cy.wait(500);

    // Select the module
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      view._vm.clicked_title(false);
    });

    // Focus the search input
    cy.get("[data-cy='modules-search'] input").click().focus();

    // Press Delete key (simulating typing/editing)
    cy.get("[data-cy='modules-search'] input").trigger("keydown", {
      key: "Delete",
      code: "Delete",
      keyCode: 46,
      which: 46,
      force: true,
    });

    // Verify confirmation dialog does NOT appear
    cy.contains("Delete Modules").should("not.exist");

    // Verify module is still there
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      expect(view).to.not.be.undefined;
    });
  });
});
