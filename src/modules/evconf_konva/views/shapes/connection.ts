// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { ArrowConfig } from "konva/lib/shapes/Arrow";
import { TerminalAlignment } from "@/modules/evbc";
import { COLOR, SIZE } from "../constants";

export type TerminalPlacement = {
  alignment: TerminalAlignment;
  x: number;
  y: number;
};

interface ConnectionConfig extends ArrowConfig {
  requirement: TerminalPlacement;
  provide: TerminalPlacement;
}

// FIXME (aw): do this lookup get unrolled for performance?
const TERMINAL_OFFSET = 10;
const correction = {
  top: {
    x: 0,
    y: -TERMINAL_OFFSET,
  },
  right: {
    x: TERMINAL_OFFSET,
    y: 0,
  },
  bottom: {
    x: 0,
    y: TERMINAL_OFFSET,
  },
  left: {
    x: -TERMINAL_OFFSET,
    y: 0,
  },
};

export class ConnectionShape<Config extends ConnectionConfig = ConnectionConfig> extends Konva.Arrow {
  constructor(config: Config) {
    config.bezier = config.bezier || true;
    config.strokeWidth = config.strokeWidth || SIZE.CONNECTION_WIDTH;
    config.stroke = config.stroke || COLOR.CONNECTION;
    config.fill = config.stroke;
    config.pointerLength = 10;
    config.pointerWidth = 10;
    config.pointerAtBeginning = false;
    config.pointerAtEnding = false;
    super(config);

    this.update_terminals(config.requirement, config.provide);
  }

  updateTheme() {
    this.stroke(COLOR.CONNECTION);
    this.fill(COLOR.CONNECTION);
  }

  update_terminals(requirement: TerminalPlacement, provide: TerminalPlacement, animate = false) {
    const req = requirement || (this.getAttr("requirement") as TerminalPlacement);
    const prov = provide || (this.getAttr("provide") as TerminalPlacement);

    const req_x = req.x + correction[req.alignment].x;
    const req_y = req.y + correction[req.alignment].y;
    const prov_x = prov.x + correction[prov.alignment].x;
    const prov_y = prov.y + correction[prov.alignment].y;
    const x_dist = prov_x - req_x;
    const y_dist = prov_y - req_y;
    const cps = [
      [req.alignment, req_x, req_y, x_dist, y_dist],
      [prov.alignment, prov_x, prov_y, -x_dist, -y_dist],
    ].map((item) => {
      const [alignment, pos_x, pos_y, dist_x, dist_y] = item as [TerminalAlignment, number, number, number, number];
      if (alignment === "top") {
        return [pos_x, pos_y - Math.max(SIZE.CONNECTION_CTRL, -dist_y)];
      } else if (alignment === "right") {
        return [pos_x + Math.max(SIZE.CONNECTION_CTRL, dist_x), pos_y];
      } else if (alignment === "bottom") {
        return [pos_x, pos_y + Math.max(SIZE.CONNECTION_CTRL, dist_y)];
      } else {
        // left
        return [pos_x - Math.max(SIZE.CONNECTION_CTRL, -dist_x), pos_y];
      }
    });

    const points = [req_x, req_y, cps[0][0], cps[0][1], cps[1][0], cps[1][1], prov_x, prov_y];

    if (animate && this.getLayer()) {
      this.to({
        points,
        duration: 0.2,
        ease: "EaseIn",
      });
    } else {
      this.points(points);
    }

    this.setAttrs({
      requirement: req,
      provide: prov,
    });
  }
}
