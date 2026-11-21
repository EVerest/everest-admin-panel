// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { PathConfig } from "konva/lib/shapes/Path";
import { TerminalAlignment, TerminalType } from "@/modules/evbc";
import { COLOR, ICON_DATA, SIZE } from "../constants";
import { TerminalVisualState } from "@/modules/evconf_konva/types";

export interface TerminalConfig extends PathConfig {
  terminal_type: TerminalType;
  terminal_id: number;
  terminal_alignment: TerminalAlignment;
  /** Interface name for this terminal (e.g. "powermeter"). Used for drag compatibility checks. */
  terminal_interface?: string;
}

// this view sticks to the Konva infrastructure of shapes
export class TerminalShape<Config extends TerminalConfig = TerminalConfig> extends Konva.Path {
  constructor(config: Config) {
    // T007: Select role-specific icon instead of generic ICON_DATA.TERMINAL
    if (!config.data) {
      config.data = config.terminal_type === "provide" ? ICON_DATA.TERMINAL_PROVIDE : ICON_DATA.TERMINAL_REQUIREMENT;
    }

    // Evaluate fill before passing to super; the ternary precedence in the original
    // code was: fill || (condition ? a : b), which always evaluated the ternary.
    if (config.fill === undefined || config.fill === null) {
      config.fill = config.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE;
    }

    config.x = config.x || 0;
    config.y = config.y || 0;
    config.offset = config.offset || { x: SIZE.TERMINAL / 2, y: SIZE.TERMINAL / 2 };
    config.hitFunc =
      config.hitFunc ||
      function (context, shape) {
        context.beginPath();
        context.rect(0, 0, SIZE.TERMINAL, SIZE.TERMINAL);
        context.closePath();
        context.fillShape(shape);
      };

    super(config);

    if (config.terminal_alignment) {
      this.set_alignment(config.terminal_alignment);
    }
  }

  get terminal_type(): TerminalType {
    return this.getAttr("terminal_type");
  }

  get terminal_id(): number {
    return this.getAttr("terminal_id");
  }

  get terminal_alignment(): TerminalAlignment {
    return this.getAttr("terminal_alignment");
  }

  get terminal_interface(): string | undefined {
    return this.getAttr("terminal_interface");
  }

  /**
   * T008: Apply the correct rotation for this terminal's type and alignment.
   * The rotation convention ensures the "active end" (prongs / socket opening /
   * connected icon indicator) points AWAY from the module body.
   *
   * Convention (at 0° the active end points UP = toward negative-y):
   *   provide at top    →   0°   (prongs up, away from module top)
   *   provide at bottom → 180°   (prongs down, away from module bottom)
   *   provide at right  →  90°   (prongs right, away from module right side)
   *   provide at left   → 270°   (prongs left, away from module left side)
   *   requirement: opposite rotations (opening points away from module)
   *
   * The TERMINAL_PROVIDE_CONNECTED (filled circle) is symmetric so rotation is
   * irrelevant but we set it consistently. TERMINAL_REQUIREMENT_CONNECTED
   * (arrowhead tip up at 0°) follows the same convention as TERMINAL_REQUIREMENT.
   */
  set_alignment(alignment: TerminalAlignment) {
    this.setAttr("terminal_alignment", alignment);
    const is_provide = this.terminal_type === "provide";
    if (alignment === "top") {
      this.rotation(is_provide ? 0 : 180);
    } else if (alignment === "right") {
      this.rotation(is_provide ? 90 : 270);
    } else if (alignment === "bottom") {
      this.rotation(is_provide ? 180 : 0);
    } else if (alignment === "left") {
      this.rotation(is_provide ? 270 : 90);
    }
  }

  /**
   * T009: Apply a fully described visual state to this terminal shape.
   * Covers all 7 TerminalVisualState values from the data model.
   */
  set_visual_state(state: TerminalVisualState): void {
    this.listening(true); // restore hit-testing (may have been disabled via set_appearence)

    switch (state) {
      case "idle-unconnected":
        // Role-specific unconnected icon, scale 1×, full opacity.
        this.data(this.terminal_type === "provide" ? ICON_DATA.TERMINAL_PROVIDE : ICON_DATA.TERMINAL_REQUIREMENT);
        this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
        this.to({ scaleX: 1, scaleY: 1, opacity: 1, duration: 0.15 });
        break;

      case "idle-connected":
        // Role-specific connected icon (filled circle / arrowhead), scale 1×, full opacity.
        this.data(
          this.terminal_type === "provide"
            ? ICON_DATA.TERMINAL_PROVIDE_CONNECTED
            : ICON_DATA.TERMINAL_REQUIREMENT_CONNECTED,
        );
        this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
        this.to({ scaleX: 1, scaleY: 1, opacity: 1, duration: 0.15 });
        break;

      case "selected":
        // Role-specific unconnected icon, scale 1.5× (instant — avoids confusion during drag).
        this.data(this.terminal_type === "provide" ? ICON_DATA.TERMINAL_PROVIDE : ICON_DATA.TERMINAL_REQUIREMENT);
        this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
        this.opacity(1);
        this.scaleX(1.5);
        this.scaleY(1.5);
        break;

      case "compatible-target":
        // Role-specific UNCONNECTED icon, scale 1.5×, full opacity.  Always use the
        // unconnected variant so the terminal visually reads as "open / available to
        // receive a connection" regardless of whether it already has other connections.
        this.data(this.terminal_type === "provide" ? ICON_DATA.TERMINAL_PROVIDE : ICON_DATA.TERMINAL_REQUIREMENT);
        this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
        this.to({ scaleX: 1.5, scaleY: 1.5, opacity: 1, duration: 0.15 });
        break;

      case "dimmed-same-module":
      case "dimmed-incompatible":
      case "dimmed-exhausted":
        // Dim to 25 % opacity and restore scale — icon path unchanged.
        this.to({ scaleX: 1, scaleY: 1, opacity: 0.25, duration: 0.15 });
        break;
    }
  }

  /**
   * Legacy appearance setter — kept for terminal-repositioning mode where
   * DISABLED/PLACEHOLDER/NORMAL states are distinct from connection-state visual
   * states.  Do NOT call from the new visual-state system.
   */
  set_appearence(look: "DISABLED" | "NORMAL" | "PLACEHOLDER") {
    if (look !== "DISABLED") {
      // Restore current role icon (unconnected variant) when leaving DISABLED.
      this.data(this.terminal_type === "provide" ? ICON_DATA.TERMINAL_PROVIDE : ICON_DATA.TERMINAL_REQUIREMENT);
    }
    if (look === "DISABLED") {
      this.data(ICON_DATA.DISABLED);
      this.fill(
        this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT_DISABLED : COLOR.TERMINAL_PROVIDE_DISABLED,
      );
      this.listening(false);
    } else if (look === "PLACEHOLDER") {
      this.fill(
        this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT_DISABLED : COLOR.TERMINAL_PROVIDE_DISABLED,
      );
      this.listening(false);
    } else if (look === "NORMAL") {
      this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
      this.listening(true);
    }
  }
}
