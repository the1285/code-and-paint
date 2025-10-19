import { javascriptGenerator } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR } from "../constants";

export function addBlocklyCanvasBeginPathBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "begin_path";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "شکل جدید شروع کن",
    previousStatement: null,
    nextStatement: null,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function () {
    return `CanvasBridge.beginPath();`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
