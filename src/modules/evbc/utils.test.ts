// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { smart_increment_name, default_terminals } from "./utils";
import { describe, it, expect } from "vitest";
import { EverestModuleDefinition } from ".";

describe("smart_increment_name", () => {
  it("appends (1) if name exists", () => {
    expect(smart_increment_name("ModA", ["ModA"])).toBe("ModA (1)");
  });

  it("increments number if (1) exists", () => {
    expect(smart_increment_name("ModA", ["ModA", "ModA (1)"])).toBe("ModA (2)");
  });

  it("fills the first available gap in the sequence", () => {
    // (2) is missing, so it should come before (3)
    expect(smart_increment_name("ModA", ["ModA", "ModA (1)", "ModA (3)"])).toBe("ModA (2)");
  });

  it("returns original name if it is already unique", () => {
    expect(smart_increment_name("ModB", ["ModA"])).toBe("ModB");
  });

  it("increments suffix when base with suffix already exists", () => {
    expect(smart_increment_name("ModA (1)", ["ModA (1)"])).toBe("ModA (2)");
  });

  // FR-009 collision-loop: pasting "EVSC (1)" when "EVSC (2)" already exists → "EVSC (3)"
  it("skips already-occupied increment when pasting a suffixed name (FR-009)", () => {
    expect(smart_increment_name("EVSC (1)", ["EVSC (1)", "EVSC (2)"])).toBe("EVSC (3)");
  });

  // US2/SC-004: cut module name returns unchanged when name no longer exists (module was deleted before paste)
  it("returns name unchanged when it is not in the existing list (Cut/Paste first paste)", () => {
    expect(smart_increment_name("EVSC", [])).toBe("EVSC");
  });
});

// Helper to build a minimal EverestModuleDefinition with n requires and m provides.
function make_module(n_requires: number, n_provides: number): EverestModuleDefinition {
  const requires: EverestModuleDefinition["requires"] = {};
  for (let i = 0; i < n_requires; i++) requires[`req_${i}`] = { interface: `iface_req_${i}` };
  const provides: EverestModuleDefinition["provides"] = {};
  for (let i = 0; i < n_provides; i++) provides[`prov_${i}`] = { interface: `iface_prov_${i}`, description: "" };
  return { description: "", requires, provides, metadata: { license: "Apache-2.0", authors: [] } };
}

describe("default_terminals – edge distribution", () => {
  it("places requires on left and provides on right when both fit within limits", () => {
    const arr = default_terminals(make_module(3, 3));
    expect(arr.left?.length).toBe(3);
    expect(arr.right?.length).toBe(3);
    expect(arr.top?.length).toBe(0);
    expect(arr.bottom?.length).toBe(0);
    arr.left?.forEach((t) => expect(t.type).toBe("requirement"));
    arr.right?.forEach((t) => expect(t.type).toBe("provide"));
  });

  it("overflows the 6th require from left to top (clockwise: left→top)", () => {
    // 5 requires fit on left; the 6th overflows to top.
    const arr = default_terminals(make_module(6, 0));
    expect(arr.left?.length).toBe(5);
    expect(arr.top?.length).toBe(1);
    expect(arr.right?.length).toBe(0);
    expect(arr.bottom?.length).toBe(0);
  });

  it("overflows the 6th provide from right to bottom (clockwise: right→bottom)", () => {
    // 5 provides fit on right; the 6th overflows to bottom.
    const arr = default_terminals(make_module(0, 6));
    expect(arr.right?.length).toBe(5);
    expect(arr.bottom?.length).toBe(1);
    expect(arr.left?.length).toBe(0);
    expect(arr.top?.length).toBe(0);
  });

  it("continues overflow: require fills left(5)+top(10)+right(5)=20, remainder goes to bottom", () => {
    const arr = default_terminals(make_module(21, 0));
    expect(arr.left?.length).toBe(5);
    expect(arr.top?.length).toBe(10);
    expect(arr.right?.length).toBe(5);
    expect(arr.bottom?.length).toBe(1);
  });

  it("scales limits when count exceeds 30 (evenly distributed, no truncation)", () => {
    // 31 requires → short_limit=6, long_limit=11 (total capacity 34 ≥ 31).
    // Distribution: left(6) + top(11) + right(6) + bottom(8) = 31.
    const arr = default_terminals(make_module(31, 0));
    const total = (arr.left?.length ?? 0) + (arr.top?.length ?? 0) + (arr.right?.length ?? 0) + (arr.bottom?.length ?? 0);
    expect(total).toBe(31);
    // All should be requirement type.
    [...(arr.left ?? []), ...(arr.top ?? []), ...(arr.right ?? []), ...(arr.bottom ?? [])].forEach((t) =>
      expect(t.type).toBe("requirement"),
    );
  });

  it("module with no requires or provides produces an empty arrangement", () => {
    const arr = default_terminals(make_module(0, 0));
    expect(arr.left?.length).toBe(0);
    expect(arr.right?.length).toBe(0);
    expect(arr.top?.length).toBe(0);
    expect(arr.bottom?.length).toBe(0);
  });

  it("each terminal type overflows independently (provides and requires do not interfere)", () => {
    // 5 requires on left, 1 overflow require on top.
    // 5 provides on right, 1 overflow provide on bottom.
    const arr = default_terminals(make_module(6, 6));
    expect(arr.left?.length).toBe(5);
    expect(arr.top?.length).toBe(1);
    expect(arr.right?.length).toBe(5);
    expect(arr.bottom?.length).toBe(1);
    arr.top?.forEach((t) => expect(t.type).toBe("requirement"));
    arr.bottom?.forEach((t) => expect(t.type).toBe("provide"));
  });
});
