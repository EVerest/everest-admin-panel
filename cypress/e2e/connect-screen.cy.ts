// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest
import {faker} from "@faker-js/faker";

describe('Connect-Screen', () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
  });

  it('should load connect screen by default', () => {
    cy.visit('/');
    cy.get('[data-cy="add-everest-instance"]').should('be.visible');
  });

  it('should be possible to create, edit and delete an Everest instance', () => {
    cy.visit('/');
    // add instance
    cy.get('[data-cy="add-everest-instance"]').click();
    cy.get('[data-cy="delete-instance"]').should('not.exist');
    const instanceName = faker.word.words(2);
    cy.get('[data-cy="instance-name-field"]').type(instanceName);
    cy.get('[data-cy="host-address-field"]').type('localhost');
    cy.get('[data-cy="port-field"]').clear().type('8080');
    cy.get('[data-cy="save-instance"]').click();
    cy.get('[data-cy="server-list-item"]').contains(instanceName).should('be.visible');

    // edit instance
    cy.get('[data-cy="server-list-item"]')
        .contains(instanceName)
        .parentsUntil('.v-list-subheader__text')
        .find('[data-cy="edit-instance"]')
        .click();
    const newInstanceName = faker.word.words(2);
    cy.get('[data-cy="instance-name-field"]').type(`{selectall}{backspace}${newInstanceName}`);
    cy.get('[data-cy="save-instance"]').click();
    cy.get('[data-cy="server-list-item"]')
        .contains(newInstanceName)
        .should('be.visible');
    cy.get('[data-cy="server-list-item"]')
        .contains(instanceName)
        .should('not.exist');


    // delete instance
    cy.get('[data-cy="server-list-item"]')
        .contains(newInstanceName)
        .parentsUntil('.v-list-subheader__text')
        .find('[data-cy="edit-instance"]')
        .click();
    cy.get('[data-cy="delete-instance"]').click();
    cy.get('[data-cy="server-list-item"]')
        .contains(instanceName)
        .should('not.exist');
  });

  it('should automatically connect if autoConnect is set to true', () => {
    cy.visit('/');
    cy.get('[data-cy="auto-connect-checkbox').click();
    cy.get('[data-cy="server-list-item').contains('Simulator').click();
    cy.get('[data-cy="hamburger-menu"]').click();
    cy.get('[data-cy="switch-instance"]').click();

    // should not reconnect automatically after switching instance, only on page reload
    cy.get('[data-cy="server-list-item"]', {timeout: 6000}).contains('Simulator').should('be.visible');
    cy.wait(1000);
    cy.get('[data-cy="server-list-item"]').contains('Simulator').should('be.visible');

    // check if automatically reconnected
    cy.visit('/');
    cy.get('[data-cy="hamburger-menu"]', {timeout: 6000}).should('be.visible');
  });
});
