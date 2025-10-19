import "blockly-field-color-wheel/dist/index.js";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR, CANVAS_STYLE_TYPE } from "../constants";

export function addBlocklyCanvasColorPickerBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_color_picker";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "%1",
    args0: [
      {
        type: "field_colour_hsv_sliders",
        name: "COLOUR",
        colour: "#F37E20",
      },
    ],
    output: CANVAS_STYLE_TYPE,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const code = javascriptGenerator.quote_(block.getFieldValue("COLOUR"));
    return [code, Order.ATOMIC];
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
