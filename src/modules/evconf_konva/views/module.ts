// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import Konva from "konva";
import { TerminalAlignment } from "@/modules/evbc";
import { MONO_TEXT, NORMAL_TEXT, SIZE, COLOR, ICON_DATA } from "./constants";
import { TerminalConfig, TerminalShape } from "./shapes/terminal";
import ModuleViewModel, { ViewModelChangeEvent } from "../view_models/module";
import { TerminalPlacement } from "./shapes/connection";
import { HideTooltipEvent, ShowTooltipEvent } from "../stage_context";
import { currentTheme } from "@/plugins/vuetify";
import { TerminalVisualState } from "@/modules/evconf_konva/types";
import { DragPreviewOverlay } from "@/modules/evconf_konva/drag_preview_overlay";

// FIXME (aw): the TerminalPlacement type belongs to a shared place!
type TerminalPlacementWithID = TerminalPlacement & { id: number };

type TerminalsUpdatedEvent = {
  readonly type: "TERMINALS_UPDATED";
  readonly terminals: TerminalPlacementWithID[];
  readonly module_moved: boolean;
};

export type ModuleViewEvent = TerminalsUpdatedEvent;
type ModuleViewEventHandler = (ev: ModuleViewEvent) => void;

function _check_hit(x: number, y: number, terminal_distribution: Record<TerminalAlignment, number[]>) {
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
  readonly _topStroke: Konva.Line;
  readonly _selectionRect: Konva.Rect;

  _observers: ModuleViewEventHandler[] = [];

  /** Active drag-to-connect overlay (null when not dragging). */
  private _drag_overlay: DragPreviewOverlay | null = null;
  /** RAF throttle flag for dragmove. */
  private _drag_raf_pending = false;
  /**
   * T026: Window-level mouseup fallback, active only during a terminal drag so
   * it doesn't interfere with normal module clicks or group drags.
   * Registered in _terminal_dragstart_handler, removed in _terminal_dragend_handler.
   */
  private _window_drag_cancel: (() => void) | null = null;
  /** Cleanup function for the stage-container mousemove listener used during terminal drag. */
  private _stage_mousemove_cleanup: (() => void) | null = null;
  /**
   * Last pointer position captured by the stage-container mousemove listener.
   * Used in the drop handler because stage.getPointerPosition() is unreliable
   * inside a window-level mouseup (Konva doesn't update it from window events).
   */
  private _last_drag_pos: { x: number; y: number } | null = null;
  /**
   * Set to true at dragstart so the Konva pointerclick that fires after stopDrag()
   * (the terminal didn't physically move so Konva considers it a click) is suppressed.
   * Cleared by the pointerclick handler or by the next mousedown.
   */
  private _suppress_next_click = false;
  /**
   * Set to true when the user holds Alt during mousedown on a terminal.
   * In this mode the drag is a terminal-repositioning operation (original behavior)
   * rather than the new drag-to-connect flow.
   */
  private _repositioning_drag = false;

  constructor(view_model: ModuleViewModel) {
    // FIXME (aw): refactor all these inline functions !!!
    this.group = new Konva.Group({
      draggable: true,
      name: "module",
      id: view_model.id.toString(),
      dragBoundFunc: (pos) => {
        // pos is in absolute (stage) coordinates.  We want to snap in the
        // layer's LOCAL coordinate space so the result is always a clean
        // SIZE.GRID multiple in local space even when the layer is panned.
        const layer = this.group.getLayer();
        const lx = layer ? layer.x() : 0;
        const ly = layer ? layer.y() : 0;
        return {
          x: Math.round((pos.x - lx) / SIZE.GRID) * SIZE.GRID + lx,
          y: Math.round((pos.y - ly) / SIZE.GRID) * SIZE.GRID + ly,
        };
      },
    });

    // initialize member variables
    this._vm = view_model;

    this._terminal_views = view_model.terminal_lookup.map((item, terminal_id) => {
      const view = new TerminalShape<TerminalConfig>({
        terminal_type: item.terminal.type,
        terminal_id,
        terminal_alignment: item.alignment,
        terminal_interface: item.terminal.interface,
      });

      view.setDraggable(true);
      view.on("mousedown", (ev) => {
        // Clear any leaked suppress flag from a previous drag.
        this._suppress_next_click = false;
        // Alt+drag → terminal repositioning mode (original behavior).
        this._repositioning_drag = ev.evt?.altKey === true;
        if (this._repositioning_drag) {
          // Do NOT enter selection state for repositioning drags.
          return;
        }
        // Trigger immediate selection state (dimming of other modules) as soon
        // as the user presses down, before Konva's drag threshold is crossed.
        // Only start a NEW selection when there is none active; if a terminal is
        // already selected the pointerclick on the target terminal handles the
        // connection.
        if (!this._vm._stage_context._current_selected_terminal) {
          this._vm.clicked_terminal(terminal_id);
        }
      });
      view.on("dragstart", (ev) => {
        // Prevent the dragstart from bubbling to the group. The group's dragstart
        // handler calls clicked_title → select_instances → _clear_terminal_selection,
        // which would immediately erase the selection state (and dimming) that
        // mousedown just applied.
        ev.cancelBubble = true;
        if (this._repositioning_drag) {
          // Alt+drag: use original terminal-repositioning behavior.
          this._terminal_reposition_dragstart_handler(view);
        } else {
          this._terminal_dragstart_handler(view);
        }
      });
      view.on("dragmove", () => {
        if (this._repositioning_drag) {
          this._terminal_reposition_dragmove_handler(view);
        } else {
          this._terminal_dragmove_handler(view);
        }
      });
      view.on("dragend", () => {
        if (this._repositioning_drag) {
          this._terminal_reposition_dragend_handler(view);
          this._repositioning_drag = false;
        } else {
          this._terminal_dragend_handler(view);
        }
      });
      view.on("mouseenter", () => {
        this._vm.set_cursor("pointer");
        const showTooltip: ShowTooltipEvent = {
          type: "SHOW_TOOLTIP",
          text: `Interface type: ${item.terminal.interface}`,
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
        // Suppress the spurious Konva click that follows stopDrag() in dragstart
        // (the terminal didn't physically move so Konva fires a click event).
        if (this._suppress_next_click) {
          this._suppress_next_click = false;
          ev.cancelBubble = true;
          return;
        }
        view_model.clicked_terminal(terminal_id);
        ev.cancelBubble = true;
      });

      return view;
    });

    // initialize correct terminal positions
    Object.entries(view_model.terminal_dist).forEach(([_alignment, terminal_ids]) => {
      this._recalculate_terminal_position(_alignment as TerminalAlignment, terminal_ids, false);
    });

    // register view model observer
    view_model.add_observer((ev) => this._vm_event_handler(ev));

    // set handlers
    // Auto-select module when drag starts without a prior click (FR-001)
    this.group.on("dragstart", () => {
      if (!this._vm.is_selected) {
        this._vm.clicked_title(false);
      }
    });
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
      fill: COLOR.MODULE_FILL,
      shadowBlur: 4,
      shadowOpacity: 0.4,
      shadowOffset: {
        x: 2,
        y: 2,
      },
      fillAfterStrokeEnabled: true,
      listening: true,
    });

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

    const selectionRect = new Konva.Rect({
      x: frame.x(),
      y: frame.y(),
      width: SIZE.FRAME_WIDTH,
      height: SIZE.FRAME_HEIGHT,
      fill: "transparent",
      stroke: "black",
      strokeWidth: 2,
      dash: [8, 4],
      cornerRadius: 4,
      listening: false,
      visible: view_model.is_selected,
    });
    this._selectionRect = selectionRect;

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
        // If a terminal is already selected on a different module, treat clicking
        // this module's body as "connect to my nearest compatible terminal".
        const origin = this._vm._stage_context._current_selected_terminal;
        if (origin && this._vm._instance_id !== origin.module_instance_id) {
          const stage = this.group.getStage() as Konva.Stage;
          const pos = stage?.getPointerPosition();
          if (pos) {
            let best_view: TerminalShape | null = null;
            let best_dist = Infinity;

            this._terminal_views.forEach((ts, idx) => {
              const item = this._vm.terminal_lookup[idx];
              // Must be opposite type.
              if (item.terminal.type === origin.type) return;
              // Must be interface-compatible.
              const [provIf, reqIf] =
                origin.type === "provide"
                  ? [origin.interface, item.terminal.interface]
                  : [item.terminal.interface, origin.interface];
              if (!this._vm._config_model.interfaces_match(provIf, reqIf)) return;
              // Must not already be connected to the origin terminal.
              const conn_queries = this._vm._stage_context._connection_queries;
              if (conn_queries) {
                const [provId, provLId, reqId, reqLId] =
                  origin.type === "provide"
                    ? [origin.module_instance_id, origin.terminal_lookup_id, this._vm._instance_id, idx]
                    : [this._vm._instance_id, idx, origin.module_instance_id, origin.terminal_lookup_id];
                if (conn_queries.is_connected_pair(provId, provLId, reqId, reqLId)) return;
              }
              const abs = ts.getAbsolutePosition();
              const dist = Math.hypot(abs.x - pos.x, abs.y - pos.y);
              if (dist < best_dist) {
                best_dist = dist;
                best_view = ts;
              }
            });

            if (best_view) {
              (best_view as TerminalShape).fire("pointerclick", { cancelBubble: true });
              ev.cancelBubble = true;
              return;
            }
          }
          // No compatible terminal on this module — consume the click without
          // disrupting the active terminal selection.
          ev.cancelBubble = true;
          return;
        }

        this._vm.clicked_title(ev.evt.shiftKey);
        ev.cancelBubble = true;
      });
    });

    this._title = title;

    this.group.add(frame, topStroke, selectionRect, typeInfo, title, ...this._terminal_views);
  }

  get_terminal_placement(id: number) {
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

  /**
   * Move this module to a new grid position, updating both the Konva group and
   * re-notifying connection observers. Used by the MOVE_SELECTION handler to
   * keep non-dragged modules visually in sync during a group drag (FR-005).
   */
  update_position(new_grid_pos: { x: number; y: number }) {
    const new_group_pos = { x: new_grid_pos.x * SIZE.GRID, y: new_grid_pos.y * SIZE.GRID };
    this.group.position(new_group_pos);
    const update_terminals = this._terminal_views.map(
      (item, id): TerminalPlacementWithID => ({
        alignment: item.terminal_alignment,
        id,
        x: item.x() + new_group_pos.x,
        y: item.y() + new_group_pos.y,
      }),
    );
    this._notify({ type: "TERMINALS_UPDATED", terminals: update_terminals, module_moved: true });
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
    } else if (ev.type === "TERMINAL_MODIFY_STATES") {
      // T012 / T013: Apply per-terminal visual states and derive ModuleVisualState.
      let has_selected = false;
      let has_compatible = false;
      let all_dimmed = true;

      Object.entries(ev.states).forEach(([idStr, state]: [string, TerminalVisualState]) => {
        const id = Number(idStr);
        this._terminal_views[id].set_visual_state(state);

        if (state === "selected") has_selected = true;
        if (state === "compatible-target") has_compatible = true;
        if (!state.startsWith("dimmed")) all_dimmed = false;
      });

      // No terminals → treat as idle.
      if (Object.keys(ev.states).length === 0) all_dimmed = false;

      // T013: Derive ModuleVisualState and apply group opacity.
      if (has_selected || has_compatible || !all_dimmed) {
        // "active" | "has-compatible" | "idle" — all render at full opacity.
        this.group.opacity(1);
      } else {
        // "dimmed" — group renders at 35 % opacity.
        this.group.opacity(0.35);
      }
    } else if (ev.type === "MODULE_MODEL_UPDATE") {
      this._title.setText(this._vm.id);
      this.group.position({
        x: this._vm.grid_position.x * SIZE.GRID,
        y: this._vm.grid_position.y * SIZE.GRID,
      });
    } else if (ev.type === "SELECTION_UPDATE") {
      this._selectionRect.visible(this._vm.is_selected);
      // Restore full opacity on SELECTION_UPDATE (fired when selection clears).
      this.group.opacity(1);
    }
  }

  _module_dragmove_handler() {
    const pos = this.group.position();

    const new_grid_pos = {
      x: Math.round(pos.x / SIZE.GRID),
      y: Math.round(pos.y / SIZE.GRID),
    };

    const cur_grid_pos = this._vm.grid_position;

    // We only update the MODEL here.
    // The visual snapping is handled by dragBoundFunc.

    if (cur_grid_pos.x !== new_grid_pos.x || cur_grid_pos.y !== new_grid_pos.y) {
      // If module is selected, move other selected modules
      if (this._vm.is_selected) {
        const dx = new_grid_pos.x - cur_grid_pos.x;
        const dy = new_grid_pos.y - cur_grid_pos.y;
        this._vm.move_selection(dx, dy);
      }

      // got a change, send notification and update view model
      this._vm.grid_position = new_grid_pos;

      // update all terminals
      // Use the actual layer-local group position (pos) for terminal
      // coordinates rather than re-computing new_group_pos.  With the
      // layer-local dragBoundFunc above, pos.x/pos.y are always clean
      // SIZE.GRID multiples in local space — using pos directly avoids any
      // residual drift from double-rounding.
      const update_terminals = this._terminal_views.map((item, id): TerminalPlacementWithID => {
        return {
          alignment: item.terminal_alignment,
          id,
          x: item.x() + pos.x,
          y: item.y() + pos.y,
        };
      });

      this._notify({
        type: "TERMINALS_UPDATED",
        terminals: update_terminals,
        module_moved: true,
      });
    }
  }

  /**
   * T023: Cancel native Konva drag; instead create a DragPreviewOverlay (ghost
   * icon + dashed line) and broadcast the same visual-state as a click so all
   * other modules dim / highlight accordingly.
   *
   * Exception: when the canvas is in multi-module-selection mode, a terminal
   * drag is almost certainly an accidental hit on a terminal that overlaps
   * another module's body (terminals extend outside the frame).  In that case
   * we hand off to the module GROUP drag so the whole selection moves together.
   */
  _terminal_dragstart_handler(view: TerminalShape) {
    // Cancel the terminal's own Konva drag in all cases.
    view.stopDrag();

    // Multi-select guard: if ≥2 modules are selected the user is group-dragging,
    // not initiating a connection.  Delegate to the module group so MOVE_SELECTION
    // broadcasts to all selected modules.
    if (this._vm._stage_context._selected_instances.size > 1) {
      this.group.startDrag();
      return;
    }

    const terminal_id = view.terminal_id;
    const terminal_lookup = this._vm.terminal_lookup[terminal_id];

    // Absolute position of the terminal icon on the stage.
    const abs = view.getAbsolutePosition();

    // Pick icon + fill matching the terminal's current idle icon (by type).
    const is_provide = terminal_lookup.terminal.type === "provide";
    const iconData = is_provide ? ICON_DATA.TERMINAL_PROVIDE : ICON_DATA.TERMINAL_REQUIREMENT;
    const iconFill = is_provide ? COLOR.TERMINAL_PROVIDE : COLOR.TERMINAL_REQUIREMENT;

    // Acquire the Konva stage via the group's ancestry.
    const stage = this.group.getStage() as Konva.Stage;

    // Suppress the Konva pointerclick that fires because stopDrag() above left
    // the terminal in its original position (mousedown + mouseup = same node).
    this._suppress_next_click = true;

    this._drag_overlay = new DragPreviewOverlay(stage, {
      originPosition: abs,
      iconData,
      iconFill,
      terminalType: terminal_lookup.terminal.type,
    });

    // T026: Register a window-level mouseup handler — this is the REAL drop
    // detector.  stopDrag() causes Konva's dragend to fire immediately (before
    // the overlay is even created), so we cannot rely on Konva's dragend to
    // resolve the drop.  This window-level handler fires on actual mouse release
    // and runs the full drop logic.
    this._window_drag_cancel = () => {
      // Clean up stage mousemove listener.
      if (this._stage_mousemove_cleanup) {
        this._stage_mousemove_cleanup();
        this._stage_mousemove_cleanup = null;
      }
      this._window_drag_cancel = null;
      // Delegate to dragend handler which does the full drop resolution.
      this._terminal_dragend_handler(view);
    };
    window.addEventListener("mouseup", this._window_drag_cancel, { once: true });

    // Register a stage-container DOM mousemove so the overlay follows the cursor.
    // We cannot use Konva's dragmove because stopDrag() suppresses it.
    // We also capture the pointer position here because stage.getPointerPosition()
    // is not updated from window-level mouseup events.
    const container = stage?.container();
    if (container) {
      // Container-relative mousemove: updates position and drives overlay.
      const onContainerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        this._last_drag_pos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        this._terminal_dragmove_handler();
      };
      // Window-level mousemove: when cursor leaves container set pos to null so
      // a release outside the canvas correctly cancels instead of connecting.
      const onWindowMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
          this._last_drag_pos = null;
        }
      };
      container.addEventListener("mousemove", onContainerMove);
      window.addEventListener("mousemove", onWindowMove);
      this._stage_mousemove_cleanup = () => {
        container.removeEventListener("mousemove", onContainerMove);
        window.removeEventListener("mousemove", onWindowMove);
      };
    }

    // Enter (or re-enter) the selection state so all modules dim/highlight.
    // mousedown may have already done this if no prior selection was active;
    // drag_terminal_start is unconditional and safe to call again.
    const { terminal } = terminal_lookup;
    this._vm._stage_context.drag_terminal_start(terminal, this._vm._instance_id, terminal_id);
  }

  /**
   * T024: Update the DragPreviewOverlay position on each pointer move.
   * RAF-throttled to stay within 16 ms (T031).
   * Called by the stage-container mousemove DOM listener (not Konva dragmove,
   * which is killed by stopDrag() in _terminal_dragstart_handler).
   */
  _terminal_dragmove_handler(_view?: TerminalShape) {
    if (!this._drag_overlay) return;
    if (this._drag_raf_pending) return;

    this._drag_raf_pending = true;
    requestAnimationFrame(() => {
      this._drag_raf_pending = false;
      if (!this._drag_overlay) return;
      // Prefer the position captured from the DOM mousemove listener over
      // stage.getPointerPosition(), which may lag or be unavailable during
      // a synthetic/non-Konva drag sequence.
      const pos = this._last_drag_pos ?? (this.group.getStage() as Konva.Stage)?.getPointerPosition();
      if (pos) {
        this._drag_overlay.update(pos);
      }
    });
  }

  /**
   * T025: On drag end, resolve the drop target.
   * - If pointer is over a TerminalShape with compatible type → connect.
   * - If pointer is over a module body → find nearest compatible terminal and connect.
   * - Otherwise → cancel (unselect).
   * Always destroys the DragPreviewOverlay.
   *
   * NOTE: Because stopDrag() in _terminal_dragstart_handler causes Konva to fire
   * dragend synchronously (before the overlay is even created), this handler is
   * also reached on that spurious early fire.  The guard below skips all drop
   * logic in that case — the actual drop is resolved by _window_drag_cancel.
   */
  _terminal_dragend_handler(source_view: TerminalShape) {
    // Spurious early fire from stopDrag() — overlay not yet created, ignore.
    if (!this._drag_overlay) return;

    // Remove the window fallback — we are handling the drop ourselves.
    if (this._window_drag_cancel) {
      window.removeEventListener("mouseup", this._window_drag_cancel);
      this._window_drag_cancel = null;
    }

    if (this._stage_mousemove_cleanup) {
      this._stage_mousemove_cleanup();
      this._stage_mousemove_cleanup = null;
    }

    this._drag_overlay.destroy();
    this._drag_overlay = null;

    // Use the last position captured by our DOM mousemove listener. This is
    // more reliable than stage.getPointerPosition() inside a window mouseup
    // handler, because Konva only updates getPointerPosition() from its own
    // pointer events, not from window-level listeners.
    const pos = this._last_drag_pos;
    this._last_drag_pos = null;

    const stage = this.group.getStage() as Konva.Stage;
    if (!stage || !pos) {
      this._vm._stage_context.unselect();
      return;
    }

    // getIntersection uses absolute (stage) coordinates.
    const target = stage.getIntersection(pos);

    if (!target) {
      this._vm._stage_context.unselect();
      return;
    }

    // Ignore hits within our own module group.
    if (target.getParent() === this.group) {
      this._vm._stage_context.unselect();
      return;
    }

    // Case 1: Hit a TerminalShape directly.
    if (target instanceof TerminalShape && target !== source_view) {
      // The pointerclick handler on terminal views already handles connect logic;
      // we replicate the same call here so drag-to-connect behaves identically.
      const target_module_group = target.getParent() as Konva.Group;
      if (target_module_group) {
        const target_vm_id_str = target_module_group.id();
        if (target_vm_id_str) {
          // Compatibility gate: dimmed-incompatible / same-role terminals remain
          // listening:true (only opacity is reduced), so getIntersection() can
          // return them. If the hit terminal is the same role as the origin, do
          // NOT unselect — instead fall through to Case 2 so the nearest
          // *compatible* terminal on the same module group is found and connected.
          const origin = this._vm._stage_context._current_selected_terminal;
          if (!origin || target.terminal_type !== origin.type) {
            target.fire("pointerclick", { cancelBubble: true });
            return;
          }
          // Same-role hit: fall through to Case 2 with this terminal's parent group.
        }
      }
    }

    // Case 2: Hit a module body node (Frame Rect, Title Text, type Text, or topStroke Line).
    // Walk up to the parent group named "module".
    let node: Konva.Node | null = target;
    let moduleGroup: Konva.Group | null = null;
    while (node) {
      if (node instanceof Konva.Group && node.name() === "module" && node !== this.group) {
        moduleGroup = node as Konva.Group;
        break;
      }
      node = node.getParent();
    }

    if (moduleGroup) {
      // moduleGroup.id() is the module's string name (e.g. "evse_manager"), NOT the
      // numeric ModuleInstanceID. Look up the numeric ID via the config model.
      const module_name = moduleGroup.id();
      const target_instance_id_entry = Object.entries(this._vm._config_model._instances).find(
        ([, inst]) => inst.id === module_name,
      );
      const target_instance_id = target_instance_id_entry ? Number(target_instance_id_entry[0]) : NaN;

      const origin = this._vm._stage_context._current_selected_terminal;
      if (!origin || isNaN(target_instance_id)) {
        this._vm._stage_context.unselect();
        return;
      }

      // Find the nearest compatible terminal on the target module by Euclidean distance.
      const conn_queries = this._vm._stage_context._connection_queries;
      let best_terminal_id = -1;
      let best_dist = Infinity;

      // Use moduleGroup directly — we already have it from the walk-up above.
      const terminal_children = moduleGroup.children?.filter((c) => c instanceof TerminalShape) as TerminalShape[];

      terminal_children?.forEach((ts) => {
        const ts_id = ts.terminal_id;
        if (!conn_queries) return;

        // ── Compatibility checks ──────────────────────────────────────────────
        // Use properties stored directly on the TerminalShape — this avoids the
        // flat_terminals[ts_id] index-mapping approach, which breaks after
        // terminals are repositioned via alt-drag (view_config.terminals is
        // updated but TerminalShape.terminal_id is permanently set at
        // construction and no longer aligns with view_config key order).
        const ts_interface = ts.terminal_interface;
        if (!ts_interface) return; // no interface stored — skip

        // Same type → incompatible role.
        if (ts.terminal_type === origin.type) return;
        // Interface mismatch.
        const [provIf, reqIf] =
          origin.type === "provide" ? [origin.interface, ts_interface] : [ts_interface, origin.interface];
        if (!this._vm._config_model.interfaces_match(provIf, reqIf)) return;
        // Already connected pair.
        const [provId, provLId, reqId, reqLId] =
          origin.type === "provide"
            ? [origin.module_instance_id, origin.terminal_lookup_id, target_instance_id, ts_id]
            : [target_instance_id, ts_id, origin.module_instance_id, origin.terminal_lookup_id];
        if (conn_queries.is_connected_pair(provId, provLId, reqId, reqLId)) return;
        // ─────────────────────────────────────────────────────────────────────

        const abs_ts = ts.getAbsolutePosition();
        const dist = Math.hypot(abs_ts.x - pos.x, abs_ts.y - pos.y);

        if (dist < best_dist) {
          best_dist = dist;
          best_terminal_id = ts_id;
        }
      });

      if (best_terminal_id !== -1 && conn_queries) {
        // Fire pointerclick on the best matching TerminalShape.
        const best_ts = (moduleGroup.children as Konva.Node[]).find(
          (c) => c instanceof TerminalShape && (c as TerminalShape).terminal_id === best_terminal_id,
        ) as TerminalShape | undefined;
        if (best_ts) {
          best_ts.fire("pointerclick", { cancelBubble: true });
          return;
        }
      }
    }

    // Case 3: No valid target — cancel.
    this._vm._stage_context.unselect();
  }

  // ─── Terminal repositioning (Alt+drag) ───────────────────────────────────

  /**
   * Alt+drag start: clone the terminal as a PLACEHOLDER ghost and allow Konva
   * to drag the original view freely (original pre-002 behavior preserved).
   */
  _terminal_reposition_dragstart_handler(view: TerminalShape) {
    const replace_terminal = view.clone() as TerminalShape;
    replace_terminal.set_appearence("PLACEHOLDER");
    this._terminal_views[view.terminal_id] = replace_terminal;
    this.group.add(replace_terminal);
    view.moveToTop();
    this.group.clearCache();
  }

  /**
   * Alt+drag move: detect which side of the module the dragged terminal
   * is hovering over and update the view model layout accordingly.
   */
  _terminal_reposition_dragmove_handler(view: TerminalShape) {
    const hit = _check_hit(view.x(), view.y(), this._vm.terminal_dist);
    if (!hit.align) return;
    if (hit.align !== this._vm.terminal_lookup[view.terminal_id].alignment) {
      view.set_alignment(hit.align);
    }
    const changed_areas = this._vm.move_terminal(view.terminal_id, hit.align, hit.index);
    changed_areas.forEach((alignment) => {
      this._recalculate_terminal_position(alignment, this._vm.terminal_dist[alignment], true);
    });
  }

  /**
   * Alt+drag end: remove the placeholder, restore the dragged terminal view,
   * and snap it to its final position.
   */
  _terminal_reposition_dragend_handler(view: TerminalShape) {
    this._terminal_views[view.terminal_id].destroy();
    this._terminal_views[view.terminal_id] = view;
    const end_align = this._vm.terminal_lookup[view.terminal_id].alignment;
    this._recalculate_terminal_position(end_align, this._vm.terminal_dist[end_align]);
  }

  // ─────────────────────────────────────────────────────────────────────────

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
}
