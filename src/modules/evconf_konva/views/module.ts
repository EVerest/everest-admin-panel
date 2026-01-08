// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { Terminal, TerminalAlignment } from "@/modules/evbc";
import { MONO_TEXT, NORMAL_TEXT, SIZE } from "./constants";
import { TerminalConfig, TerminalShape } from "./shapes/terminal";
import ModuleViewModel, { ViewModelChangeEvent } from "../view_models/module";
import { TerminalPlacement } from "./shapes/connection";
import { HideTooltipEvent, ShowTooltipEvent } from "../stage_context";
import { currentTheme } from "@/plugins/vuetify";
import { i18n } from "../../../plugins/i18n";
import { ComposerTranslation } from "vue-i18n";

// FIXME (aw): the TerminalPlacement type belongs to a shared place!
export type TerminalPlacementWithID = TerminalPlacement & { id: number };

type TerminalsUpdatedEvent = {
  readonly type: "TERMINALS_UPDATED";
  readonly terminals: TerminalPlacementWithID[];
  readonly module_moved: boolean;
};

export type TerminalDragStartEvent = {
  readonly type: "TERMINAL_DRAG_START";
  readonly terminal_id: number;
};

export type ModuleViewEvent = TerminalsUpdatedEvent | TerminalDragStartEvent;
type ModuleViewEventHandler = (ev: ModuleViewEvent) => void;

function safeTerminalInterface(item: unknown): string {
  if (typeof item !== "object" || item === null) return "";
  const rec = item as Record<string, unknown>;
  const term = rec.terminal;
  if (typeof term !== "object" || term === null) return "";
  const raw = (term as Record<string, unknown>).interface;
  if (typeof raw === "string") return raw;
  return String(raw ?? "");
}

function check_hit(x: number, y: number, terminal_distribution: Record<TerminalAlignment, number[]>) {
  let align: TerminalAlignment = null;
  let index = null;

  if (0 < x && x < SIZE.FRAME_WIDTH) {
    // could either be top or bottom
    if (-SIZE.TERMINAL < y && y < 0) {
      align = "top";
      index = Math.floor((terminal_distribution.top.length * x) / SIZE.FRAME_WIDTH + 0.5);
    } else if (y > SIZE.FRAME_HEIGHT && y < SIZE.FRAME_HEIGHT + SIZE.TERMINAL) {
      align = "bottom";
      index = Math.floor((terminal_distribution.bottom.length * x) / SIZE.FRAME_WIDTH + 0.5);
    }
  }
  if (0 < y && y < SIZE.FRAME_HEIGHT) {
    // could either be left or right
    if (-SIZE.TERMINAL < x && x < 0) {
      align = "left";
      index = Math.floor((terminal_distribution.left.length * y) / SIZE.FRAME_HEIGHT + 0.5);
    } else if (x > SIZE.FRAME_WIDTH && x < SIZE.FRAME_WIDTH + SIZE.TERMINAL) {
      align = "right";
      index = Math.floor((terminal_distribution.right.length * y) / SIZE.FRAME_HEIGHT + 0.5);
    }
  }

  return {
    align,
    index,
  };
}

export default class ModuleView {
  readonly group: Konva.Group;
  readonly _vm: ModuleViewModel;
  readonly _terminal_views: Array<TerminalShape>;
  readonly _title: Konva.Text;
  readonly _frame: Konva.Rect;
  readonly _topStroke: Konva.Line;
  _currentColors = currentTheme.colors;
  _isSelected = false;

  _observers: ModuleViewEventHandler[] = [];

