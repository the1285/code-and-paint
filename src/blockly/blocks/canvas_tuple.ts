import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR, CANVAS_COORDINATE_TYPE } from "../constants";

export function addBlocklyCanvasCoordinateTupleBlock(): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "coord_tuple";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "%2 Y %1 X",
    args0: [
      { type: "input_value", name: "X", check: "Number" },
      { type: "input_value", name: "Y", check: "Number" },
    ],
    inputsInline: true,
    output: CANVAS_COORDINATE_TYPE,
    colour: 225,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const value_x =
      javascriptGenerator.valueToCode(block, "X", Order.ATOMIC) || "0";
    const value_y =
      javascriptGenerator.valueToCode(block, "Y", Order.ATOMIC) || "0";
    return [`[${value_x}, ${value_y}]`, Order.ATOMIC];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
