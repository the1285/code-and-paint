import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR, CANVAS_COORDINATE_TYPE } from "../constants";

export function addBlocklyCanvasTranslateBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_translate";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "بوم را به اندازه %1 جابه‌جا کن",
    args0: [
      { type: "input_value", name: "OFFSET", check: CANVAS_COORDINATE_TYPE },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const offset =
      javascriptGenerator.valueToCode(block, "OFFSET", Order.ATOMIC) ||
      "[0, 0]";
    return `CanvasBridge.translate(${offset});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
