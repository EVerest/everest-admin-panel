// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest
/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("ConfigManagement", () => {
  it("should be possible to create and save a new config", () => {
    cy.connectToSimulator();
    const configName = faker.word.words(1);
    cy.createConfig(configName);
    cy.get("#config-save-button").click();
    cy.get('[data-cy="configs-expansion-panel"]').click();
    cy.get('[data-cy="config-list-item"]')
      .contains(configName)
      .should("be.visible");
  });
});
