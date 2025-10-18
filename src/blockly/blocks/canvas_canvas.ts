import { javascriptGenerator } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";

export function addBlocklyCanvasDrawingProviderBlock(): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "drawing_provider";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "بوم نقاشی",
    colour: 30,
    nextStatement: null,
    hat: "cap",
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function () {
    return "CanvasBridge.getReadyForNewDrawing();\n";
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
