import * as Blockly from "blockly";
import * as fa from "blockly/msg/fa";
import { javascriptGenerator } from "blockly/javascript";
import { save, load } from "./blockly/serialization";
import { generateBlocklyToolbox } from "./blockly/toolbox";
import "./style/index.css";
import { appendCanvasFunctionsAndReturnIds } from "./blockly/blocks";
import { CanvasBridge } from "./canvas/handler";

// ─── Creating The Canvas Bridge ────────────────────────────────────────── ✦ ─

CanvasBridge.initializeCanvasParameters();

// ─── Set Farsi ─────────────────────────────────────────────────────────── ✦ ─

Blockly.setLocale(fa);

// ─── Generate Custom Blocks ────────────────────────────────────────────── ✦ ─

const canvasToolbarIds = appendCanvasFunctionsAndReturnIds();

// ─── Toolbox ───────────────────────────────────────────────────────────── ✦ ─

const toolbox = generateBlocklyToolbox(canvasToolbarIds);

// ─── Setup Blockly Div ─────────────────────────────────────────────────── ✦ ─

const blocklyDiv = document.getElementById("blockly-div");

if (!blocklyDiv) {
  throw new Error(`div with id 'blocklyDiv' not found`);
}

// ─── Setup Workspace ───────────────────────────────────────────────────── ✦ ─

const workspace = Blockly.inject(blocklyDiv, {
  toolbox,
  rtl: true,
  toolboxPosition: "start",
  renderer: "zelos",
  move: { scrollbars: true, wheel: true, drag: true },
});

// ─── Run Code ──────────────────────────────────────────────────────────── ✦ ─

// This  function  resets the code and output
// divs, shows the generated  code  from  the
// workspace,  and  evaluates  the code. In a
// real application, you  probably  shouldn't
// use `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(
    workspace as Blockly.Workspace
  );
  try {
    eval(code);
  } catch {
    console.error(
      "Failed to run",
      javascriptGenerator.workspaceToCode(workspace as Blockly.Workspace)
    );
  }
};

// ─── Events ────────────────────────────────────────────────────────────── ✦ ─

if (workspace) {
  try {
    load(workspace);
  } catch {
    console.error("Failed to load the previous state");
  }

  // Every  time  the  workspace changes state,
  // save the changes to storage.
  workspace.addChangeListener((e: Blockly.Events.Abstract) => {
    // UI  events are things like scrolling, zoo-
    // ming, etc.  No  need  to  save  after  one
    // of these.
    if (e.isUiEvent) return;
    runCode();
    save(workspace);
  });

  // Whenever  workspace  changes meaningfully,
  // run the code again.
  workspace.addChangeListener((e: Blockly.Events.Abstract) => {
    // Don't  run  the  code  when  the workspace
    // finishes loading; we're already running it
    // once  when  the  application starts. Don't
    // run the code during drags; we  might  have
    // invalid state.
    if (
      e.isUiEvent ||
      e.type == Blockly.Events.FINISHED_LOADING ||
      workspace.isDragging()
    ) {
      return;
    }

    runCode();
  });
}
