// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

describe("Copy/Paste Modules", () => {
  it("should copy and paste a module", () => {
    cy.visit("/");
    cy.get("[data-cy='server-list-item']:nth-child(1)").click();
    
    cy.get("[data-cy='plus-create-config-btn']").click();
    cy.get("[data-cy='config-name-input']").type("copy-paste-test");
    cy.get("[data-cy='accept-create-config-btn']").click();
    
    // Add module
    cy.contains("div", "EvseManager").click();
    
    cy.wait(500);
    
    const canvas = cy.get("#konva-stage");
    // Click to select the module (assuming it's at top-left)
    canvas.click(50, 50);
    
    // Copy (Cmd+C) - using {meta} for Command on Mac, {ctrl} for Windows
    // Cypress type handles modifiers.
    // I'll try {meta}c first.
    cy.get('body').type('{meta}c');
    
    // Paste (Cmd+V)
    cy.get('body').type('{meta}v');
    
    // Verify
    cy.get("[data-cy='module-id-input']").should('have.value', 'EvseManager (1)');
  });
});
