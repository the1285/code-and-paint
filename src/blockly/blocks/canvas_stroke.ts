import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";
import { CANVAS_COORDINATE_TYPE, CANVAS_DRAWING_TYPE } from "../constants";

export function addBlocklyCanvasStrokeBlock(): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "stroke";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "خط ها را رسم کن",
    previousStatement: CANVAS_DRAWING_TYPE,
    nextStatement: CANVAS_DRAWING_TYPE,
    colour: 300,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    return `CanvasBridge.stroke();`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
