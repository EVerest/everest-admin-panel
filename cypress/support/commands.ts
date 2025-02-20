// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
/// <reference types="cypress" />
export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      connectToSimulator(): Chainable<void>;
      createConfig( name: string ): Chainable<void>;
    }
  }
}

Cypress.Commands.add( "connectToSimulator", () => {
  cy.visit( "/", );
  cy.get( '[data-cy="server-list-item', ).contains( "Simulator", )
    .click();
  cy.get( '[data-cy="hamburger-menu"]', ).should( "be.visible", );
}, );

Cypress.Commands.add( "createConfig", ( name, ) => {
  cy.get( '[data-cy="plus-create-config-btn"]', ).click();
  cy.get( '[data-cy="config-name-input"]', ).type( name, );
  cy.get( '[data-cy="accept-create-config-btn"]', ).click();
}, );
