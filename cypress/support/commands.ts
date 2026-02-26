// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      connectToSimulator(): Chainable<void>;
      createConfig(name: string): Chainable<void>;
      addModule(name: string, x?: number, y?: number): Chainable<void>;
    }
  }
}

Cypress.Commands.add("connectToSimulator", () => {
  cy.visit("/");
  cy.get('[data-cy="server-list-item').contains("Simulator").click();
  cy.get('[data-cy="hamburger-menu"]').should("be.visible");
});

Cypress.Commands.add("createConfig", (name) => {
  cy.get("body").then(($body) => {
    if (!$body.find('[data-cy="plus-create-config-btn"]').is(":visible")) {
      cy.get('[data-cy="configs-expansion-panel"]').click();
    }
  });
  cy.get('[data-cy="plus-create-config-btn"]', { timeout: 10000 })
    .should("be.visible")
    .click();
  cy.get('[data-cy="config-name-input"]').type(name);
  cy.get('[data-cy="accept-create-config-btn"]').click();
});

Cypress.Commands.add("addModule", (name: string, x?: number, y?: number) => {
  cy.log(`Adding module: ${name}`);

  cy.get("body").then(($body) => {
    if (!$body.find('[data-cy="modules-search"]').is(":visible")) {
      cy.get('[data-cy="modules-expansion-panel"]').click();
    }
  });

  cy.get('[data-cy="modules-search"]', { timeout: 10000 }).should("be.visible");

  cy.get('[data-cy="modules-search"] input')
    .clear({ force: true })
    .type(name, { delay: 50, force: true });

  cy.get('[data-cy="module-list-item"]', { timeout: 10000 })
    .contains(name)
    .click({ force: true });

  cy.wait(400);

  // Click the module at its known spawn location (module id=0 → pixel 0,0 → frame 0-288 x 0-144)
  // For subsequent modules the position drifts by (24,24) per id, but clicking the
  // top-left region (12, 70) reliably hits module 0's unique area.
  // Callers that need precise positions should click manually after this command.
  if (x !== undefined && y !== undefined) {
    cy.get(".konvajs-content").click(x, y, { force: true });
    cy.contains("Module instance information", { timeout: 5000 }).should(
      "be.visible",
    );
  }
});
