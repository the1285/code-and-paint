import { javascriptGenerator } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";

export function addBlocklyCanvasStrokeBlock(): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "stroke";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "خطوط شکل را رنگ کن",
    previousStatement: null,
    nextStatement: null,
    colour: 300,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    return `CanvasBridge.stroke();`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
