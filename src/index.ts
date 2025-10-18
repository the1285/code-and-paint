import * as Blockly from "blockly";
import * as fa from "blockly/msg/fa";
import { javascriptGenerator } from "blockly/javascript";
import { save, load } from "./blockly/serialization";
import { generateBlocklyToolbox } from "./blockly/toolbox";
import "./style/index.css";
import { CanvasBridge } from "./canvas/handler";
import { appendCanvasFunctionsAndReturnIds } from "./blockly/blocks";
import "./blockly/generator_overrides";

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

  grid: { spacing: 40, length: 3, colour: "#ccc", snap: true },
  renderer: "zelos",
  move: { scrollbars: true, wheel: false, drag: true },
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
  // Wrap in an IIFE so each execution gets a fresh scope for generated vars.
  const wrappedCode = `(function() {
    CanvasBridge.setupForRedraw();
    ${code}
  })();`;
  try {
    eval(wrappedCode);
  } catch {
    console.error("Failed to run", code);
  }
};

// ─── Events ────────────────────────────────────────────────────────────── ✦ ─

if (workspace) {
  workspace.getTheme().setFontStyle({
    family: "VazirMatn",
    size: 12,
    weight: "400",
  });
  workspace.setTheme(workspace.getTheme());

  try {
    load(workspace);
  } catch {
    console.error("Failed to load the previous state");
  }

  // Run  once  after  load  so  initial  state
  // renders    even    if    listeners    skip
  // loading events.
  runCode();

  workspace.addChangeListener((e: Blockly.Events.Abstract) => {
    if (e.isUiEvent) {
      return;
    }

    save(workspace);

    if (e.type === Blockly.Events.FINISHED_LOADING || workspace.isDragging()) {
      return;
    }

    runCode();
  });
}