  constructor(view_model: ModuleViewModel) {
    // FIXME (aw): refactor all these inline functions !!!
    this.group = new Konva.Group({
      draggable: true,
    });

    // initialize member variables
    this._vm = view_model;

    this._terminal_views = view_model.terminal_lookup.map(
      (item: { readonly terminal: Terminal; alignment: TerminalAlignment; index: number }, terminal_id) => {
        const view = new TerminalShape<TerminalConfig>({
          terminal_type: item.terminal.type,
          terminal_id,
          terminal_alignment: item.alignment,
        });

        view.setDraggable(true);
        view.on("dragstart", (e) => this._terminal_dragstart_handler(view, e));
        view.on("dragmove", (e) => this._terminal_dragmove_handler(view, e));
        view.on("dragend", (e) => this._terminal_dragend_handler(view, e));
        view.on("mouseenter", () => {
          const t = (i18n as unknown as { global: { t: ComposerTranslation } }).global.t;

          this._vm.set_cursor("pointer");
          const iface = safeTerminalInterface(item);
          const showTooltip: ShowTooltipEvent = {
            type: "SHOW_TOOLTIP",
            text: t("module.terminalTooltip", { interface: iface }),
          };
          this._vm.notify_stage_context(showTooltip);
        });
        view.on("mouseleave", () => {
          this._vm.set_cursor("default");
          const hideTooltip: HideTooltipEvent = {
            type: "HIDE_TOOLTIP",
          };
          this._vm.notify_stage_context(hideTooltip);
        });
        view.on("pointerclick", (ev) => {
          view_model.clicked_terminal(terminal_id);
          ev.cancelBubble = true;
        });

        return view;
      },
    );

    // initialize correct terminal positions
    Object.entries(view_model.terminal_dist).forEach(([_alignment, terminal_ids]) => {
      this._recalculate_terminal_position(_alignment as TerminalAlignment, terminal_ids, false);
    });

    // Set initial appearance
    this._terminal_views.forEach((view, id) => {
      if (view_model.is_terminal_connected(id)) {
        view.set_appearence("CONNECTED");
      }
    });

    // register view model observer
    view_model.add_observer((ev) => this._vm_event_handler(ev));

    // set handlers
    this.group.on("dragmove", () => this._module_dragmove_handler());

    // init position
    this.group.position({
      x: view_model.grid_position.x * SIZE.GRID,
      y: view_model.grid_position.y * SIZE.GRID,
    });
    const frame = new Konva.Rect({
      cornerRadius: 4,
      width: SIZE.FRAME_WIDTH,
      height: SIZE.FRAME_HEIGHT,
      fill: currentTheme.colors["module-primary"],
      shadowBlur: 4,
      shadowOpacity: 0.4,
      shadowOffset: {
        x: 2,
        y: 2,
      },
      fillAfterStrokeEnabled: true,
      listening: true,
    });
    this._frame = frame;

    const strokeWidth = 8;
    const topStroke = new Konva.Line({
      cornerRadius: 4,
      points: [
        0,
        strokeWidth / 2, // Start at the top-left corner of where the rectangle is positioned
        SIZE.FRAME_WIDTH,
        strokeWidth / 2, // End at the top-right corner of where the rectangle is positioned
      ],
      stroke: currentTheme.colors.secondary,
      strokeWidth,
      x: frame.x(),
      y: frame.y(),
      listening: true,
    });
    this._topStroke = topStroke;

    const title = new Konva.Text({
      wrap: "none",
      text: view_model.id,
      fontFamily: NORMAL_TEXT.fontFamily,
      ellipsis: true,
      fill: "white",
      fontSize: 16 * 2,
      padding: 16,
      y: strokeWidth,
      width: SIZE.FRAME_WIDTH,
      listening: true,
    });

    const typeInfo = new Konva.Text({
      wrap: "none",
      text: `${view_model.type}`,
      fontFamily: MONO_TEXT.fontFamily,
      ellipsis: true,
      fill: "white",
      opacity: 0.5,
      fontSize: 16,
      padding: 8,
      width: SIZE.FRAME_WIDTH,
      y: frame.height() - 16 * 2,
      align: "right",
      listening: true,
    });

    [frame, title, topStroke, typeInfo].forEach((e) => {
      e.on("mouseenter", () => {
        this._vm.set_cursor("pointer");
      });
      e.on("mouseleave", () => {
        this._vm.set_cursor("default");
      });
      e.on("pointerclick", (ev) => {
        this._vm.clicked_title(ev.evt.shiftKey);
        ev.cancelBubble = true;
      });
    });

    this._title = title;

    this.group.add(frame, topStroke, typeInfo, title, ...this._terminal_views);
  }

  get_terminal_placement(id: number): TerminalPlacement {
    const terminal_view = this._terminal_views[id];
    const relative_position = terminal_view.position();
    const module_position = this.group.position();

    return {
      x: relative_position.x + module_position.x,
      y: relative_position.y + module_position.y,
      alignment: terminal_view.terminal_alignment,
    };
  }

