/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly";
import * as fa from "blockly/msg/fa";
import { blocks } from "./blockly/blocks/text";
import { forBlock } from "./blockly/generators/javascript";
import { javascriptGenerator } from "blockly/javascript";
import { save, load } from "./blockly/serialization";
import { generateBlocklyToolbox } from "./blockly/toolbox";
import "./style/index.css";
import { appendCanvasFunctionsAndReturnIds } from "./blockly/blocks";

// ─── Set Farsi ─────────────────────────────────────────────────────────── ✦ ─

Blockly.setLocale(fa);

// ─── Register Main Blocks ──────────────────────────────────────────────── ✦ ─

Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

// ─── Generate Custom Blocks ────────────────────────────────────────────── ✦ ─

const canvasToolbarIds = appendCanvasFunctionsAndReturnIds(javascriptGenerator);

// ─── Toolbox ───────────────────────────────────────────────────────────── ✦ ─

const toolbox = generateBlocklyToolbox(canvasToolbarIds);

// ─── Dom Elements ──────────────────────────────────────────────────────── ✦ ─

// Set up UI elements and inject Blockly
const blocklyDiv = document.getElementById("blockly-div");
const outputCanvas = document.getElementById("output-canvas");

if (!blocklyDiv) {
  throw new Error(`div with id 'blocklyDiv' not found`);
}
const workspaceSvg = Blockly.inject(blocklyDiv, {
  toolbox,
  rtl: true,
  toolboxPosition: "start", // in RTL, "start" = right side (use "end" for left)
  renderer: "zelos", // good Arabic-script metrics; "thrasos" also fine
  move: { scrollbars: true, wheel: true, drag: true },
});

// This  function  resets the code and output
// divs, shows the generated  code  from  the
// workspace,  and  evaluates  the code. In a
// real application, you  probably  shouldn't
// use `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(
    workspaceSvg as Blockly.Workspace
  );

  eval(code);
};

if (workspaceSvg) {
  // Load the initial state from storage and run the code.
  load(workspaceSvg);
  runCode();

  // Every  time  the  workspace changes state,
  // save the changes to storage.
  workspaceSvg.addChangeListener((e: Blockly.Events.Abstract) => {
    // UI events are things like scrolling, zooming, etc.
    // No need to save after one of these.
    if (e.isUiEvent) return;
    save(workspaceSvg);
  });

  // Whenever  workspace  changes meaningfully,
  // run the code again.
  workspaceSvg.addChangeListener((e: Blockly.Events.Abstract) => {
    // Don't  run  the  code  when  the workspace
    // finishes loading; we're already running it
    // once  when  the  application starts. Don't
    // run the code during drags; we  might  have
    // invalid state.
    if (
      e.isUiEvent ||
      e.type == Blockly.Events.FINISHED_LOADING ||
      workspaceSvg.isDragging()
    ) {
      return;
    }
    runCode();
  });
}
