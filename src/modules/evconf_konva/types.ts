// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { ModuleInstanceID, ModuleInstanceModel, TerminalType } from "@/modules/evbc";

// ─── Visual State Types (feature 002-drag-connect-ux) ────────────────────────

/** All possible rendering states for a single terminal icon on the canvas. */
export type TerminalVisualState =
  | "idle-unconnected" // Default: no connection, role-specific icon, scale 1×
  | "idle-connected" // Has ≥1 connection: connected icon variant, scale 1×
  | "selected" // User clicked/dragging this terminal: scale 1.5×, full opacity
  | "compatible-target" // Valid connection target for selected terminal: scale 1.5×, full opacity
  | "dimmed-same-module" // Sibling on same module as selected terminal: opacity 0.25
  | "dimmed-incompatible" // Wrong type or interface: opacity 0.25
  | "dimmed-exhausted"; // Right type/interface but already fully connected to origin: opacity 0.25

/** Coarse module-level opacity state derived from its terminal states. */
export type ModuleVisualState =
  | "idle" // No selection active: full opacity
  | "active" // Owns the selected terminal: full opacity
  | "has-compatible" // Has ≥1 compatible-target terminal: full opacity
  | "dimmed"; // All terminals dimmed: group opacity 0.35

/** Configuration for DragPreviewOverlay, created at drag start. */
export interface DragPreviewConfig {
  /** Absolute canvas position of the terminal icon centre (fixed for drag duration). */
  readonly originPosition: { x: number; y: number };
  /** SVG path data of the ghost icon. */
  readonly iconData: string;
  /** Fill colour of the ghost icon. */
  readonly iconFill: string;
  /** Terminal role: determines ghost orientation. */
  readonly terminalType: TerminalType;
}

/** Result of querying existing connections for a single terminal. */
export interface TerminalConnectionsResult {
  /** Instance IDs connected to this terminal as the other end. */
  readonly connected_instance_ids: ModuleInstanceID[];
  /** Terminal lookup IDs within each connected module view. */
  readonly connected_terminal_lookup_ids: number[];
}

export type CopiedModule = {
  originalId: ModuleInstanceID;
  model: Omit<ModuleInstanceModel, "id" | "connections"> & {
    // We keep the original name (id in model) to generate a new unique name like "name (1)"
    name: string;
  };
};

export type CopiedConnection = {
  providing_original_id: ModuleInstanceID;
  providing_impl_name: string;
  requiring_original_id: ModuleInstanceID;
  requirement_name: string;
};

export type ClipboardSnapshot = {
  modules: CopiedModule[];
  connections: CopiedConnection[];
};
