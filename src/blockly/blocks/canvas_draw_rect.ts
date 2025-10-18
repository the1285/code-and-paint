import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import {
  CANVAS_BLOCK_COLOR,
  CANVAS_COORDINATE_TYPE,
  CANVAS_SIZE_TYPE,
} from "../constants";

export function addBlocklyCanvasDrawRectBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "draw_rect";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "مستطیل بکش از %1 با اندازه %2",
    args0: [
      { type: "input_value", name: "POSITION", check: CANVAS_COORDINATE_TYPE },
      { type: "input_value", name: "SIZE", check: CANVAS_SIZE_TYPE },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const position =
      javascriptGenerator.valueToCode(block, "POSITION", Order.ATOMIC) ||
      "[0, 0]";
    const size =
      javascriptGenerator.valueToCode(block, "SIZE", Order.ATOMIC) || "[0, 0]";
    return `CanvasBridge.drawRect(${position}, ${size});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
