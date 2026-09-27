// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/**
 * Drag-Connect UX E2E tests — T021 (click-to-connect) + T027 (drag-to-connect)
 *
 * ── Coordinate baseline (GRID=24px, FRAME=288×144px, TERMINAL=24px) ──────────
 *
 *  YetiDriver0 spawns at grid(0,0) → stage(0,0)
 *    Frame                            : (0,0)–(288,144)
 *    board_support  [provide, #0/4]   : stage (300, 18)   ← right terminal zone
 *    powermeter     [provide, #2/4]   : stage (300, 90)
 *
 *  EvseManager0 spawns at grid(1,1) → stage(24,24)
 *    After separating (drag unique body at 300,156 → 700,300):
 *      new position                   : stage (432, 168)
 *      Frame                          : (432,168)–(720,312)
 *      left terminal x                : 432 − 12 = 420
 *      bsp [require, #1/11, left]     : stage (420, 188)   [168 + 1.5×144/11 ≈ 188]
 *      Module body centre             : stage (576, 240)
 *
 * ── Connection verification ──────────────────────────────────────────────────
 *  Connections are verified by opening the config-preview dialog and asserting
 *  that the YAML text contains the expected module_id and implementation_id
 *  entries (config preview: #show-preview-button / [data-cy="config-preview-component"]).
 */

// ─── Stage-relative coordinates ─────────────────────────────────────────────
/** YetiDriver0 board_support provide terminal (right side, index 0 of 4). */
const YETI_BOARD = { x: 300, y: 18 };

/** EvseManager0 bsp require terminal after separation (left side, index 1 of 11). */
const EVSE_BSP = { x: 420, y: 188 };

/** EvseManager0 frame body centre after separation — not a terminal zone. */
const EVSE_BODY = { x: 576, y: 240 };

/** Empty canvas area — guaranteed free of modules. */
const EMPTY = { x: 900, y: 600 };

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Drag EvseManager0 out of the default overlapping position so that:
 *   - YetiDriver0 stays at stage(0,0) with right terminals accessible at x≈300.
 *   - EvseManager0 moves to stage(432,168) with left terminals accessible at x≈420.
 *
 * Drag origin: unique EvseManager body pixel (300,156) — outside YetiDriver's
 * frame (x>288, y>144) and outside any terminal zone.
 * Final cursor position: (700,300) → group snap (432,168).
 */
const separateEvseManager = () => {
  cy.get(".konvajs-content")
    .trigger("mousedown", { button: 0, x: 300, y: 156, force: true })
    .wait(100)
    .trigger("mousemove", { x: 500, y: 220, force: true })
    .wait(100)
    .trigger("mousemove", { x: 700, y: 300, force: true })
    .wait(100)
    .trigger("mouseup", { x: 700, y: 300, force: true });
  cy.wait(300); // allow grid-snap + re-render
};

/** Open the config-preview dialog and return a chainable assertion on its text. */
const openPreview = () => {
  cy.get("#show-preview-button").click({ force: true });
  return cy.get('[data-cy="config-preview-component"]', { timeout: 5000 });
};

const closePreview = () => cy.get("body").type("{esc}");

// ─── Suite ───────────────────────────────────────────────────────────────────

describe("Drag-Connect UX", () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.connectToSimulator();
    cy.createConfig(`test-drag-connect-${Date.now()}`);
    cy.get('[data-cy="modules-expansion-panel"]')
      .parents(".v-expansion-panel")
      .should("not.have.class", "v-expansion-panel--disabled", {
        timeout: 10000,
      });
  });

  // ── T021-1: click-to-connect happy path ────────────────────────────────────
  it("click-to-connect happy path: click provide terminal then compatible requirement terminal creates connection", () => {
    cy.addModule("YetiDriver");
    cy.addModule("EvseManager");
    separateEvseManager();

    // Deselect any accidental module selection first
    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    // 1. Click YetiDriver board_support (provide) → enter selection state
    cy.get(".konvajs-content").click(YETI_BOARD.x, YETI_BOARD.y, {
      force: true,
    });
    cy.wait(300);

    // 2. Click EvseManager bsp (require) → connection created, canvas returns to idle
    cy.get(".konvajs-content").click(EVSE_BSP.x, EVSE_BSP.y, { force: true });
    cy.wait(300);

    openPreview()
      .should("contain.text", "module_id: YetiDriver0")
      .and("contain.text", "implementation_id: board_support");
    // cy.screenshot("T021-1-click-to-connect");
    closePreview();
  });

  // ── T021-2: left-panel connect ─────────────────────────────────────────────
  it("left-panel connect: click provide terminal then click module in left panel creates connection", () => {
    // Only one module on canvas — the second module is added via the left panel.
    cy.addModule("YetiDriver");

    // Deselect
    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    // Click board_support terminal → selection state → left panel filters to
    // show only module types that have a compatible interface (evse_board_support).
    cy.get(".konvajs-content").click(YETI_BOARD.x, YETI_BOARD.y, {
      force: true,
    });
    cy.wait(300);

    // EvseManager requires evse_board_support → appears in filtered list.
    // Clicking it adds EvseManager0 and immediately connects bsp to board_support.
    cy.get('[data-cy="module-list-item"]')
      .contains("EvseManager")
      .click({ force: true });
    cy.wait(500);

    // Separate EvseManager0 (grid(1,1) → stage(24,24)) from YetiDriver0 so the
    // connection line is visible in the canvas screenshot.
    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    separateEvseManager();

    // cy.screenshot("T021-2-left-panel-connect-canvas");

    openPreview()
      .should("contain.text", "module_id: YetiDriver0")
      .and("contain.text", "implementation_id: board_support");
    // cy.screenshot("T021-2-left-panel-connect-preview");
    closePreview();
  });

  // ── T021-3: multi-connection ───────────────────────────────────────────────
  it("multi-connection: second connection from same provide terminal succeeds", () => {
    cy.addModule("YetiDriver");

    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    // First connection: board_support → EvseManager0.bsp (via left panel)
    cy.get(".konvajs-content").click(YETI_BOARD.x, YETI_BOARD.y, {
      force: true,
    });
    cy.wait(300);
    cy.get('[data-cy="module-list-item"]')
      .contains("EvseManager")
      .click({ force: true });
    cy.wait(500);

    // Second connection: click the same terminal again
    // (EvseManager0 is now dimmed-exhausted; a new instance must be added)
    cy.get(".konvajs-content").click(YETI_BOARD.x, YETI_BOARD.y, {
      force: true,
    });
    cy.wait(300);
    cy.get('[data-cy="module-list-item"]')
      .contains("EvseManager")
      .click({ force: true });
    cy.wait(500);

    // Separate all three modules for visibility.
    // Z-order: YetiDriver0 (bottom), EvseManager0 (grid 1,1), EvseManager1 (grid 2,2, top).
    //
    // Step 1: grab EvseManager1 from its unique region — y > 168 (below EvseManager0 bottom
    //   edge), still inside EvseManager1 frame (48,48)–(336,192).  Point (200,180) is safe:
    //   inside EvseManager1 (48≤200≤336, 168<180≤192), outside YetiDriver0 and EvseManager0.
    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.get(".konvajs-content")
      .trigger("mousedown", { button: 0, x: 200, y: 180, force: true })
      .wait(100)
      .trigger("mousemove", { x: 400, y: 550, force: true })
      .wait(100)
      .trigger("mouseup", { x: 400, y: 550, force: true });
    cy.wait(300);
    //
    // Step 2: EvseManager1 is gone; now (300,156) is uniquely inside EvseManager0.
    separateEvseManager(); // moves EvseManager0 to ~stage(432,168)

    // cy.screenshot("T021-3-multi-connection-canvas");

    // Both EvseManager instances should appear in config.
    // add_new_module_instance uses "ModuleType0", "ModuleType1" naming
    // (not the copy-paste "smart increment" EvseManager0 (1) format).
    openPreview()
      .should("contain.text", "module_id: YetiDriver0")
      .and("contain.text", "EvseManager0")
      .and("contain.text", "EvseManager1");
    // cy.screenshot("T021-3-multi-connection-preview");
    closePreview();
  });

  // ── T021-4: canvas-click cancellation ─────────────────────────────────────
  it("canvas-click cancellation: click provide terminal then click canvas background resets state", () => {
    cy.addModule("YetiDriver");
    cy.addModule("EvseManager");
    separateEvseManager();

    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    // Enter selection state
    cy.get(".konvajs-content").click(YETI_BOARD.x, YETI_BOARD.y, {
      force: true,
    });
    cy.wait(300);

    // Click background → selection cancelled, no connection created
    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(300);

    openPreview().should("not.contain.text", "module_id: YetiDriver0");
    // cy.screenshot("T021-4-canvas-click-cancellation");
    closePreview();
  });

  // ── T021-5: connection line visible after creation ─────────────────────────
  it("connection line visible after creation", () => {
    cy.addModule("YetiDriver");
    cy.addModule("EvseManager");
    separateEvseManager();

    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    // Create connection via click-to-connect
    cy.get(".konvajs-content").click(YETI_BOARD.x, YETI_BOARD.y, {
      force: true,
    });
    cy.wait(300);
    cy.get(".konvajs-content").click(EVSE_BSP.x, EVSE_BSP.y, { force: true });
    cy.wait(500);

    // Connection line is drawn on the Konva canvas; verify it exists in config state
    openPreview()
      .should("contain.text", "bsp:")
      .and("contain.text", "implementation_id: board_support")
      .and("contain.text", "module_id: YetiDriver0");
    // cy.screenshot("T021-5-connection-line-visible");
    closePreview();
  });

  // ── T027-1: drag-to-compatible-terminal ───────────────────────────────────
  it("drag-to-compatible-terminal: drag provide terminal over requirement terminal creates connection", () => {
    cy.addModule("YetiDriver");
    cy.addModule("EvseManager");
    separateEvseManager();

    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    cy.get(".konvajs-content")
      // Press on board_support terminal → selection state entered via mousedown
      .trigger("mousedown", {
        button: 0,
        x: YETI_BOARD.x,
        y: YETI_BOARD.y,
        force: true,
      })
      .wait(50)
      // Small move (>3px) to cross Konva drag threshold → dragstart fires → stopDrag()
      // suppresses native drag; DragPreviewOverlay created; window mouseup registered
      .trigger("mousemove", {
        x: YETI_BOARD.x + 5,
        y: YETI_BOARD.y,
        force: true,
      })
      .wait(50)
      // Move to target terminal — updates _last_drag_pos via container mousemove listener
      .trigger("mousemove", { x: EVSE_BSP.x, y: EVSE_BSP.y, force: true })
      .wait(200) // allow RAF to flush DragPreviewOverlay update
      // Release → window mouseup fires → _terminal_dragend_handler resolves drop
      // stage.getIntersection({x:420,y:188}) returns EvseManager bsp TerminalShape
      .trigger("mouseup", { x: EVSE_BSP.x, y: EVSE_BSP.y, force: true });
    cy.wait(500);

    openPreview()
      .should("contain.text", "module_id: YetiDriver0")
      .and("contain.text", "implementation_id: board_support");
    // cy.screenshot("T027-1-drag-to-terminal");
    closePreview();
  });

  // ── T027-2: drag-release-on-module-body ───────────────────────────────────
  it("drag-release-on-module-body: drag and release on module frame connects to nearest compatible terminal", () => {
    cy.addModule("YetiDriver");
    cy.addModule("EvseManager");
    separateEvseManager();

    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    cy.get(".konvajs-content")
      .trigger("mousedown", {
        button: 0,
        x: YETI_BOARD.x,
        y: YETI_BOARD.y,
        force: true,
      })
      .wait(50)
      .trigger("mousemove", {
        x: YETI_BOARD.x + 5,
        y: YETI_BOARD.y,
        force: true,
      })
      .wait(50)
      // Move to EvseManager body centre — updates _last_drag_pos
      .trigger("mousemove", { x: EVSE_BODY.x, y: EVSE_BODY.y, force: true })
      .wait(200)
      // Release on body: getIntersection returns the frame Rect; dragend walks up to
      // EvseManager group and finds the nearest compatible terminal (bsp, evse_board_support)
      .trigger("mouseup", { x: EVSE_BODY.x, y: EVSE_BODY.y, force: true });
    cy.wait(500);

    openPreview()
      .should("contain.text", "module_id: YetiDriver0")
      .and("contain.text", "implementation_id: board_support");
    // cy.screenshot("T027-2-drag-to-module-body");
    closePreview();
  });

  // ── T027-3: drag-cancel ───────────────────────────────────────────────────
  it("drag-cancel: drag and release on empty canvas area creates no connection", () => {
    cy.addModule("YetiDriver");
    cy.addModule("EvseManager");
    separateEvseManager();

    cy.get(".konvajs-content").click(EMPTY.x, EMPTY.y, { force: true });
    cy.wait(200);

    cy.get(".konvajs-content")
      .trigger("mousedown", {
        button: 0,
        x: YETI_BOARD.x,
        y: YETI_BOARD.y,
        force: true,
      })
      .wait(50)
      .trigger("mousemove", {
        x: YETI_BOARD.x + 5,
        y: YETI_BOARD.y,
        force: true,
      })
      .wait(50)
      // Move to empty canvas area — stage.getIntersection returns null on release
      .trigger("mousemove", { x: EMPTY.x, y: EMPTY.y, force: true })
      .wait(200)
      // Release on empty area → _terminal_dragend_handler calls unselect(), no connection
      .trigger("mouseup", { x: EMPTY.x, y: EMPTY.y, force: true });
    cy.wait(500);

    openPreview().should("not.contain.text", "module_id: YetiDriver0");
    // cy.screenshot("T027-3-drag-cancel");
    closePreview();
  });
});
