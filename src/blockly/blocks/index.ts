import { JavascriptGenerator } from "blockly/javascript";
import { addBlocklyCanvasMoveToBlock } from "./canvas_move_to";
import { CanvasBlockDefinition } from "./types";
import * as Blockly from "blockly";
import { addBlocklyCanvasCoordinateTupleBlock } from "./canvas_tuple";
import { addBlocklyCanvasDrawingProviderBlock } from "./canvas_canvas";

type BlockDefiner = (generator: JavascriptGenerator) => CanvasBlockDefinition;

const definers: BlockDefiner[] = [
  addBlocklyCanvasDrawingProviderBlock,
  addBlocklyCanvasMoveToBlock,
  addBlocklyCanvasCoordinateTupleBlock,
];

export function appendCanvasFunctionsAndReturnIds(
  generator: JavascriptGenerator
): string[] {
  const computedDefinitions = definers.map((d) => d(generator));

  Blockly.common.defineBlocksWithJsonArray(
    computedDefinitions.map((d) => d.definition)
  );

  return computedDefinitions.map((d) => d.id);
}
