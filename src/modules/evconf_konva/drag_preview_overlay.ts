// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { DragPreviewConfig } from "@/modules/evconf_konva/types";
import { COLOR } from "@/modules/evconf_konva/views/constants";
import { TerminalType } from "@/modules/evbc";

/**
 * DragPreviewOverlay manages the ghost icon and dashed preview line shown
 * while the user drags a terminal to create a connection.
 *
 * Lifecycle: create on dragstart, call update() on mousemove, destroy() on mouseup.
 */
export class DragPreviewOverlay {
  private readonly _layer: Konva.Layer;
  private readonly _ghostShape: Konva.Path;
  private readonly _previewLine: Konva.Line;
  private readonly _originX: number;
  private readonly _originY: number;
  /** Terminal type — determines the rotational offset of the ghost icon. */
  private readonly _terminalType: TerminalType;

  constructor(stage: Konva.Stage, config: DragPreviewConfig) {
    this._originX = config.originPosition.x;
    this._originY = config.originPosition.y;
    this._terminalType = config.terminalType;

    this._layer = new Konva.Layer({ listening: false });

    this._previewLine = new Konva.Line({
      points: [this._originX, this._originY, this._originX, this._originY],
      stroke: COLOR.CONNECTION,
      strokeWidth: 2,
      dash: [8, 4],
      listening: false,
    });

    this._ghostShape = new Konva.Path({
      data: config.iconData,
      fill: config.iconFill,
      x: this._originX,
      y: this._originY,
      scaleX: 1.5,
      scaleY: 1.5,
      // Rotate around icon centre (24×24 path, centred at 12,12).
      offsetX: 12,
      offsetY: 12,
      listening: false,
      opacity: 0.75,
    });

    this._layer.add(this._previewLine);
    this._layer.add(this._ghostShape);
    stage.add(this._layer);
    this._layer.moveToTop();
    this._layer.batchDraw();
  }

  /**
   * Move the ghost icon to cursorPos, extend the preview line, and rotate the
   * ghost so its "active end" (prongs / socket opening) points toward the cursor.
   *
   * Rotation convention (matches set_alignment in terminal.ts):
   *   provide:     rotation 0° = prongs point UP → angle formula = atan2(dy,dx)·180/π + 90
   *   requirement: rotation 0° = socket opening points DOWN (opposite of provide)
   *                → add 180° so opening faces the cursor direction
   */
  update(cursorPos: { x: number; y: number }) {
    this._ghostShape.x(cursorPos.x);
    this._ghostShape.y(cursorPos.y);
    this._previewLine.points([this._originX, this._originY, cursorPos.x, cursorPos.y]);

    const dx = cursorPos.x - this._originX;
    const dy = cursorPos.y - this._originY;
    // Avoid rotating when cursor is at the origin (no direction information).
    if (dx !== 0 || dy !== 0) {
      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      if (this._terminalType === "requirement") angle += 180;
      this._ghostShape.rotation(angle);
    }

    this._layer.batchDraw();
  }

  destroy() {
    this._layer.destroy();
  }
}
