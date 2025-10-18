import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";
import { CANVAS_COORDINATE_TYPE } from "../constants";

export function addBlocklyCanvasLineToBlock(): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "line_to";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "خط بکش به %1 ",
    args0: [
      {
        type: "input_value",
        name: "XY",
        check: CANVAS_COORDINATE_TYPE,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const coordinates =
      javascriptGenerator.valueToCode(block, "XY", Order.ATOMIC) || "[0, 0]";
    return `CanvasBridge.lineTo(${coordinates});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
