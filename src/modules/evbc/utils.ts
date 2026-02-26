// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { EverestInterfaceDefinitionList, EverestModuleDefinition, Terminal, TerminalArrangement } from ".";

export type InterfaceParentMap = Record<string, Set<string>>;

export function generate_interface_parents_map(interface_definitions: EverestInterfaceDefinitionList) {
  // FIXME (aw): still looks ugly
  const interface_parents: InterfaceParentMap = {};

  Object.keys(interface_definitions).forEach((interface_name) => {
    const parents: Set<string> = new Set();

    function recurse(name: string) {
      const parent = interface_definitions[name].parent;
      if (parent) {
        parents.add(parent);
        recurse(parent);
      }
    }

    recurse(interface_name);

    interface_parents[interface_name] = parents;
  });

  return interface_parents;
}

export function smart_increment_name(original_name: string, existing_names: string[]): string {
  // If original name doesn't exist, use it directly
  if (!existing_names.includes(original_name)) {
    return original_name;
  }

  // Regex to match " (n)" suffix at end of string
  const regex = /^(.*) \((\d+)\)$/;
  const match = original_name.match(regex);

  let base: string;
  let start_n: number;

  if (match) {
    base = match[1];
    start_n = parseInt(match[2], 10) + 1;
  } else {
    base = original_name;
    start_n = 1;
  }

  // Iterate until available
  let n = start_n;
  while (true) {
    const candidate = `${base} (${n})`;
    if (!existing_names.includes(candidate)) {
      return candidate;
    }
    n++;
  }
}

/**
 * Base per-edge capacity limits for the default terminal layout.
 * Left/right edges are narrower (shorter), top/bottom are wider (longer).
 *
 * When a terminal type has more terminals than the base capacity allows, limits
 * are expanded using a proportional formula derived from treating the perimeter
 * as 6 equal "slots" (1 left + 2 top + 1 right + 2 bottom):
 *   short sides (left/right): 5 + ceil(max_count / 6 − 5)
 *   long  sides (top/bottom): 10 + ceil(2·max_count / 6 − 10)
 * A floor of the base value is kept so small counts are never shrunk.
 */
const BASE_EDGE_LIMITS: Record<"left" | "right" | "top" | "bottom", number> = {
  left: 5,
  right: 5,
  top: 10,
  bottom: 10,
};

/**
 * Clockwise overflow paths for each terminal type.
 *
 * Requirement terminals start on the left; overflow goes clockwise:
 *   left → top → right → bottom → (cycle)
 *
 * Provide terminals start on the right; overflow goes clockwise:
 *   right → bottom → left → top → (cycle)
 */
const REQUIRE_PATH = ["left", "top", "right", "bottom"] as const;
const PROVIDE_PATH = ["right", "bottom", "left", "top"] as const;

type EdgeKey = "left" | "right" | "top" | "bottom";

function distribute_along_path(
  terminals: Terminal[],
  path: readonly EdgeKey[],
  limits: Record<EdgeKey, number>,
  arrangement: TerminalArrangement,
): void {
  let path_idx = 0;
  let count_on_edge = 0;

  for (const terminal of terminals) {
    // Advance to the next edge when the current one is full.
    while (count_on_edge >= limits[path[path_idx]]) {
      path_idx = (path_idx + 1) % path.length;
      count_on_edge = 0;
    }
    (arrangement[path[path_idx]] as Terminal[]).push(terminal);
    count_on_edge++;
  }
}

export function default_terminals(module_definition: EverestModuleDefinition): TerminalArrangement {
  const require_terminals: Array<Terminal> = [];
  if (module_definition.requires) {
    Object.entries(module_definition.requires).forEach(([key, value]) =>
      require_terminals.push(Object.freeze({ id: key, interface: value.interface, type: "requirement" })),
    );
  }

  const provide_terminals: Array<Terminal> = [];
  if (module_definition.provides) {
    Object.entries(module_definition.provides).forEach(([key, value]) =>
      provide_terminals.push(Object.freeze({ id: key, interface: value.interface, type: "provide" })),
    );
  }

  // Compute per-edge limits using the slot-proportional formula.
  // For counts ≤ 30 both formulas yield 0 extra slots, preserving the base values.
  const max_count = Math.max(require_terminals.length, provide_terminals.length);
  const short_limit =
    BASE_EDGE_LIMITS.left + Math.max(0, Math.ceil(max_count / 6 - BASE_EDGE_LIMITS.left));
  const long_limit =
    BASE_EDGE_LIMITS.top + Math.max(0, Math.ceil((2 * max_count) / 6 - BASE_EDGE_LIMITS.top));
  const limits: Record<EdgeKey, number> = {
    left: short_limit,
    right: short_limit,
    top: long_limit,
    bottom: long_limit,
  };

  const arrangement: TerminalArrangement = { top: [], right: [], bottom: [], left: [] };

  distribute_along_path(require_terminals, REQUIRE_PATH, limits, arrangement);
  distribute_along_path(provide_terminals, PROVIDE_PATH, limits, arrangement);

  return arrangement;
}
