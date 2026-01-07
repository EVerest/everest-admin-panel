// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Hide harmless ResizeObserver errors which can cause tests to fail
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
  if (
    err.message.includes(
      "ResizeObserver loop completed with undelivered notifications",
    )
  ) {
    return false;
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
