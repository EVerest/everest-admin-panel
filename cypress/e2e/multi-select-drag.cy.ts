// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes(
      "ResizeObserver loop completed with undelivered notifications",
    )
  ) {
    return false;
  }
});

describe("Multi-Select Dragging", () => {
  const dragModule = (moduleName: string, toX: number, toY: number) => {
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const view = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === moduleName,
      );
      if (view) {
        // Programmatically move and fire events to simulate drag
        view.group.position({ x: toX, y: toY });
        view.group.fire("dragmove");
        view.group.fire("dragend");
      } else {
        throw new Error(`Module ${moduleName} not found on stage`);
      }
    });
  };

  beforeEach(() => {
    cy.visit("/");
    cy.contains("Simulator / Mock").click();
    cy.get("[data-cy='plus-create-config-btn']").click();
    const configName = `test-config-${Date.now()}`;
    cy.get("[data-cy='config-name-input']").type(configName);
    cy.get("[data-cy='accept-create-config-btn']").click();
    cy.get("#konva-stage").should("be.visible");
  });

  it("should move all selected modules when dragging one of them", () => {
    // 1. Add EvseManager
    cy.get("[data-cy='modules-search']").type("EvseManager");
    cy.contains("div", "EvseManager").click({ force: true });
    cy.wait(500);
    // Move it to a known start position
    dragModule("EvseManager", 100, 100);

    // 2. Add DummyTokenProvider
    cy.get("[data-cy='modules-search']").clear().type("DummyTokenProvider");
    cy.contains("div", "DummyTokenProvider").click({ force: true });
    cy.wait(500);
    // Move it to a known start position
    dragModule("DummyTokenProvider", 100, 300);

    // 3. Select both modules
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const evseView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      const tokenView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "DummyTokenProvider",
      );

      // Programmatically select modules using the ViewModel
      // This is more reliable than simulating clicks on canvas
      evseView._vm.clicked_title(false); // Click EvseManager
      tokenView._vm.clicked_title(true); // Shift+Click DummyTokenProvider
    });

    // Verify both are selected
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const selected = stage.context.get_selected_instances();
      expect(selected.length).to.equal(2);
    });

    // 4. Drag EvseManager by 100px to the right
    // Current pos of EvseManager is roughly 100, 100. Drag to 200, 100.
    dragModule("EvseManager", 200, 100);
    cy.wait(500);

    // 5. Verify positions
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const evseView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      const tokenView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "DummyTokenProvider",
      );

      const evsePos = evseView.group.position();
      const tokenPos = tokenView.group.position();

      // EvseManager should be at ~200, 100
      // DummyTokenProvider should be at ~200, 300 (moved 100px right from 100, 300)

      // We use approximate checks because grid snapping might affect exact pixels
      expect(evsePos.x).to.be.closeTo(200, 24); // 24 is grid size
      expect(tokenPos.x).to.be.closeTo(200, 24);

      // Y should be roughly same
      expect(evsePos.y).to.be.closeTo(100, 24);
      expect(tokenPos.y).to.be.closeTo(300, 24);
    });
  });
});