  add_observer(handler: ModuleViewEventHandler) {
    this._observers.push(handler);

    return () => {
      this._observers = this._observers.filter((other) => other !== handler);
    };
  }

  _notify(ev: ModuleViewEvent) {
    this._observers.forEach((handler) => handler(ev));
  }

  _vm_event_handler(ev: ViewModelChangeEvent) {
    // FIXME (aw): unneccessary complex - should be displayed in a custom html widget !!!
    if (ev.type === "TERMINAL_MODIFY_APPEARENCE") {
      ev.disable.forEach((id) => {
        this._terminal_views[id].set_appearence("DISABLED");
      });
      ev.normal.forEach((id) => {
        this._terminal_views[id].set_appearence("NORMAL");
      });
      ev.connected?.forEach((id) => {
        this._terminal_views[id].set_appearence("CONNECTED");
      });
      ev.highlight_normal?.forEach((id) => {
        this._terminal_views[id].set_appearence("HIGHLIGHT_NORMAL");
      });
      ev.highlight_connected?.forEach((id) => {
        this._terminal_views[id].set_appearence("HIGHLIGHT_CONNECTED");
      });
      if (this.group.children.length > 0) {
        this.group.cache();
      }
    } else if (ev.type === "MODULE_MODEL_UPDATE") {
      this._title.setText(this._vm.id);

      // Update position if it changed externally (e.g. via multi-selection drag)
      const new_group_pos = {
        x: this._vm.grid_position.x * SIZE.GRID,
        y: this._vm.grid_position.y * SIZE.GRID,
      };
      this.group.position(new_group_pos);

      // Notify terminals updated so connections can redraw
      const update_terminals = this._terminal_views.map((item, id): TerminalPlacementWithID => {
        return {
          alignment: item.terminal_alignment,
          id,
          x: item.x() + new_group_pos.x,
          y: item.y() + new_group_pos.y,
        };
      });

      this._notify({
        type: "TERMINALS_UPDATED",
        terminals: update_terminals,
        module_moved: true,
      });

      if (this.group.children.length > 0) {
        this.group.cache();
      }
    } else if (ev.type === "MODULE_SELECTION_CHANGED") {
      this._isSelected = ev.selected;
      if (ev.selected) {
        this._frame.stroke(this._currentColors["on-background"]);
        this._frame.strokeWidth(4);
        this._frame.dash([10, 5]);
      } else {
        this._frame.stroke(null);
        this._frame.strokeWidth(0);
        this._frame.dash([]);
      }
      if (this.group.children.length > 0) {
        this.group.cache();
      }
    }
  }

  _module_dragmove_handler() {
    const pos = this.group.position();

    const new_grid_pos = {
      x: Math.round(pos.x / SIZE.GRID),
      y: Math.round(pos.y / SIZE.GRID),
    };

    const cur_grid_pos = this._vm.grid_position;

    const new_group_pos = {
      x: new_grid_pos.x * SIZE.GRID,
      y: new_grid_pos.y * SIZE.GRID,
    };

    // snap to grid
    this.group.position(new_group_pos);

    if (cur_grid_pos.x !== new_grid_pos.x || cur_grid_pos.y !== new_grid_pos.y) {
      // got a change, send notification and update view model
      this._vm.grid_position = new_grid_pos;

      // update all terminals
      const update_terminals = this._terminal_views.map((item, id): TerminalPlacementWithID => {
        return {
          alignment: item.terminal_alignment,
          id,
          x: item.x() + new_group_pos.x,
          y: item.y() + new_group_pos.y,
        };
      });

      this._notify({
        type: "TERMINALS_UPDATED",
        terminals: update_terminals,
        module_moved: true,
      });
    }
  }

  _terminal_dragstart_handler(view: TerminalShape, e: Konva.KonvaEventObject<DragEvent>) {
    if (!e.evt.altKey) {
      view.stopDrag();

      // Hide tooltip since we are starting a connection drag
      const hideTooltip: HideTooltipEvent = {
        type: "HIDE_TOOLTIP",
      };
      this._vm.notify_stage_context(hideTooltip);

      // Reset position immediately because dragstart might have moved it slightly
      const alignment = this._vm.terminal_lookup[view.terminal_id].alignment;
      this._recalculate_terminal_position(alignment, this._vm.terminal_dist[alignment], false);

      if (this.group.children.length > 0) {
        this.group.cache();
      }

      this._notify({
        type: "TERMINAL_DRAG_START",
        terminal_id: view.terminal_id,
      });
      return;
    }

    const replace_terminal = view.clone() as TerminalShape;
    replace_terminal.set_appearence("PLACEHOLDER");

    this._terminal_views[view.terminal_id] = replace_terminal;

    // this will become the ghost
    this.group.add(replace_terminal);

    view.moveToTop();
    this.group.clearCache();
  }

