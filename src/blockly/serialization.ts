/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";
import { DEMO_WORKSPACE } from "./demo";

const storageKey = "org.1285.canvas-playground.workspace";

/**
 * Saves the state of the workspace to browser's local storage.
 * @param workspace Blockly workspace to save.
 */
export const save = function (workspace: Blockly.Workspace) {
  const data = Blockly.serialization.workspaces.save(workspace);
  window.localStorage?.setItem(storageKey, JSON.stringify(data));
};

/**
 * Loads saved state from local storage into the given workspace.
 * @param workspace Blockly workspace to load into.
 */
export const load = function (workspace: Blockly.Workspace) {
  const data = window.localStorage?.getItem(storageKey);
  let loaded;
  if (!data) {
    loaded = DEMO_WORKSPACE;
  } else {
    loaded = JSON.parse(data);
  }

  // Don't emit events during loading.
  Blockly.Events.disable();
  Blockly.serialization.workspaces.load(loaded, workspace, undefined);
  Blockly.Events.enable();
};
