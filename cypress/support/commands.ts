// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest
/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      connectToSimulator(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('connectToSimulator', () => {
    cy.visit('/');
    cy.get('[data-cy="server-list-item').contains('Simulator').click();
    cy.get('[data-cy="hamburger-menu"]').should('be.visible');
})
