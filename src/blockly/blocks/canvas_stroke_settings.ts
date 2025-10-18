import { javascriptGenerator, Order } from "blockly/javascript";
import { CanvasBlockDefinition } from "./types";
import { CANVAS_BLOCK_COLOR } from "../constants";

type StrokeCapOption = "butt" | "round" | "square";
type StrokeJoinOption = "miter" | "round" | "bevel";

export function addBlocklyCanvasStrokeSettingsBlock(): CanvasBlockDefinition {
  // ─── Setup ───────────────────────────────────────────────────────────

  const id = "canvas_stroke_settings";

  // ─── Block Definition ────────────────────────────────────────────────

  const definition = {
    type: id,
    tooltip: "",
    helpUrl: "",
    message0: "تنظیم خط: ضخامت %1 الگو %2 انتها %3 اتصال %4",
    args0: [
      { type: "input_value", name: "WIDTH", check: "Number" },
      { type: "input_value", name: "DASH", check: "Array" },
      {
        type: "field_dropdown",
        name: "CAP",
        options: [
          ["مسطح", "butt"],
          ["گرد", "round"],
          ["چهارگوش", "square"],
        ],
      },
      {
        type: "field_dropdown",
        name: "JOIN",
        options: [
          ["گوشه تیز", "miter"],
          ["گرد", "round"],
          ["مورب", "bevel"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    inputsInline: false,
    colour: CANVAS_BLOCK_COLOR,
  };

  // ─── Code Generator ──────────────────────────────────────────────────

  javascriptGenerator.forBlock[id] = function (block) {
    const width =
      javascriptGenerator.valueToCode(block, "WIDTH", Order.ATOMIC) || "1";
    const dash =
      javascriptGenerator.valueToCode(block, "DASH", Order.ATOMIC) || "[]";
    const cap = block.getFieldValue("CAP") as StrokeCapOption;
    const join = block.getFieldValue("JOIN") as StrokeJoinOption;

    return [
      `CanvasBridge.setLineWidth(${width});`,
      `CanvasBridge.setLineDash(${dash});`,
      `CanvasBridge.setLineCap("${cap}");`,
      `CanvasBridge.setLineJoin("${join}");`,
    ].join("\n");
  };

  // ─── Done ────────────────────────────────────────────────────────────

  return { id, definition };
}
