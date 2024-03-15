// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { LineConfig } from "konva/lib/shapes/Line";
import { TerminalAlignment } from "@/modules/evbc";
import { COLOR, SIZE } from "../constants";

export type TerminalPlacement = {
  alignment: TerminalAlignment;
  x: number;
  y: number;
};

interface ConnectionConfig extends LineConfig {
  requirement: TerminalPlacement;
  provide: TerminalPlacement;
}

// FIXME (aw): do this lookup get unrolled for performance?
const correction = {
  top: {
    x: 0,
    y: -SIZE.GRID / 2,
  },
  right: {
    x: SIZE.GRID / 2,
    y: 0,
  },
  bottom: {
    x: 0,
    y: SIZE.GRID / 2,
  },
  left: {
    x: -SIZE.GRID / 2,
    y: 0,
  },
};

export class ConnectionShape<Config extends ConnectionConfig = ConnectionConfig> extends Konva.Line {
  constructor(config: Config) {
    config.bezier = config.bezier || true;
    config.strokeWidth = config.strokeWidth || SIZE.CONNECTION_WIDTH;
    config.stroke = config.stroke || COLOR.CONNECTION;
    super(config);

    this.update_terminals(config.requirement, config.provide);
  }

  update_terminals(requirement: TerminalPlacement, provide: TerminalPlacement, animate = false) {
    requirement = requirement || this.getAttr("requirement");
    provide = provide || this.getAttr("provide");

    const req_x = requirement.x + correction[requirement.alignment].x;
    const req_y = requirement.y + correction[requirement.alignment].y;
    const prov_x = provide.x + correction[provide.alignment].x;
    const prov_y = provide.y + correction[provide.alignment].y;
    const x_dist = prov_x - req_x;
    const y_dist = prov_y - req_y;
    const cps = [
      [requirement.alignment, req_x, req_y, x_dist, y_dist],
      [provide.alignment, prov_x, prov_y, -x_dist, -y_dist],
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

    if (animate) {
      this.to({
        points,
        duration: 0.2,
        ease: "EaseIn",
      });
    } else {
      this.points(points);
    }

    this.setAttrs({
      requirement,
      provide,
    });
  }
}
