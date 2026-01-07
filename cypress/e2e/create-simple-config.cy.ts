// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

describe("create a simple config", () => {
  it("should create a config successfully", () => {
    cy.visit("/");
    cy.get("[data-cy='server-list-item']:nth-child(1)").click();
    cy.get("[data-cy='plus-create-config-btn']").click();
    cy.get("[data-cy='config-name-input']").type("simple-config");
    cy.get("[data-cy='accept-create-config-btn']").click();
    // these should be fine without data-cy as they are dynamically generated and there should be only one module named eg. EvseManager
    cy.contains("div", "EvseManager").click();
    cy.contains("div", "YetiDriver").click();
    const canvas = cy.get("#konva-stage");

    canvas.should("be.visible");

    canvas.trigger("mousedown", 100, 100);
    canvas.trigger("mousemove", 100, 400);
    canvas.trigger("mouseup", 100, 400);

    canvas.trigger("mousedown", 100, 100);
    canvas.trigger("mousemove", 130, 100);
    canvas.trigger("mouseup", 130, 100);

    // TODO: try connecting 2 modules
    // canvas.trigger("mousedown", 10, 2);
    // canvas.trigger("mousemove", 10, 3);
    // // cy.wait(10);
    // canvas.trigger("mouseup", 10, 2);
    // cy.wait(500);
    // canvas.trigger("mousedown", 330, 465);
    // canvas.trigger("mousemove", 330, 466);
    // // cy.wait(10);
    // canvas.trigger("mouseup", 330, 465);

    cy.get("#show-preview-button").click();
    cy.get("[data-cy='download-config-file-button']").should("be.visible");
    cy.get("[data-cy='config-preview-component'").should(
      "contain.text",
      "EvseManager0:\n    module: EvseManager",
    );
  });
});
