// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { EverestInterfaceDefinitionList, EverestModuleDefinition, Terminal, TerminalArrangement, } from ".";

export type InterfaceParentMap = Record<string, Set<string>>;

export function generate_interface_parents_map( interface_definitions: EverestInterfaceDefinitionList, ) {
  // FIXME (aw): still looks ugly
  const interface_parents: InterfaceParentMap = {};

  Object.keys( interface_definitions, ).forEach( ( interface_name, ) => {
    const parents: Set<string> = new Set();

    function recurse( name: string, ) {
      const parent = interface_definitions[name].parent;
      if ( parent ) {
        parents.add( parent, );
        recurse( parent, );
      }
    }

    recurse( interface_name, );

    interface_parents[interface_name] = parents;
  }, );

  return interface_parents;
}

export function default_terminals( module_definition: EverestModuleDefinition, ): TerminalArrangement {
  const left_terminals: Array<Terminal> = [];
  if ( module_definition.requires ) {
    // FIXME (aw): is there another function, so we don't have to use [key]?
    Object.entries( module_definition.requires, ).forEach( ( [ key, value, ], ) =>
      left_terminals.push(
        Object.freeze( {
          id: key,
          interface: value.interface,
          type: "requirement",
        }, ),
      ), );
  }
  const right_terminals: Array<Terminal> = [];
  if ( module_definition.provides ) {
    Object.entries( module_definition.provides, ).forEach( ( [ key, value, ], ) =>
      right_terminals.push(
        Object.freeze( {
          id: key,
          interface: value.interface,
          type: "provide",
        }, ),
      ), );
  }

  return {
    top: [],
    right: right_terminals,
    bottom: [],
    left: left_terminals,
  };
}
