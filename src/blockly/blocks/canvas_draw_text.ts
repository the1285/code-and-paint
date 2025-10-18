import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import {
  CANVAS_BLOCK_COLOR,
  CANVAS_COORDINATE_TYPE,
} from "../constants";

export function addBlocklyCanvasDrawTextBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_draw_text";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "متن %1 را در موقعیت %2 بنویس",
    args0: [
      { type: "input_value", name: "TEXT", check: "String" },
      { type: "input_value", name: "POSITION", check: CANVAS_COORDINATE_TYPE },
    ],
    previousStatement: null,
    nextStatement: null,
    inputsInline: false,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const text =
      javascriptGenerator.valueToCode(block, "TEXT", Order.ATOMIC) || '""';
    const position =
      javascriptGenerator.valueToCode(block, "POSITION", Order.ATOMIC) ||
      "[0, 0]";
    return `CanvasBridge.drawText(${text}, ${position});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
