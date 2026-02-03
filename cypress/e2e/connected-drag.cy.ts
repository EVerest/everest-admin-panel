// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

/// <reference types="cypress" />

// Make this file a module so helper types stay local
export {};

type TerminalViewForTest = {
  getAbsolutePosition: () => { x: number; y: number };
};

type ModuleViewForTest = {
  _vm: {
    type: string;
    _instance_id: number;
    terminal_lookup: Array<{ terminal: { id: string } }>;
    _terminal_views?: TerminalViewForTest[];
  };
  _terminal_views: TerminalViewForTest[];
  group: {
    getAbsolutePosition: () => { x: number; y: number };
    position?: (pos?: { x: number; y: number }) => { x: number; y: number };
  };
};

type ConfigStageForTest = {
  _module_views: Record<string, ModuleViewForTest>;
  context: {
    clicked_terminal: (terminal: unknown, instanceId: number) => void;
  };
  _conn_man: {
    connections: unknown[];
  };
};

const getStage = (win: unknown): ConfigStageForTest =>
  (win as { configStage: ConfigStageForTest }).configStage;

describe("Connected Module Dragging", () => {
  const dragModule = (moduleName: string, toX: number, toY: number) => {
    cy.window().then((win) => {
      const stage = getStage(win);
      const view = Object.values(stage._module_views).find(
        (v) => v._vm.type === moduleName,
      );
      if (view) {
        const pos = view.group.getAbsolutePosition();
        cy.get("#konva-stage").then(($el) => {
          const rect = $el[0].getBoundingClientRect();
          const startX = rect.left + pos.x + 20;
          const startY = rect.top + pos.y + 20;
          const endX = rect.left + toX;
          const endY = rect.top + toY;

          cy.get("#konva-stage")
            .trigger("mousedown", {
              clientX: startX,
              clientY: startY,
              button: 0,
              force: true,
            })
            .trigger("mousemove", { clientX: endX, clientY: endY, force: true })
            .trigger("mouseup", { clientX: endX, clientY: endY, force: true });
        });
      } else {
        throw new Error(`Module ${moduleName} not found on stage`);
      }
    });
  };

  const _connectModules = (
    sourceModule: string,
    sourceTerminalIndex: number,
    targetModule: string,
    targetTerminalIndex: number,
  ) => {
    cy.window().then((win) => {
      const stage = getStage(win);
      const sourceView = Object.values(stage._module_views).find(
        (v) => v._vm.type === sourceModule,
      );
      const targetView = Object.values(stage._module_views).find(
        (v) => v._vm.type === targetModule,
      );

      if (sourceView && targetView) {
        // Find terminals
        // This is a bit hacky, assuming index matches visual order or just picking one
        // In a real scenario we'd look up by ID/Type
        const sourceTerminal = sourceView._terminal_views[sourceTerminalIndex];
        const targetTerminal = targetView._terminal_views[targetTerminalIndex];

        if (sourceTerminal && targetTerminal) {
          const sourcePos = sourceTerminal.getAbsolutePosition();
          const targetPos = targetTerminal.getAbsolutePosition();

          cy.get("#konva-stage").then(($el) => {
            const rect = $el[0].getBoundingClientRect();
            const startX = rect.left + sourcePos.x;
            const startY = rect.top + sourcePos.y;
            const endX = rect.left + targetPos.x;
            const endY = rect.top + targetPos.y;

            // Drag from source terminal to target terminal
            cy.get("#konva-stage")
              .trigger("mousedown", {
                clientX: startX,
                clientY: startY,
                button: 0,
                force: true,
              })
              .trigger("mousemove", {
                clientX: endX,
                clientY: endY,
                force: true,
              })
              .trigger("mouseup", {
                clientX: endX,
                clientY: endY,
                force: true,
              });
          });
        } else {
          throw new Error("Terminals not found");
        }
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

  it("should not crash when dragging connected modules (EvseSecurity -> EvseV2G -> EvseManager)", () => {
    // 1. Add EvseSecurity
    cy.get("[data-cy='modules-search']").type("EvseSecurity");
    cy.contains("div", "EvseSecurity").click({ force: true });
    cy.wait(500);
    dragModule("EvseSecurity", 100, 100);

    // 2. Add EvseV2G
    cy.get("[data-cy='modules-search']").clear().type("EvseV2G");
    cy.contains("div", "EvseV2G").click({ force: true });
    cy.wait(500);
    dragModule("EvseV2G", 450, 100);

    // 3. Add EvseManager
    cy.get("[data-cy='modules-search']").clear().type("EvseManager");
    cy.contains("div", "EvseManager").click({ force: true });
    cy.wait(500);
    dragModule("EvseManager", 800, 100);

    // 4. Connect EvseV2G (req: security) -> EvseSecurity (prov: main)
    cy.window().then((win) => {
      const stage = getStage(win);
      const v2gView = Object.values(stage._module_views).find(
        (v) => v._vm.type === "EvseV2G",
      );
      const secView = Object.values(stage._module_views).find(
        (v) => v._vm.type === "EvseSecurity",
      );

      if (!v2gView || !secView) {
        throw new Error("Required module views not found on stage");
      }

      const reqIndex = v2gView._vm.terminal_lookup.findIndex(
        (t: any) => t.terminal.id === "security",
      );
      const provIndex = secView._vm.terminal_lookup.findIndex(
        (t: any) => t.terminal.id === "main",
      );

      const reqTerminal = v2gView._vm.terminal_lookup[reqIndex].terminal;
      const provTerminal = secView._vm.terminal_lookup[provIndex].terminal;

      // Programmatically create connection
      stage.context.clicked_terminal(reqTerminal, v2gView._vm._instance_id);
      stage.context.clicked_terminal(provTerminal, secView._vm._instance_id);
    });

    cy.wait(500);

    // 5. Connect EvseManager (req: hlc) -> EvseV2G (prov: charger)
    cy.window().then((win) => {
      const stage = getStage(win);
      const mgrView = Object.values(stage._module_views).find(
        (v) => v._vm.type === "EvseManager",
      );
      const v2gView = Object.values(stage._module_views).find(
        (v) => v._vm.type === "EvseV2G",
      );

      if (!mgrView || !v2gView) {
        throw new Error("Required module views not found on stage");
      }

      const reqIndex = mgrView._vm.terminal_lookup.findIndex(
        (t: any) => t.terminal.id === "hlc",
      );
      const provIndex = v2gView._vm.terminal_lookup.findIndex(
        (t: any) => t.terminal.id === "charger",
      );

      const reqTerminal = mgrView._vm.terminal_lookup[reqIndex].terminal;
      const provTerminal = v2gView._vm.terminal_lookup[provIndex].terminal;

      // Programmatically create connection
      stage.context.clicked_terminal(reqTerminal, mgrView._vm._instance_id);
      stage.context.clicked_terminal(provTerminal, v2gView._vm._instance_id);
    });

    cy.wait(500);

    // Verify connections exist
    cy.window().then((win) => {
      const stage = getStage(win);
      const connectionCount = stage._conn_man.connections.length;
      expect(connectionCount).to.be.gte(
        2,
        "Two connections should be established",
      );
    });

    // 6. Drag EvseV2G (middle node)
    dragModule("EvseV2G", 400, 200);
    cy.wait(500);

    // Clear search to ensure EvseV2G is visible in the list (if we are checking the list)
    cy.get("[data-cy='modules-search']").clear();
    cy.contains("div", "EvseV2G").should("exist");

    // 7. Drag EvseManager
    dragModule("EvseManager", 800, 200);
    cy.wait(500);
    cy.contains("div", "EvseManager").should("exist");

    // 8. Drag EvseSecurity
    dragModule("EvseSecurity", 100, 200);
    cy.wait(500);
    cy.contains("div", "EvseSecurity").should("exist");
  });
});
