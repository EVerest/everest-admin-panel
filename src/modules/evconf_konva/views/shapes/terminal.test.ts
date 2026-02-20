// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { describe, it, expect, vi, beforeEach } from "vitest";

// ─── Inline Konva mock ────────────────────────────────────────────────────────
// TerminalShape extends Konva.Path. We mock Konva before anything else so that
// the import machinery wires our stub class as the base class.
vi.mock("konva", () => {
  class MockPath {
    _attrs: Record<string, unknown>;
    constructor(config: Record<string, unknown> = {}) {
      this._attrs = { ...config };
    }
    data(v?: string) {
      if (v !== undefined) this._attrs.data = v;
      return this._attrs.data as string;
    }
    fill(v?: string) {
      if (v !== undefined) this._attrs.fill = v;
      return this._attrs.fill as string;
    }
    scaleX(v?: number) {
      if (v !== undefined) this._attrs.scaleX = v;
      return (this._attrs.scaleX ?? 1) as number;
    }
    scaleY(v?: number) {
      if (v !== undefined) this._attrs.scaleY = v;
      return (this._attrs.scaleY ?? 1) as number;
    }
    opacity(v?: number) {
      if (v !== undefined) this._attrs.opacity = v;
      return (this._attrs.opacity ?? 1) as number;
    }
    /** Simulates Konva's node.to({ ... }) by immediately applying attrs. */
    to(attrs: Record<string, unknown>) {
      Object.assign(this._attrs, attrs);
    }
    rotation(_v?: number) {}
    setAttr(key: string, value: unknown) {
      this._attrs[key] = value;
    }
    getAttr(key: string) {
      return this._attrs[key];
    }
    listening(_v?: boolean) {}
  }

  return { default: { Path: MockPath } };
});

// Mock the vuetify plugin (imported transitively via constants.ts).
vi.mock("@/plugins/vuetify", () => ({
  currentTheme: {
    colors: {
      secondary: "#546e7a",
      warning: "#fb8c00",
      "module-primary": "#37474f",
      "on-secondary": "#ffffff",
    },
  },
}));

// ─── Subject under test (imported AFTER mocks are registered) ────────────────
import { TerminalShape } from "./terminal";
import { ICON_DATA, COLOR } from "../constants";

function makeTerminal(type: "provide" | "requirement") {
  return new TerminalShape({ terminal_type: type, terminal_id: 0, terminal_alignment: "top" });
}

describe("TerminalShape — constructor (T007)", () => {
  it("selects TERMINAL_PROVIDE icon for provide terminal", () => {
    const t = makeTerminal("provide");
    expect(t.data()).toBe(ICON_DATA.TERMINAL_PROVIDE);
  });

  it("selects TERMINAL_REQUIREMENT icon for requirement terminal", () => {
    const t = makeTerminal("requirement");
    expect(t.data()).toBe(ICON_DATA.TERMINAL_REQUIREMENT);
  });

  it("uses TERMINAL_PROVIDE fill color for provide terminal", () => {
    const t = makeTerminal("provide");
    expect(t.fill()).toBe(COLOR.TERMINAL_PROVIDE);
  });

  it("uses TERMINAL_REQUIREMENT fill color for requirement terminal", () => {
    const t = makeTerminal("requirement");
    expect(t.fill()).toBe(COLOR.TERMINAL_REQUIREMENT);
  });
});

describe("TerminalShape — set_visual_state (T009)", () => {
  let provide: TerminalShape;
  let require_: TerminalShape;

  beforeEach(() => {
    provide = makeTerminal("provide");
    require_ = makeTerminal("requirement");
  });

  // idle-unconnected
  it("idle-unconnected: provide shows TERMINAL_PROVIDE icon, scale 1×, opacity 1", () => {
    provide.set_visual_state("idle-unconnected");
    expect(provide.data()).toBe(ICON_DATA.TERMINAL_PROVIDE);
    expect((provide as any)._attrs.scaleX).toBe(1);
    expect((provide as any)._attrs.opacity).toBe(1);
  });

  it("idle-unconnected: requirement shows TERMINAL_REQUIREMENT icon", () => {
    require_.set_visual_state("idle-unconnected");
    expect(require_.data()).toBe(ICON_DATA.TERMINAL_REQUIREMENT);
  });

  // idle-connected
  it("idle-connected: provide shows TERMINAL_PROVIDE_CONNECTED icon", () => {
    provide.set_visual_state("idle-connected");
    expect(provide.data()).toBe(ICON_DATA.TERMINAL_PROVIDE_CONNECTED);
  });

  it("idle-connected: requirement shows TERMINAL_REQUIREMENT_CONNECTED icon", () => {
    require_.set_visual_state("idle-connected");
    expect(require_.data()).toBe(ICON_DATA.TERMINAL_REQUIREMENT_CONNECTED);
  });

  it("idle-connected: scale stays 1× and opacity stays 1", () => {
    provide.set_visual_state("idle-connected");
    expect((provide as any)._attrs.scaleX).toBe(1);
    expect((provide as any)._attrs.opacity).toBe(1);
  });

  // selected
  it("selected: scale set to 1.5×", () => {
    provide.set_visual_state("selected");
    expect((provide as any)._attrs.scaleX).toBe(1.5);
    expect((provide as any)._attrs.scaleY).toBe(1.5);
  });

  it("selected: opacity is 1", () => {
    provide.set_visual_state("selected");
    expect((provide as any)._attrs.opacity).toBe(1);
  });

  // compatible-target
  it("compatible-target: scale set to 1.5×", () => {
    provide.set_visual_state("compatible-target");
    expect((provide as any)._attrs.scaleX).toBe(1.5);
    expect((provide as any)._attrs.scaleY).toBe(1.5);
  });

  it("compatible-target: opacity is 1", () => {
    provide.set_visual_state("compatible-target");
    expect((provide as any)._attrs.opacity).toBe(1);
  });

  // dimmed states
  it("dimmed-same-module: opacity 0.25 and scale 1×", () => {
    provide.set_visual_state("dimmed-same-module");
    expect((provide as any)._attrs.opacity).toBe(0.25);
    expect((provide as any)._attrs.scaleX).toBe(1);
  });

  it("dimmed-incompatible: opacity 0.25", () => {
    require_.set_visual_state("dimmed-incompatible");
    expect((require_ as any)._attrs.opacity).toBe(0.25);
  });

  it("dimmed-exhausted: opacity 0.25", () => {
    require_.set_visual_state("dimmed-exhausted");
    expect((require_ as any)._attrs.opacity).toBe(0.25);
  });

  // icon revert — idle-connected → idle-unconnected
  it("reverts from idle-connected to idle-unconnected icon when state changes", () => {
    provide.set_visual_state("idle-connected");
    expect(provide.data()).toBe(ICON_DATA.TERMINAL_PROVIDE_CONNECTED);
    provide.set_visual_state("idle-unconnected");
    expect(provide.data()).toBe(ICON_DATA.TERMINAL_PROVIDE);
  });
});
