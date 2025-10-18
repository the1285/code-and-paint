import "@blockly/field-colour-hsv-sliders";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import {
  CANVAS_BLOCK_COLOR,
  CANVAS_STYLE_TYPE,
} from "../constants";

export function addBlocklyCanvasFillStyleBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "fill_style";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "استایل پر کردن را تنظیم کن به رنگ %1",
    args0: [
      {
        type: "field_colour_hsv_sliders",
        name: "COLOUR",
        colour: "#000000",
      },
    ],
    message1: "یا استایل دلخواه %1",
    args1: [
      {
        type: "input_value",
        name: "STYLE",
        check: [CANVAS_STYLE_TYPE],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const styleValue =
      javascriptGenerator.valueToCode(block, "STYLE", Order.ATOMIC) || "";

    if (styleValue) {
      return `CanvasBridge.setFillStyle(${styleValue});`;
    }

    const colour = block.getFieldValue("COLOUR") || "#000000";
    const quotedColour = javascriptGenerator.quote_(colour);
    return `CanvasBridge.setFillStyle(${quotedColour});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
