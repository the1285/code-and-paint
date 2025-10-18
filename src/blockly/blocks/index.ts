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
import { addBlocklyCanvasColorRgbBlock } from "./canvas_color_rgb";
import { addBlocklyCanvasColorHslBlock } from "./canvas_color_hsl";
import { addBlocklyCanvasStrokeSettingsBlock } from "./canvas_stroke_settings";
import { addBlocklyCanvasTranslateBlock } from "./canvas_translate";
import { addBlocklyCanvasFontBlock } from "./canvas_font";
import { addBlocklyCanvasDrawTextBlock } from "./canvas_draw_text";

type BlockDefiner = () => CanvasBlockDefinition;

const definers: BlockDefiner[] = [
  addBlocklyCanvasCoordinateTupleBlock,
  addBlocklyCanvasSizeTupleBlock,
  addBlocklyCanvasAngleBlock,
  addBlocklyCanvasColorRgbBlock,
  addBlocklyCanvasColorHslBlock,
  addBlocklyCanvasGradientStyleBlock,
  addBlocklyCanvasFillStyleBlock,
  addBlocklyCanvasStrokeStyleBlock,
  addBlocklyCanvasStrokeSettingsBlock,
  addBlocklyCanvasFontBlock,
  addBlocklyCanvasDrawTextBlock,
  addBlocklyCanvasTranslateBlock,
  addBlocklyCanvasBeginPathBlock,
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
