// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { ConnectionID, TerminalType } from "../evbc";
import ConfigStageContext from "./stage_context";
import ModuleView from "./views/module";
import { ConnectionShape } from "./views/shapes/connection";

type ConnectionItem = {
  id: ConnectionID;
  view: ConnectionShape;
};

type TerminalConnections = {
  type: TerminalType;
  connections: ConnectionItem[];
};

type ModuleLookupItem = {
  view: ModuleView;
  terminal_lookup: TerminalConnections[];
};

type ModuleLookup = Array<ModuleLookupItem>;

type ConnectionHalf = {
  module_view: ModuleView;
  terminal_lookup_id: number;
};

// type ConnectionLookup = Record<ModuleInstanceID, ConnectionItem[]>

export default class ConnectionManager {
  readonly group: Konva.Group;
  readonly connections: ConnectionItem[] = [];
  readonly _registered_modules: ModuleLookup = [];
  readonly _stage_context: ConfigStageContext;

  constructor(stage_context: ConfigStageContext) {
    this.group = new Konva.Group();
    this._stage_context = stage_context;
  }

  add_connection(id: ConnectionID, provide: ConnectionHalf, requirement: ConnectionHalf) {
    const providing_placement = provide.module_view.get_terminal_placement(provide.terminal_lookup_id);
    const requiring_placement = requirement.module_view.get_terminal_placement(requirement.terminal_lookup_id);

    const connection_view = new ConnectionShape({
      provide: providing_placement,
      requirement: requiring_placement,
      hitStrokeWidth: 12, // FIXME (aw): constant
    });

    const connection_item = {
      id,
      view: connection_view,
    };

    connection_view.on("pointerclick", () => this._stage_context.clicked_connection(id));
    connection_view.on("mouseenter", () => {
      this._stage_context.container.style.cursor = "pointer";
    });
    connection_view.on("mouseleave", () => {
      this._stage_context.container.style.cursor = "default";
    });

    this.connections.push(connection_item);

    this._insert_terminal_for_module_view(provide, connection_item, "provide");
    this._insert_terminal_for_module_view(requirement, connection_item, "requirement");

    this.group.add(connection_view);
  }

  delete_connection(id: ConnectionID) {
    const cxn_index = this.connections.findIndex((cxn) => cxn.id === id);
    const cxn_item = this.connections[cxn_index];
    cxn_item.view.destroy();
    this.connections.slice(cxn_index, 1);
  }

  // FIXME (aw): naming on half etc
  _insert_terminal_for_module_view(half: ConnectionHalf, connection_item: ConnectionItem, type: TerminalType) {
    const module = this._registered_modules.find((item) => item.view === half.module_view);

    if (module) {
      const terminal = module.terminal_lookup[half.terminal_lookup_id];
      if (terminal) {
        terminal.connections.push(connection_item);
      } else {
        module.terminal_lookup[half.terminal_lookup_id] = {
          type,
          connections: [connection_item],
        };
      }

      return;
    }

    const new_module: ModuleLookupItem = {
      view: half.module_view,
      terminal_lookup: Array(half.module_view._terminal_views.length),
    };

    new_module.terminal_lookup[half.terminal_lookup_id] = {
      type,
      connections: [connection_item],
    };

    this._registered_modules.push(new_module);

    new_module.view.add_observer((ev) => {
      if (ev.type === "TERMINALS_UPDATED") {
        const is_animated = ev.module_moved === false;
        ev.terminals.forEach((terminal) => {
          if (!new_module.terminal_lookup[terminal.id]) return;

          const { connections, type } = new_module.terminal_lookup[terminal.id];
          connections.forEach((cxn) => {
            // FIXME: couldn't we just reuse the whole placement here?
            if (type === "provide") {
              cxn.view.update_terminals(null, terminal, is_animated);
            } else {
              cxn.view.update_terminals(terminal, null, is_animated);
            }
          });
        });
      }
    });
  }
}
