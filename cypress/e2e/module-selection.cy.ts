// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

describe('Module Selection', () => {
    it('should be possible to search for EvseManager', () => {
        cy.connectToSimulator();
        cy.get('[data-cy="modules-expansion-panel"]').click();
        cy.get('[data-cy="modules-search"]').type("EvseManager");
        cy.get('[data-cy="module-list-item"]').contains("EvseManager").should('be.visible');
        cy.get('[data-cy="modules-search"]').type("{selectall}{backspace}LoremIpsumDolorModule");
        cy.get('[data-cy="module-list-item"]').should('not.exist');
    });
});
