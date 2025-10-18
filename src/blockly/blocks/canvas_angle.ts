import "@blockly/field-angle";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR, CANVAS_ANGLE_TYPE } from "../constants";

export function addBlocklyCanvasAngleBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_angle";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "زاویه %1 درجه",
    args0: [
      {
        type: "field_angle",
        name: "ANGLE",
        value: 0,
      },
    ],
    output: CANVAS_ANGLE_TYPE,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const angle = block.getFieldValue("ANGLE") || "0";
    return [angle, Order.ATOMIC];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
