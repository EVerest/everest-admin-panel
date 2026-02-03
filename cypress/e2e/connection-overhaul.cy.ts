// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

describe("Connection Overhaul", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Simulator / Mock").click();
    cy.get("[data-cy='plus-create-config-btn']").click();
    cy.get("[data-cy='config-name-input']").type(`test-conn-${Date.now()}`);
    cy.get("[data-cy='accept-create-config-btn']").click();
    cy.get("#konva-stage").should("be.visible");
  });

  it("should create connection by dragging from outgoing to incoming interface", () => {
    // Add EvseManager (provides Energy)
    cy.contains("div", "EvseManager").click();
    cy.wait(500);

    // Let's use EvseManager and YetiDriver. EvseManager requires 'board_support'
    // and YetiDriver provides it.
    cy.contains("div", "YetiDriver").click();
    cy.wait(500);

    // Move modules to avoid overlap
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const yetiView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "YetiDriver",
      );
      const evseView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );

      evseView.group.position({ x: 50, y: 100 });
      yetiView.group.position({ x: 600, y: 100 });

      stage._konva.stage.batchDraw();
    });

    // Drag from YetiDriver (provides board_support) to EvseManager (requires board_support)
    // YetiDriver provides 'board_support' on the right.
    // EvseManager requires 'board_support' on the left.
    cy.get("#konva-stage").then(($el) => {
      const rect = $el[0].getBoundingClientRect();

      cy.window().then((win: any) => {
        const stage = win.configStage;
        const yetiView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "YetiDriver",
        );
        const evseView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "EvseManager",
        );

        // Get terminal positions
        const provideTerminalIndex = yetiView._vm.terminal_lookup.findIndex(
          (t: any) =>
            t.terminal.interface === "evse_board_support" &&
            t.terminal.type === "provide",
        );
        const provideTerminalView =
          yetiView._terminal_views[provideTerminalIndex];
        // const providePos = provideTerminalView.getAbsolutePosition();

        const reqTerminalIndex = evseView._vm.terminal_lookup.findIndex(
          (t: any) =>
            t.terminal.interface === "evse_board_support" &&
            t.terminal.type === "requirement",
        );
        const reqTerminalView = evseView._terminal_views[reqTerminalIndex];
        const reqPos = reqTerminalView.getAbsolutePosition();

        // Manually trigger dragstart
        provideTerminalView.fire("dragstart", { evt: { altKey: false } });

        cy.get("#konva-stage")
          .trigger("mousemove", {
            clientX: rect.left + reqPos.x,
            clientY: rect.top + reqPos.y,
          })
          .trigger("mouseup", {
            clientX: rect.left + reqPos.x,
            clientY: rect.top + reqPos.y,
          });

        // Assert connection created
        cy.window().then((win: any) => {
          const connections = win.configStage._model._connections;
          const connectionList = Object.values(connections);
          expect(connectionList.length).to.be.greaterThan(0);

          const cxn = connectionList.find(
            (c: any) =>
              c.providing_instance_id === Number(yetiView._vm._instance_id) &&
              c.requiring_instance_id === Number(evseView._vm._instance_id) &&
              c.providing_impl_name === "board_support" &&
              c.requirement_name === "bsp",
          );
          expect(cxn).to.exist;
        });
      });
    });
  });

  it("should ghost incompatible modules during drag", () => {
    cy.contains("div", "EvseManager").click();
    cy.contains("div", "YetiDriver").click();
    cy.contains("div", "Auth").click(); // Incompatible with board_support

    cy.wait(500);

    cy.get("#konva-stage").then(($el) => {
      const rect = $el[0].getBoundingClientRect();

      cy.window().then((win: any) => {
        const stage = win.configStage;
        const yetiView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "YetiDriver",
        );
        const authView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "Auth",
        );
        const evseView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "EvseManager",
        );

        // Position modules
        evseView.group.position({ x: 50, y: 100 });
        yetiView.group.position({ x: 600, y: 100 });
        authView.group.position({ x: 50, y: 400 });
        stage._konva.stage.batchDraw();

        cy.log(
          "Yeti Terminals: " + JSON.stringify(yetiView._vm.terminal_lookup),
        );
        cy.log(
          "Evse Terminals: " + JSON.stringify(evseView._vm.terminal_lookup),
        );

        const provideTerminalIndex = yetiView._vm.terminal_lookup.findIndex(
          (t: any) =>
            t.terminal.interface === "evse_board_support" &&
            t.terminal.type === "provide",
        );
        const provideTerminalView =
          yetiView._terminal_views[provideTerminalIndex];
        const providePos = provideTerminalView.getAbsolutePosition();

        // Start drag
        provideTerminalView.fire("dragstart", { evt: { altKey: false } });

        const dragX = rect.left + providePos.x + 50;
        const dragY = rect.top + providePos.y + 50;

        cy.get("#konva-stage").trigger("mousemove", {
          clientX: dragX,
          clientY: dragY,
        });

        // Check ghosting (EvseManager should NOT be ghosted, others should be)
        // EvseManager requires 'bsp' (interface 'evse_board_support') which matches 'board_support' (interface 'evse_board_support')
        cy.wrap(evseView.group.opacity()).should("eq", 1);

        // Auth does not require 'evse_board_support'
        cy.wrap(authView.group.opacity()).should("eq", 0.3);

        // Check opacity
        // We need to wait for the drag to start and ghosting to apply.
        // Since it's synchronous in the event handler, it should be immediate.

        expect(authView.group.opacity()).to.be.closeTo(0.3, 0.01);

        // Release
        // Manually trigger mouseup handler on stage because Cypress trigger is flaky here
        stage._handle_connection_drag_end({});

        // Check opacity reset
        expect(authView.group.opacity()).to.equal(1);
      });
    });
  });

  it("should not create duplicate connection and not throw error", () => {
    cy.contains("div", "EvseManager").click();
    cy.contains("div", "YetiDriver").click();
    cy.wait(500);

    cy.get("#konva-stage").then(($el) => {
      const rect = $el[0].getBoundingClientRect();

      cy.window().then((win: any) => {
        const stage = win.configStage;
        const yetiView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "YetiDriver",
        );
        const evseView = Object.values(stage._module_views).find(
          (v: any) => v._vm.type === "EvseManager",
        );

        evseView.group.position({ x: 50, y: 100 });
        yetiView.group.position({ x: 600, y: 100 });
        stage._konva.stage.batchDraw();

        const provideTerminalIndex = yetiView._vm.terminal_lookup.findIndex(
          (t: any) =>
            t.terminal.interface === "evse_board_support" &&
            t.terminal.type === "provide",
        );
        const provideTerminalView =
          yetiView._terminal_views[provideTerminalIndex];

        const reqTerminalIndex = evseView._vm.terminal_lookup.findIndex(
          (t: any) =>
            t.terminal.interface === "evse_board_support" &&
            t.terminal.type === "requirement",
        );
        const reqTerminalView = evseView._terminal_views[reqTerminalIndex];
        const reqPos = reqTerminalView.getAbsolutePosition();

        // 1. Create first connection
        provideTerminalView.fire("dragstart", { evt: { altKey: false } });
        cy.get("#konva-stage")
          .trigger("mousemove", {
            clientX: rect.left + reqPos.x,
            clientY: rect.top + reqPos.y,
          })
          .trigger("mouseup", {
            clientX: rect.left + reqPos.x,
            clientY: rect.top + reqPos.y,
          });

        // Verify connection count
        cy.window().then((win2: any) => {
          const connections = win2.configStage._model._connections;
          expect(Object.keys(connections).length).to.equal(1);
        });

        // 2. Try to create same connection again
        provideTerminalView.fire("dragstart", { evt: { altKey: false } });
        cy.get("#konva-stage")
          .trigger("mousemove", {
            clientX: rect.left + reqPos.x,
            clientY: rect.top + reqPos.y,
          })
          .trigger("mouseup", {
            clientX: rect.left + reqPos.x,
            clientY: rect.top + reqPos.y,
          });

        // Verify connection count is still 1 and no error thrown
        cy.window().then((win2: any) => {
          const connections = win2.configStage._model._connections;
          expect(Object.keys(connections).length).to.equal(1);
        });
      });
    });
  });

  it("should clear selection when starting a connection drag", () => {
    cy.contains("div", "EvseManager").click();
    cy.contains("div", "YetiDriver").click();
    cy.wait(500);

    // Select EvseManager programmatically to ensure state
    cy.window().then((win: any) => {
      const stage = win.configStage;
      const evseView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      stage.context.select_instances([Number(evseView._vm._instance_id)]);
    });

    cy.window().then((win: any) => {
      const stage = win.configStage;
      const evseView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      const yetiView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "YetiDriver",
      );

      // Verify selection
      expect(stage.context.get_selected_instances()).to.include(
        Number(evseView._vm._instance_id),
      );

      // Start drag from YetiDriver
      const provideTerminalIndex = yetiView._vm.terminal_lookup.findIndex(
        (t: any) =>
          t.terminal.interface === "evse_board_support" &&
          t.terminal.type === "provide",
      );
      const provideTerminalView =
        yetiView._terminal_views[provideTerminalIndex];

      provideTerminalView.fire("dragstart", { evt: { altKey: false } });

      // Verify selection cleared
      expect(stage.context.get_selected_instances()).to.have.length(0);

      // Cleanup
      stage._handle_connection_drag_end({});
    });
  });
});
