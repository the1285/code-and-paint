import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR } from "../constants";

const FONT_OPTIONS: [string, string][] = [
  ["Vazirmatn", "Vazirmatn"],
  ["Tahoma", "Tahoma"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["monospace", "monospace"],
];

export function addBlocklyCanvasFontBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_font";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "فونت را به %1 با اندازه %2 تنظیم کن",
    args0: [
      {
        type: "field_dropdown",
        name: "FAMILY",
        options: FONT_OPTIONS,
      },
      {
        type: "input_value",
        name: "SIZE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const size =
      javascriptGenerator.valueToCode(block, "SIZE", Order.ATOMIC) || "16";
    const family = block.getFieldValue("FAMILY");
    const familyLiteral = javascriptGenerator.quote_(family);
    return `CanvasBridge.setFont(${size}, ${familyLiteral});`;
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
