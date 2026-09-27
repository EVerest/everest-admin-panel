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

export function default_terminals(module_definition: EverestModuleDefinition): TerminalArrangement {
  const left_terminals: Array<Terminal> = [];
  if (module_definition.requires) {
    // FIXME (aw): is there another function, so we don't have to use [key]?
    Object.entries(module_definition.requires).forEach(([key, value]) =>
      left_terminals.push(
        Object.freeze({
          id: key,
          interface: value.interface,
          type: "requirement",
        }),
      ),
    );
  }
  const right_terminals: Array<Terminal> = [];
  if (module_definition.provides) {
    Object.entries(module_definition.provides).forEach(([key, value]) =>
      right_terminals.push(
        Object.freeze({
          id: key,
          interface: value.interface,
          type: "provide",
        }),
      ),
    );
  }

  return {
    top: [],
    right: right_terminals,
    bottom: [],
    left: left_terminals,
  };
}
