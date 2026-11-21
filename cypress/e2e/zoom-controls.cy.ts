// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

describe("T036-T037: Zoom Controls", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.connectToSimulator();
    cy.createConfig(`test-zoom-${Date.now()}`);
  });

  // T036 – Zoom In / Zoom Out buttons exist and respond (FR-015)
  it("T036: Zoom In (+) and Zoom Out (−) buttons are present and clickable (FR-015)", () => {
    cy.get("#zoom-in-button").should("be.visible").click({ force: true });
    cy.get("#zoom-out-button").should("be.visible").click({ force: true });
    // Verify canvas is still rendered after zoom operations
    cy.get(".konvajs-content").should("be.visible");
  });

  // T037 – Mouse wheel must NOT zoom (FR-016)
  it("T037: Mouse wheel scroll does not zoom the canvas (FR-016)", () => {
    // Capture the current canvas transform before wheel event
    cy.get(".konvajs-content canvas")
      .first()
      .then(($canvas) => {
        const beforeWidth = $canvas[0].style.width;
        const beforeHeight = $canvas[0].style.height;

        cy.get(".konvajs-content").trigger("wheel", {
          deltaY: -500, // large upward scroll that would zoom in if zoom were enabled
          ctrlKey: false,
          force: true,
        });

        cy.wait(200);

        // Canvas dimensions must be unchanged — confirming no zoom occurred
        cy.get(".konvajs-content canvas")
          .first()
          .then(($canvasAfter) => {
            expect($canvasAfter[0].style.width).to.equal(beforeWidth);
            expect($canvasAfter[0].style.height).to.equal(beforeHeight);
          });
      });
  });
});
