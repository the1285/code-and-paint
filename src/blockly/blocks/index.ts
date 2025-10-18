import { JavascriptGenerator } from "blockly/javascript";
import { addBlocklyCanvasMoveToBlock } from "./canvas_move_to";
import { CanvasBlockDefinition } from "./types";
import * as Blockly from "blockly";
import { addBlocklyCanvasCoordinateTupleBlock } from "./canvas_tuple";
import { addBlocklyCanvasDrawingProviderBlock } from "./canvas_canvas";
import { addBlocklyCanvasLineToBlock } from "./canvas_line_to";
import { addBlocklyCanvasStrokeBlock } from "./canvas_stroke";

type BlockDefiner = () => CanvasBlockDefinition;

const definers: BlockDefiner[] = [
  addBlocklyCanvasDrawingProviderBlock,
  addBlocklyCanvasCoordinateTupleBlock,
  addBlocklyCanvasStrokeBlock,
  addBlocklyCanvasLineToBlock,
  addBlocklyCanvasMoveToBlock,
];

export function appendCanvasFunctionsAndReturnIds(): string[] {
  const computedDefinitions = definers.map((d) => d());

  Blockly.common.defineBlocksWithJsonArray(
    computedDefinitions.map((d) => d.definition)
  );

  return computedDefinitions.map((d) => d.id);
}
