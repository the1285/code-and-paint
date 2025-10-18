import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_SIZE_TYPE } from "../constants";

export function addBlocklyCanvasSizeTupleBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "size_tuple";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "%1 عرض %2 ارتفاع",
    args0: [
      { type: "input_value", name: "WIDTH", check: "Number" },
      { type: "input_value", name: "HEIGHT", check: "Number" },
    ],
    inputsInline: true,
    output: CANVAS_SIZE_TYPE,
    colour: 225,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const width =
      javascriptGenerator.valueToCode(block, "WIDTH", Order.ATOMIC) || "0";
    const height =
      javascriptGenerator.valueToCode(block, "HEIGHT", Order.ATOMIC) || "0";
    return [`[${width}, ${height}]`, Order.ATOMIC];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
