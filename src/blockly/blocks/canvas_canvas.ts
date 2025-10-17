import { JavascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition as CustomBlockDefinition } from "./types";
import { CANVAS_COORDINATE_TYPE, CANVAS_DRAWING_TYPE } from "../constants";

export function addBlocklyCanvasDrawingProviderBlock(
  generator: JavascriptGenerator
): CustomBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "drawing";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    message0: "نقاشی %1",
    args0: [
      {
        type: "input_statement",
        name: "BODY",
        check: CANVAS_DRAWING_TYPE,
        align: "CENTRE",
      },
    ],
    colour: 260,
    hat: "cap",
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  generator.forBlock[id] = function (block, generator) {
    const body = generator.statementToCode(block, "BODY");
    return `
      (() => {
        const canvas = document.getElementById("output-canvas");
        const ctx = canvas.getContext('2d');
        ${body};
      })();
    `;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
