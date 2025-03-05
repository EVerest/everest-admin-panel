/// <reference types="cypress" />

describe("create a simple config", () => {
  it("should create a config successfully", () => {
    cy.visit("/");
    cy.contains("div", "Simulator / Mock").click();
    cy.get(".mdi-plus").click();
    cy.get("input").type("simple-config");
    cy.get(".mdi-check").click();
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
    cy.get(".v-slide-group__content").should("be.visible");
    cy.get(".hljs").should(
      "contain.text",
      "EvseManager0:\n    module: EvseManager",
    );
  });
});
