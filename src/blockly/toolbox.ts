// Locale is set once in app entry (src/index.ts).

import { ToolboxDefinition } from "blockly/core/utils/toolbox";
import { CANVAS_BLOCK_COLOR } from "./constants";

// ─── Base Toolbox ──────────────────────────────────────────────────────── ✦ ─

const baseToolboxTemplate = [
  { kind: "sep" },
  {
    kind: "category",
    name: "منطق",
    colour: "%{BKY_LOGIC_HUE}",
    contents: [
      { kind: "block", type: "controls_if" },
      { kind: "block", type: "logic_compare" },
      { kind: "block", type: "logic_operation" },
      { kind: "block", type: "logic_negate" },
      { kind: "block", type: "logic_boolean" },
      { kind: "block", type: "logic_null" },
      { kind: "block", type: "logic_ternary" },
    ],
  },
  {
    kind: "category",
    name: "حلقه‌ها",
    colour: "%{BKY_LOOPS_HUE}",
    contents: [
      {
        kind: "block",
        type: "controls_repeat_ext",
        inputs: {
          TIMES: {
            block: {
              type: "math_number",
              fields: { NUM: 10 },
            },
          },
        },
      },
      { kind: "block", type: "controls_whileUntil" },
      {
        kind: "block",
        type: "controls_for",
        inputs: {
          FROM: { block: { type: "math_number", fields: { NUM: 1 } } },
          TO: { block: { type: "math_number", fields: { NUM: 10 } } },
          BY: { block: { type: "math_number", fields: { NUM: 1 } } },
        },
      },
      { kind: "block", type: "controls_forEach" },
      { kind: "block", type: "controls_flow_statements" },
    ],
  },
  {
    kind: "category",
    name: "ریاضیات",
    colour: "%{BKY_MATH_HUE}",
    contents: [
      { kind: "block", type: "math_number" },
      { kind: "block", type: "math_arithmetic" },
      { kind: "block", type: "math_single" },
      { kind: "block", type: "math_trig" },
      { kind: "block", type: "math_constant" },
      { kind: "block", type: "math_number_property" },
      { kind: "block", type: "math_round" },
      { kind: "block", type: "math_on_list" },
      { kind: "block", type: "math_modulo" },
      {
        kind: "block",
        type: "math_constrain",
        inputs: {
          LOW: { block: { type: "math_number", fields: { NUM: 1 } } },
          HIGH: { block: { type: "math_number", fields: { NUM: 100 } } },
        },
      },
      {
        kind: "block",
        type: "math_random_int",
        inputs: {
          FROM: { block: { type: "math_number", fields: { NUM: 1 } } },
          TO: { block: { type: "math_number", fields: { NUM: 100 } } },
        },
      },
      { kind: "block", type: "math_random_float" },
      { kind: "block", type: "math_atan2" },
    ],
  },
  {
    kind: "category",
    name: "متن",
    colour: "%{BKY_TEXTS_HUE}",
    contents: [
      { kind: "block", type: "text" },
      { kind: "block", type: "text_join" },
      {
        kind: "block",
        type: "text_append",
        inputs: {
          TEXT: { kind: "block", type: "text" },
        },
      },
      { kind: "block", type: "text_length" },
      { kind: "block", type: "text_isEmpty" },
      { kind: "block", type: "text_indexOf" },
      { kind: "block", type: "text_charAt" },
      { kind: "block", type: "text_changeCase" },
      { kind: "block", type: "text_trim" },
      { kind: "block", type: "text_print" },
      {
        kind: "block",
        type: "text_prompt_ext",
        inputs: {
          TEXT: { kind: "block", type: "text" },
        },
      },
    ],
  },
  {
    kind: "category",
    name: "فهرست‌ها",
    colour: "%{BKY_LISTS_HUE}",
    contents: [
      { kind: "block", type: "lists_create_empty" },
      { kind: "block", type: "lists_create_with" },
      {
        kind: "block",
        type: "lists_repeat",
        inputs: {
          NUM: { block: { type: "math_number", fields: { NUM: 5 } } },
        },
      },
      { kind: "block", type: "lists_length" },
      { kind: "block", type: "lists_isEmpty" },
      { kind: "block", type: "lists_indexOf" },
      { kind: "block", type: "lists_getIndex" },
      { kind: "block", type: "lists_setIndex" },
    ],
  },
  { kind: "sep" },
  {
    kind: "category",
    name: "متغیرها",
    custom: "VARIABLE",
    colour: "%{BKY_VARIABLES_HUE}",
  },
  {
    kind: "category",
    name: "رویه‌ها",
    custom: "PROCEDURE",
    colour: "%{BKY_PROCEDURES_HUE}",
  },
];

// ─── Create Toolbox ────────────────────────────────────────────────────── ✦ ─

export function generateBlocklyToolbox(
  customCanvasIds: string[]
): ToolboxDefinition {
  return {
    kind: "categoryToolbox",
    contents: [
      generateCategoryForCanvas(customCanvasIds),
      ...baseToolboxTemplate,
    ],
  };
}

// ─── Generate Category For Canvas ──────────────────────────────────────── ✦ ─

function generateCategoryForCanvas(ids: string[]) {
  return {
    kind: "category",
    name: "بوم و نقاشی",
    colour: CANVAS_BLOCK_COLOR,
    contents: ids.map((id) => ({
      kind: "block",
      type: id,
    })),
  };
}
