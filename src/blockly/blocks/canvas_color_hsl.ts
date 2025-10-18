import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR, CANVAS_STYLE_TYPE } from "../constants";

export function addBlocklyCanvasColorHslBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_color_hsl";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "رنگ با فام %1 اشباع %2 درخشندگی %3",
    args0: [
      { type: "input_value", name: "H", check: "Number" },
      { type: "input_value", name: "S", check: "Number" },
      { type: "input_value", name: "L", check: "Number" },
    ],
    output: CANVAS_STYLE_TYPE,
    inputsInline: true,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const h = javascriptGenerator.valueToCode(block, "H", Order.ATOMIC) || "0";
    const s = javascriptGenerator.valueToCode(block, "S", Order.ATOMIC) || "0";
    const l = javascriptGenerator.valueToCode(block, "L", Order.ATOMIC) || "0";
    const code = `CanvasBridge.colorFromHsl(${h}, ${s}, ${l})`;
    return [code, Order.FUNCTION_CALL];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
