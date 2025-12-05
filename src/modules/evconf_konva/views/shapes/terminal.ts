// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { PathConfig } from "konva/lib/shapes/Path";
import { TerminalAlignment, TerminalType } from "@/modules/evbc";
import { COLOR, ICON_DATA, SIZE } from "../constants";

export interface TerminalConfig extends PathConfig {
  terminal_type: TerminalType;
  terminal_id: number;
  terminal_alignment: TerminalAlignment;
}

// this view sticks to the Konva infrastructure of shapes
export class TerminalShape<Config extends TerminalConfig = TerminalConfig> extends Konva.Path {
  private _currentLook: "DISABLED" | "NORMAL" | "PLACEHOLDER" | "CONNECTED" = "NORMAL";

  constructor(config: Config) {
    // FIXME (aw): the static path string should go to constants!
    config.data = config.data || (config.terminal_type === "provide" ? ICON_DATA.PLUG : ICON_DATA.SOCKET);

    config.fill =
      config.fill || config.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE;

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
    return this.getAttr("terminal_type") as TerminalType;
  }

  get terminal_id(): number {
    return this.getAttr("terminal_id") as number;
  }

  get terminal_alignment(): TerminalAlignment {
    return this.getAttr("terminal_alignment") as TerminalAlignment;
  }

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
  // get_rotation(alignment: TerminalAlignment): number {
  //   const provide = this.terminal_type === "provide";
  //   if (alignment === "top") {
  //     return provide ? 0 : 180;
  //   } else if (alignment === "right") {
  //     return provide ? 90 : 270;
  //   } else if (alignment === "bottom") {
  //     return provide ? 180 : 0;
  //   } else {
  //     return provide ? 270 : 90;
  //   }
  // }

  set_appearence(look: "DISABLED" | "NORMAL" | "PLACEHOLDER" | "CONNECTED") {
    this._currentLook = look;
    // FIXME (aw): this function might still assume some knowledge about the order in which the appearence was set
    if (look !== "DISABLED") {
      this.data(this.terminal_type === "provide" ? ICON_DATA.PLUG : ICON_DATA.SOCKET);
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
    } else if (look === "CONNECTED") {
      this.data(ICON_DATA.CONNECTED);
      this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
      this.listening(true);
    } else if (look === "NORMAL") {
      this.fill(this.terminal_type === "requirement" ? COLOR.TERMINAL_REQUIREMENT : COLOR.TERMINAL_PROVIDE);
      this.listening(true);
    }
  }

  updateTheme() {
    this.set_appearence(this._currentLook);
  }
}
