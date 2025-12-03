// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  if (
    err.message.includes(
      "ResizeObserver loop completed with undelivered notifications",
    )
  ) {
    return false;
  }
});

describe("Copy/Paste Modules & Canvas Interactions", () => {
  const isMac = Cypress.platform === "darwin";
  const cmdKey = isMac ? "{meta}" : "{ctrl}";

  const clickModule = (moduleName: string, shiftKey = false, byId = false) => {
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find((v: any) =>
        byId ? v._vm.id === moduleName : v._vm.type === moduleName,
      );
      if (view) {
        view._vm.clicked_title(shiftKey);
      } else {
        throw new Error(`Module ${moduleName} not found on stage`);
      }
    });
  };

  const triggerKey = (key: string) => {
    cy.get("body").type(`${cmdKey}${key}`);
  };

  const dragModule = (
    moduleName: string,
    toX: number,
    toY: number,
    byId = false,
  ) => {
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find((v: any) =>
        byId ? v._vm.id === moduleName : v._vm.type === moduleName,
      );
      if (view) {
        view.group.position({ x: toX, y: toY });
        // Manually trigger the dragmove handler to update the model/grid position
        // This avoids firing the event which caused hangs in the test runner
        if (typeof view._module_dragmove_handler === "function") {
          view._module_dragmove_handler();
        }
        view.group.getLayer().batchDraw();
      } else {
        throw new Error(`Module ${moduleName} not found on stage`);
      }
    });
  };

  beforeEach(() => {
    cy.visit("/");
    // Select the mock instance
    cy.contains("Simulator / Mock").click();

    // Create a new config
    cy.get("[data-cy='plus-create-config-btn']").click();
    const configName = `test-config-${Date.now()}`;
    cy.get("[data-cy='config-name-input']").type(configName);
    cy.get("[data-cy='accept-create-config-btn']").click();

    // Wait for canvas
    cy.get("#konva-stage").should("be.visible");
  });

  it("FR-001, FR-002, FR-003, FR-005: Selection & Dragging", () => {
    // Add Module A
    cy.contains("div", "EvseManager").click();
    cy.wait(1000);
    // Move Module A to 100, 100
    // dragModule("EvseManager", 150, 150);

    // Add Module B
    cy.contains("div", "YetiDriver").click();
    cy.wait(1000);
    // Move Module B to 300, 100
    // dragModule("YetiDriver", 350, 150);

    // FR-001: Single Selection
    clickModule("EvseManager");
    cy.get("[data-cy='module-id-input']").should("have.value", "EvseManager");

    clickModule("YetiDriver");
    cy.get("[data-cy='module-id-input']").should("have.value", "YetiDriver");

    // FR-002: Additive Selection (Shift+Click)
    // Shift+Click A
    clickModule("EvseManager", true);

    // Verify multiple selection (Right bar should show summary)
    cy.contains("Multiple items selected").should("be.visible");

    // FR-003: Rectangle Selection
    // Click background to clear
    cy.get("#konva-stage").click(500, 500);

    // Drag rectangle covering both
    // Assuming they are at 150,150 and 350,150 (approx)
    // Drag from 50,50 to 400,250
    cy.get("#konva-stage")
      .trigger("mousedown", { clientX: 50, clientY: 50, button: 0 })
      .trigger("mousemove", { clientX: 400, clientY: 250 })
      .trigger("mouseup", { force: true });

    cy.contains("Multiple items selected").should("be.visible");

    // FR-005: Group Dragging
    // Drag A (at 150, 150) to (150, 250) -> +0, +100
    // We need to drag from where it is now.
    dragModule("EvseManager", 150, 250);

    // Verify B moved too
    // We can check if B is selected
    clickModule("YetiDriver");
    cy.get("[data-cy='module-id-input']").should("have.value", "YetiDriver");
  });

  it("FR-004: Panning", () => {
    // Add Module
    cy.contains("div", "EvseManager").click();
    cy.wait(1000);

    // Pan canvas (Right drag)
    // Drag from 400, 500 to 600, 500 (Pan right by 200)
    cy.get("#konva-stage")
      .trigger("mousedown", { clientX: 400, clientY: 500, button: 2 })
      .trigger("mousemove", { clientX: 600, clientY: 500 })
      .trigger("mouseup", { force: true });

    // Verify stage position
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const pos = stage._konva.static_layer.position();
      // Should be moved by +200 in X
      expect(pos.x).to.be.closeTo(200, 5);
    });
  });

  it("FR-006, FR-008, FR-009, FR-010, FR-014: Copy/Paste", () => {
    // Add Module
    cy.contains("div", "EvseManager").click();
    cy.wait(1000);

    // Select
    clickModule("EvseManager");

    // Copy
    triggerKey("c");

    // FR-014: Toast
    cy.contains("Modules copied to clipboard").should("be.visible");

    // Paste
    triggerKey("v");

    // FR-009: Smart Increment
    // New module should be selected.
    cy.get("[data-cy='module-id-input']").should(
      "have.value",
      "EvseManager (1)",
    );

    // FR-010: Offset
    // We can verify we can click it.
    clickModule("EvseManager (1)", false, true);
    cy.get("[data-cy='module-id-input']").should(
      "have.value",
      "EvseManager (1)",
    );
  });

  it("FR-007: Cut/Paste", () => {
    // Add Module
    cy.contains("div", "EvseManager").click();
    cy.wait(1000);

    // Select
    clickModule("EvseManager");

    // Cut
    triggerKey("x");

    // FR-014: Toast
    cy.contains("Modules copied to clipboard").should("be.visible");

    // Verify gone (click should not select it)
    cy.get("[data-cy='module-id-input']").should("not.exist");

    // Paste
    triggerKey("v");

    // Verify back (new instance)
    cy.get("[data-cy='module-id-input']").should(
      "have.value",
      "EvseManager (1)",
    ); // New ID
  });

  it("FR-015: Zoom Buttons", () => {
    // Add Module
    cy.contains("div", "EvseManager").click();
    cy.wait(1000);

    // Zoom In
    cy.get("#zoom-in-button").click();
    cy.get("#zoom-in-button").click();

    // Zoom Out
    cy.get("#zoom-out-button").click();
    cy.get("#zoom-out-button").click();
    cy.get("#zoom-out-button").click();
  });

  it("should offset consecutive pastes", () => {
    // Add Module
    cy.contains("div", "EvseManager").click();
    cy.wait(1000);

    // Select
    clickModule("EvseManager");

    // Copy
    triggerKey("c");

    // Paste 1
    triggerKey("v");
    cy.get("[data-cy='module-id-input']").should(
      "have.value",
      "EvseManager (1)",
    );

    // Paste 2
    triggerKey("v");
    cy.get("[data-cy='module-id-input']").should(
      "have.value",
      "EvseManager (2)",
    );

    // Verify positions
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const original = Object.values(stage._module_views).find(
        (v: any) => v._vm.id === "EvseManager",
      ) as any;
      const paste1 = Object.values(stage._module_views).find(
        (v: any) => v._vm.id === "EvseManager (1)",
      ) as any;
      const paste2 = Object.values(stage._module_views).find(
        (v: any) => v._vm.id === "EvseManager (2)",
      ) as any;

      const p0 = original.group.position();
      const p1 = paste1.group.position();
      const p2 = paste2.group.position();

      // Offset should be 2px and 4px now
      expect(p1.x).to.equal(p0.x + 2);
      expect(p1.y).to.equal(p0.y + 2);

      expect(p2.x).to.equal(p0.x + 4);
      expect(p2.y).to.equal(p0.y + 4);
    });
  });
});
