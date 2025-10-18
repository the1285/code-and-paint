import { CanvasBlockDefinition } from "./types";
import * as Blockly from "blockly";
import { addBlocklyCanvasCoordinateTupleBlock } from "./canvas_tuple";
import { addBlocklyCanvasLineToBlock } from "./canvas_line_to";
import { addBlocklyCanvasStrokeBlock } from "./canvas_stroke";
import { addBlocklyCanvasMoveToBlock } from "./canvas_move_to";
import { addBlocklyCanvasFillBlock } from "./canvas_fill";
import { addBlocklyCanvasBeginPathBlock } from "./canvas_begin_path";
import { addBlocklyCanvasDrawRectBlock } from "./canvas_draw_rect";
import { addBlocklyCanvasDrawEllipseBlock } from "./canvas_draw_ellipse";
import { addBlocklyCanvasSizeTupleBlock } from "./canvas_size_tuple";
import { addBlocklyCanvasFillStyleBlock } from "./canvas_fill_style";
import { addBlocklyCanvasStrokeStyleBlock } from "./canvas_stroke_style";
import { addBlocklyCanvasGradientStyleBlock } from "./canvas_gradient_style";
import { addBlocklyCanvasAngleBlock } from "./canvas_angle";

type BlockDefiner = () => CanvasBlockDefinition;

const definers: BlockDefiner[] = [
  addBlocklyCanvasCoordinateTupleBlock,
  addBlocklyCanvasSizeTupleBlock,
  addBlocklyCanvasAngleBlock,
  addBlocklyCanvasGradientStyleBlock,
  addBlocklyCanvasBeginPathBlock,
  addBlocklyCanvasFillStyleBlock,
  addBlocklyCanvasStrokeStyleBlock,
  addBlocklyCanvasLineToBlock,
  addBlocklyCanvasMoveToBlock,
  addBlocklyCanvasDrawRectBlock,
  addBlocklyCanvasDrawEllipseBlock,
  addBlocklyCanvasStrokeBlock,
  addBlocklyCanvasFillBlock,
];

export function appendCanvasFunctionsAndReturnIds(): string[] {
  const computedDefinitions = definers.map((d) => d());

  Blockly.common.defineBlocksWithJsonArray(
    computedDefinitions.map((d) => d.definition)
  );

  return computedDefinitions.map((d) => d.id);
}
