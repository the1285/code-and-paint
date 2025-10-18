import "@blockly/field-colour-hsv-sliders";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import {
  CANVAS_BLOCK_COLOR,
  CANVAS_STYLE_TYPE,
  CANVAS_ANGLE_TYPE,
} from "../constants";

export function addBlocklyCanvasGradientStyleBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "gradient_style";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "گرادیان از رنگ %1 تا %2 با زاویه %3",
    args0: [
      {
        type: "field_colour_hsv_sliders",
        name: "START",
        colour: "#ff0000",
      },
      {
        type: "field_colour_hsv_sliders",
        name: "END",
        colour: "#0000ff",
      },
      {
        type: "input_value",
        name: "ANGLE",
        check: [CANVAS_ANGLE_TYPE, "Number"],
      },
    ],
    inputsInline: false,
    output: CANVAS_STYLE_TYPE,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const angle =
      javascriptGenerator.valueToCode(block, "ANGLE", Order.ATOMIC) || "0";
    const start = block.getFieldValue("START") || "#ff0000";
    const end = block.getFieldValue("END") || "#0000ff";
    const startQuoted = javascriptGenerator.quote_(start);
    const endQuoted = javascriptGenerator.quote_(end);

    const code = `CanvasBridge.createLinearGradient(${angle}, ${startQuoted}, ${endQuoted})`;
    return [code, Order.FUNCTION_CALL];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