  _terminal_dragmove_handler(view: TerminalShape, _e: Konva.KonvaEventObject<DragEvent>) {
    const hit = check_hit(view.x(), view.y(), this._vm.terminal_dist);

    if (!hit.align) {
      return;
    }

    // update orientation of hovering dragged element
    if (hit.align !== this._vm.terminal_lookup[view.terminal_id].alignment) {
      view.set_alignment(hit.align);
    }

    const changed_areas = this._vm.move_terminal(view.terminal_id, hit.align, hit.index);

    changed_areas.forEach((alignment) => {
      this._recalculate_terminal_position(alignment, this._vm.terminal_dist[alignment], true);
    });
  }

  _terminal_dragend_handler(view: TerminalShape, _e: Konva.KonvaEventObject<DragEvent>) {
    // Only destroy if we have a ghost (meaning we were in rearrange mode)
    if (this._terminal_views[view.terminal_id] !== view) {
      // remove ghost
      this._terminal_views[view.terminal_id].destroy();
      this._terminal_views[view.terminal_id] = view;
    }

    const end_align = this._vm.terminal_lookup[view.terminal_id].alignment;

    this._recalculate_terminal_position(end_align, this._vm.terminal_dist[end_align]);
    if (this.group.children.length > 0) {
      this.group.cache();
    }
  }

  _recalculate_terminal_position(alignment: TerminalAlignment, terminal_ids: number[], animate = false) {
    const horizontal_align = alignment === "top" || alignment === "bottom";
    const x_offset = alignment === "right" ? SIZE.FRAME_WIDTH + SIZE.TERMINAL : 0;
    const y_offset = alignment === "bottom" ? SIZE.FRAME_HEIGHT + SIZE.TERMINAL : 0;
    const size = horizontal_align ? SIZE.FRAME_WIDTH : SIZE.FRAME_HEIGHT;
    const terminal_count = terminal_ids.length;

    const terminal_update_event: TerminalsUpdatedEvent = {
      type: "TERMINALS_UPDATED",
      terminals: [],
      module_moved: false,
    };

    terminal_ids.forEach((terminal_id, index) => {
      const terminal_view = this._terminal_views[terminal_id];
      const list_offset = ((index + 0.5) * size) / terminal_count;
      const x = x_offset + (horizontal_align ? list_offset : -SIZE.TERMINAL / 2);
      const y = y_offset + (horizontal_align ? -SIZE.TERMINAL / 2 : list_offset);
      terminal_view.set_alignment(alignment);
      if (animate) {
        terminal_view.to({
          duration: 0.2,
          ease: "EaseIn",
          x,
          y,
        });
      } else {
        terminal_view.x(x);
        terminal_view.y(y);
      }

      terminal_update_event.terminals.push({
        alignment,
        id: terminal_id,
        x: x + this.group.x(),
        y: y + this.group.y(),
      });
    });

    this._notify(terminal_update_event);
  }

  set_highlight_terminals(interfaceName: string, type: string, blockedTerminals: Set<number> = new Set()) {
    this.group.clearCache();
    this._terminal_views.forEach((view, id) => {
      const info = this._vm.terminal_lookup[id];
      if (info.terminal.interface === interfaceName && info.terminal.type === type && !blockedTerminals.has(id)) {
        view.scale({ x: 3, y: 3 });
      }
    });
  }

  reset_highlight_terminals() {
    this.group.clearCache();
    this._terminal_views.forEach((view) => {
      view.scale({ x: 1, y: 1 });
    });
  }

  updateTheme(colors: any) {
    this._currentColors = colors;
    this.group.clearCache();
    this._frame.fill(colors["module-primary"]);
    this._topStroke.stroke(colors.secondary);
    this._terminal_views.forEach((view) => view.updateTheme());

    if (this._isSelected) {
      this._frame.stroke(colors["on-background"]);
    }

    this.group.cache();
  }
}
