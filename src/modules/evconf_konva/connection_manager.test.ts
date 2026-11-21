// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { describe, it, expect, vi, beforeEach } from "vitest";

// ─── Konva mock ──────────────────────────────────────────────────────────────
vi.mock("konva", () => {
  class MockGroup {
    _children: unknown[] = [];
    add(...c: unknown[]) {
      this._children.push(...c);
    }
    on() {}
  }
  class MockLine {
    on() {}
    points(_?: number[]) {}
    stroke(_?: string) {}
    strokeWidth(_?: number) {}
    destroy() {}
    to(_: unknown) {}
  }
  return { default: { Group: MockGroup, Line: MockLine } };
});

// ─── Mock ConnectionShape ─────────────────────────────────────────────────────
vi.mock("./views/shapes/connection", () => {
  class ConnectionShape {
    on() {}
    destroy() {}
    set_dimmed(_: boolean) {}
    opacity(_?: number) {
      return 1;
    }
    update_terminals() {}
  }
  return { ConnectionShape };
});

// ─── Mock vuetify (transitively imported) ─────────────────────────────────────
vi.mock("@/plugins/vuetify", () => ({
  currentTheme: { colors: { secondary: "#546e7a", "on-secondary": "#ffffff" } },
}));

// ─── Imports after mocks ──────────────────────────────────────────────────────
import ConnectionManager from "./connection_manager";
import type ModuleView from "./views/module";

/**
 * Build a minimal ModuleView stub that ConnectionManager can use.
 * `instance_id` sets the numeric ID of the underlying module.
 */
function makeModuleView(instance_id: number, terminal_count = 2): ModuleView {
  const stub = {
    _vm: { _instance_id: instance_id },
    _terminal_views: Array.from({ length: terminal_count }, () => ({
      x: () => 0,
      y: () => 0,
      terminal_alignment: "top" as const,
    })),
    get_terminal_placement: (_id: number) => ({ x: 0, y: 0, alignment: "top" as const }),
    add_observer: (_fn: unknown) => () => {},
  } as unknown as ModuleView;
  return stub;
}

/** Build a null context (ConnectionManager only uses it for event forwarding). */
function makeContext() {
  return {
    container: { style: { cursor: "" } },
    clicked_connection: vi.fn(),
  } as unknown as import("./stage_context").default;
}

describe("ConnectionManager — is_connected_pair (T005)", () => {
  let cm: ConnectionManager;
  let provView: ModuleView;
  let reqView: ModuleView;

  beforeEach(() => {
    cm = new ConnectionManager(makeContext());
    provView = makeModuleView(1, 2);
    reqView = makeModuleView(2, 2);
  });

  it("returns false before any connections are added", () => {
    expect(cm.is_connected_pair(provView, 0, reqView, 1)).toBe(false);
  });

  it("returns true after the matching connection is added", () => {
    cm.add_connection(
      42,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    expect(cm.is_connected_pair(provView, 0, reqView, 1)).toBe(true);
  });

  it("returns false when the provide module does not match", () => {
    const other = makeModuleView(3);
    cm.add_connection(
      42,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    expect(cm.is_connected_pair(other, 0, reqView, 1)).toBe(false);
  });

  it("returns false when the provide terminal index does not match", () => {
    cm.add_connection(
      42,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    expect(cm.is_connected_pair(provView, 1, reqView, 1)).toBe(false);
  });

  it("returns false after the connection is deleted", () => {
    cm.add_connection(
      42,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    cm.delete_connection(42);
    expect(cm.is_connected_pair(provView, 0, reqView, 1)).toBe(false);
  });
});

describe("ConnectionManager — get_connections_for_terminal (T005)", () => {
  let cm: ConnectionManager;
  let provView: ModuleView;
  let reqView: ModuleView;

  beforeEach(() => {
    cm = new ConnectionManager(makeContext());
    provView = makeModuleView(10, 2);
    reqView = makeModuleView(20, 2);
  });

  it("returns empty arrays for a module view with no connections", () => {
    const result = cm.get_connections_for_terminal(provView, 0);
    expect(result.connected_instance_ids).toEqual([]);
    expect(result.connected_terminal_lookup_ids).toEqual([]);
  });

  it("returns empty arrays for an unregistered module view", () => {
    const unregistered = makeModuleView(99);
    const result = cm.get_connections_for_terminal(unregistered, 0);
    expect(result.connected_instance_ids).toEqual([]);
    expect(result.connected_terminal_lookup_ids).toEqual([]);
  });

  it("returns connected instance ID and lookup ID from the provide side", () => {
    cm.add_connection(
      55,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    const result = cm.get_connections_for_terminal(provView, 0);
    expect(result.connected_instance_ids).toContain(20);
    expect(result.connected_terminal_lookup_ids).toContain(1);
  });

  it("returns connected instance ID and lookup ID from the requirement side", () => {
    cm.add_connection(
      55,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    const result = cm.get_connections_for_terminal(reqView, 1);
    expect(result.connected_instance_ids).toContain(10);
    expect(result.connected_terminal_lookup_ids).toContain(0);
  });

  it("returns all connections when terminal has multiple", () => {
    const reqView2 = makeModuleView(30, 2);
    cm.add_connection(
      55,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    cm.add_connection(
      56,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView2, terminal_lookup_id: 0 },
    );
    const result = cm.get_connections_for_terminal(provView, 0);
    expect(result.connected_instance_ids).toHaveLength(2);
    expect(result.connected_instance_ids).toContain(20);
    expect(result.connected_instance_ids).toContain(30);
  });

  it("returns empty arrays after the connection is deleted", () => {
    cm.add_connection(
      55,
      { module_view: provView, terminal_lookup_id: 0 },
      { module_view: reqView, terminal_lookup_id: 1 },
    );
    cm.delete_connection(55);
    const result = cm.get_connections_for_terminal(provView, 0);
    expect(result.connected_instance_ids).toEqual([]);
  });
});
