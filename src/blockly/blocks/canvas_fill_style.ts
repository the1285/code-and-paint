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
    message0: "تغییر رنگ قلم داخل شکل به %1",
    args0: [
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

    const computedStyle = styleValue || javascriptGenerator.quote_("#000000");
    return `CanvasBridge.setFillStyle(${computedStyle});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
