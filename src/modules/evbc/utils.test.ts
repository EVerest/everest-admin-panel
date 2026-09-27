// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { smart_increment_name } from "./utils";
import { describe, it, expect } from "vitest";

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
