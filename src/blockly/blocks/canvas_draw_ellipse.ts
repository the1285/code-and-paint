import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import {
  CANVAS_BLOCK_COLOR,
  CANVAS_COORDINATE_TYPE,
  CANVAS_SIZE_TYPE,
} from "../constants";

export function addBlocklyCanvasDrawEllipseBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "draw_ellipse";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "بیضی بکش از مرکز %1 با اندازه %2",
    args0: [
      { type: "input_value", name: "CENTER", check: CANVAS_COORDINATE_TYPE },
      { type: "input_value", name: "SIZE", check: CANVAS_SIZE_TYPE },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const center =
      javascriptGenerator.valueToCode(block, "CENTER", Order.ATOMIC) ||
      "[0, 0]";
    const size =
      javascriptGenerator.valueToCode(block, "SIZE", Order.ATOMIC) || "[0, 0]";
    return `CanvasBridge.drawEllipse(${center}, ${size});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
