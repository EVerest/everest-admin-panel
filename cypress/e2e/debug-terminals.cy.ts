describe("Debug Terminals", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (
        err.message.includes(
          "ResizeObserver loop completed with undelivered notifications",
        )
      ) {
        return false;
      }
    });
  });

  it("should log terminal structure", () => {
    cy.visit("/");
    cy.get("[data-cy='server-list-item']:nth-child(1)").click();
    cy.get("[data-cy='plus-create-config-btn']").click();
    cy.get("[data-cy='config-name-input']").type("debug-terminals");
    cy.get("[data-cy='accept-create-config-btn']").click();

    cy.contains("div", "EvseManager").click();
    cy.contains("div", "YetiDriver").click();
    cy.contains("div", "Auth").click();

    cy.wait(1000);

    cy.window().then((win: any) => {
      const stage = win.configStage;
      const yetiView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "YetiDriver",
      );
      const evseView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "EvseManager",
      );
      const authView = Object.values(stage._module_views).find(
        (v: any) => v._vm.type === "Auth",
      );

      // Log to console (visible in browser devtools, but we are headless)
      // Log to error to see in terminal?

      const yetiTerminals = yetiView._vm.terminal_lookup.map((t: any) => ({
        id: t.terminal.id,
        interface: t.terminal.interface,
        type: t.terminal.type,
      }));

      const evseTerminals = evseView._vm.terminal_lookup.map((t: any) => ({
        id: t.terminal.id,
        interface: t.terminal.interface,
        type: t.terminal.type,
      }));

      const authTerminals = authView._vm.terminal_lookup.map((t: any) => ({
        id: t.terminal.id,
        interface: t.terminal.interface,
        type: t.terminal.type,
      }));

      throw new Error(`
        Yeti Terminals: ${JSON.stringify(yetiTerminals, null, 2)}
        Evse Terminals: ${JSON.stringify(evseTerminals, null, 2)}
        Auth Terminals: ${JSON.stringify(authTerminals, null, 2)}
      `);
    });
  });
});
