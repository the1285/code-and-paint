import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR, CANVAS_STYLE_TYPE } from "../constants";

export function addBlocklyCanvasColorRgbBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_color_rgb";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "رنگ با قرمز %1 سبز %2 آبی %3",
    args0: [
      { type: "input_value", name: "R", check: "Number" },
      { type: "input_value", name: "G", check: "Number" },
      { type: "input_value", name: "B", check: "Number" },
    ],
    output: CANVAS_STYLE_TYPE,
    inputsInline: true,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const r = javascriptGenerator.valueToCode(block, "R", Order.ATOMIC) || "0";
    const g = javascriptGenerator.valueToCode(block, "G", Order.ATOMIC) || "0";
    const b = javascriptGenerator.valueToCode(block, "B", Order.ATOMIC) || "0";
    const code = `CanvasBridge.colorFromRgb(${r}, ${g}, ${b})`;
    return [code, Order.FUNCTION_CALL];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
