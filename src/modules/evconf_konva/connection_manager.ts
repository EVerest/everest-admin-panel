// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { ConnectionID, ModuleInstanceID, TerminalType } from "../evbc";
import ConfigStageContext from "./stage_context";
import ModuleView from "./views/module";
import { ConnectionShape } from "./views/shapes/connection";
import { TerminalConnectionsResult } from "./types";

type ConnectionItem = {
  id: ConnectionID;
  view: ConnectionShape;
  provide: ConnectionHalf;
  requirement: ConnectionHalf;
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

    const connection_item: ConnectionItem = {
      id,
      view: connection_view,
      provide,
      requirement,
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
    if (cxn_index === -1) return;
    const cxn_item = this.connections[cxn_index];

    // Remove from terminal lookups on both sides so is_connected_pair stays accurate.
    [
      { module_view: cxn_item.provide.module_view, lookup_id: cxn_item.provide.terminal_lookup_id },
      { module_view: cxn_item.requirement.module_view, lookup_id: cxn_item.requirement.terminal_lookup_id },
    ].forEach(({ module_view, lookup_id }) => {
      const module = this._registered_modules.find((m) => m.view === module_view);
      if (module && module.terminal_lookup[lookup_id]) {
        module.terminal_lookup[lookup_id].connections = module.terminal_lookup[lookup_id].connections.filter(
          (c) => c.id !== id,
        );
      }
    });

    cxn_item.view.destroy();
    this.connections.splice(cxn_index, 1);
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
          if (!new_module.terminal_lookup[terminal.id]) {
            return;
          }

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

  /**
   * Returns true if there is already a connection between the specified provide
   * and requirement terminal pair.  Used to exclude already-connected pairs from
   * the compatible-target set (FR-006 / VR-003).
   */
  is_connected_pair(
    provideModule: ModuleView,
    provideTerminalLookupId: number,
    requireModule: ModuleView,
    requireTerminalLookupId: number,
  ): boolean {
    const module = this._registered_modules.find((item) => item.view === provideModule);
    if (!module) return false;
    const terminal = module.terminal_lookup[provideTerminalLookupId];
    if (!terminal) return false;
    return terminal.connections.some(
      (cxn) =>
        cxn.requirement.module_view === requireModule && cxn.requirement.terminal_lookup_id === requireTerminalLookupId,
    );
  }

  /**
   * Returns the module instance IDs and terminal lookup IDs of all terminals
   * connected to the given terminal on the given module view.
   */
  get_connections_for_terminal(moduleView: ModuleView, terminalLookupId: number): TerminalConnectionsResult {
    const module = this._registered_modules.find((item) => item.view === moduleView);
    if (!module) return { connected_instance_ids: [], connected_terminal_lookup_ids: [] };
    const terminal = module.terminal_lookup[terminalLookupId];
    if (!terminal) return { connected_instance_ids: [], connected_terminal_lookup_ids: [] };

    const connected_instance_ids: ModuleInstanceID[] = [];
    const connected_terminal_lookup_ids: number[] = [];

    terminal.connections.forEach((cxn) => {
      if (cxn.provide.module_view === moduleView && cxn.provide.terminal_lookup_id === terminalLookupId) {
        // We are the provide side; other end is requirement
        connected_instance_ids.push((cxn.requirement.module_view as ModuleView)._vm._instance_id);
        connected_terminal_lookup_ids.push(cxn.requirement.terminal_lookup_id);
      } else {
        // We are the requirement side; other end is provide
        connected_instance_ids.push((cxn.provide.module_view as ModuleView)._vm._instance_id);
        connected_terminal_lookup_ids.push(cxn.provide.terminal_lookup_id);
      }
    });

    return { connected_instance_ids, connected_terminal_lookup_ids };
  }

  /**
   * Dim or restore all connection lines that involve the given module view.
   * Called by the selection system when a terminal is selected or deselected.
   */
  set_connections_dimmed_for_module(moduleView: ModuleView, dimmed: boolean) {
    const module = this._registered_modules.find((item) => item.view === moduleView);
    if (!module) return;
    module.terminal_lookup.forEach((terminal) => {
      if (!terminal) return;
      terminal.connections.forEach((cxn) => {
        cxn.view.set_dimmed(dimmed);
      });
    });
  }

  /**
   * Dim or restore only the connection lines that touch a specific terminal on a
   * given module view.  Used to ensure connections from/to the selected terminal
   * are dimmed even when the remote module remains at full opacity (e.g. because
   * it also has compatible-target terminals).
   */
  set_connections_dimmed_for_terminal(moduleView: ModuleView, terminalLookupId: number, dimmed: boolean) {
    const module = this._registered_modules.find((item) => item.view === moduleView);
    if (!module) return;
    const terminal = module.terminal_lookup[terminalLookupId];
    if (!terminal) return;
    terminal.connections.forEach((cxn) => {
      cxn.view.set_dimmed(dimmed);
    });
  }

  /**
   * Restore all connection lines to idle (full opacity).
   */
  reset_all_connections_dimmed() {
    this.connections.forEach((cxn) => cxn.view.set_dimmed(false));
  }

  /**
   * Dim every connection line unconditionally.  Used when a terminal is selected
   * so that all existing connection noise is hidden regardless of which modules
   * are active vs dimmed.
   */
  dim_all_connections() {
    this.connections.forEach((cxn) => cxn.view.set_dimmed(true));
  }
}
