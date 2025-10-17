import { JavascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";
import { CANVAS_COORDINATE_TYPE, CANVAS_DRAWING_TYPE } from "../constants";

export function addBlocklyCanvasMoveToBlock(
  generator: JavascriptGenerator
): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "move_to";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "برو به %1 ",
    args0: [{ type: "input_value", name: "XY", check: CANVAS_COORDINATE_TYPE }],
    previousStatement: CANVAS_DRAWING_TYPE,
    nextStatement: CANVAS_DRAWING_TYPE,
    colour: 300,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  generator.forBlock[id] = function (block) {
    const coordinates = generator.valueToCode(block, "XY", Order.ATOMIC);
    return `ctx.moveTo(...${coordinates})`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
