import type { Block } from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const defaultMathChange = javascriptGenerator.forBlock["math_change"];

function deltaUsesVariable(block: Block | null, variableId: string): boolean {
  if (!block) return false;

  if (block.type === "variables_get" && block.getFieldValue("VAR") === variableId) {
    return true;
  }

  return block.inputList.some((input) => {
    const child = input.connection && input.connection.targetBlock();
    return deltaUsesVariable(child, variableId);
  });
}

javascriptGenerator.forBlock["math_change"] = function (block, generator) {
  const deltaBlock = block.getInputTargetBlock("DELTA");
  const variableId = block.getFieldValue("VAR");

  if (deltaBlock && variableId && deltaUsesVariable(deltaBlock, variableId)) {
    const variableName = generator.getVariableName(variableId);
    const deltaCode =
      generator.valueToCode(block, "DELTA", Order.ASSIGNMENT) || "0";
    return `${variableName} = ${deltaCode};\n`;
  }

  if (defaultMathChange) {
    return defaultMathChange.call(block, block, generator);
  }

  // Fallback to default behaviour if the original generator is unavailable.
  if (!variableId) {
    return "";
  }

  const variableName = generator.getVariableName(variableId);
  const deltaCode =
    generator.valueToCode(block, "DELTA", Order.ASSIGNMENT) || "0";
  return `${variableName} = (typeof ${variableName} === 'number' ? ${variableName} : 0) + ${deltaCode};\n`;
};
