// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest
/// <reference types="cypress" />

import "./commands";

// Hide harmless ResizeObserver errors which can cause tests to fail
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

Cypress.on("uncaught:exception", (err: Error) => {
  // returning false here prevents Cypress from failing the test
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
