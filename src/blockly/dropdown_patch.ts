import * as Blockly from "blockly";

type MenuOption = [unknown, string] | typeof Blockly.FieldDropdown.SEPARATOR;

function isImageDescriptor(value: unknown): value is {
  src: string;
  alt?: string;
  width: number;
  height: number;
} {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.src === "string" &&
    (typeof candidate.alt === "string" || candidate.alt === undefined) &&
    typeof candidate.width === "number" &&
    typeof candidate.height === "number"
  );
}

const originalValidate =
  Blockly.FieldDropdown.prototype.validateOptions.bind(
    Blockly.FieldDropdown.prototype
  );

Blockly.FieldDropdown.prototype.validateOptions = function (
  options: MenuOption[]
) {
  if (!Array.isArray(options)) {
    throw TypeError("FieldDropdown options must be an array.");
  }
  if (!options.length) {
    throw TypeError("FieldDropdown options must not be an empty array.");
  }

  let invalid = false;

  for (let index = 0; index < options.length; index++) {
    const option = options[index];

    if (option === Blockly.FieldDropdown.SEPARATOR) {
      continue;
    }

    if (!Array.isArray(option)) {
      invalid = true;
      console.error(
        `Invalid option[${index}]: Each FieldDropdown option must be an array or the string literal 'separator'. Found: ${option}`
      );
      continue;
    }

    const [label, value] = option;

    if (typeof value !== "string") {
      invalid = true;
      console.error(
        `Invalid option[${index}]: Each FieldDropdown option id must be a string.\n          Found ${value} in: ${option}`
      );
      continue;
    }

    const labelIsString = typeof label === "string";
    const labelIsImage = isImageDescriptor(label);
    const labelIsHtmlElement =
      !!label &&
      typeof label === "object" &&
      ("tagName" in (label as Record<string, unknown>) ||
        (typeof HTMLElement !== "undefined" &&
          label instanceof HTMLElement));

    if (!label || !(labelIsString || labelIsImage || labelIsHtmlElement)) {
      invalid = true;
      console.error(
        `Invalid option[${index}]: Each FieldDropdown option must have a string\n          label, image description, or HTML element. Found ${label} in: ${option}`
      );
    }
  }

  if (invalid) {
    throw TypeError("Found invalid FieldDropdown options.");
  }

  try {
    originalValidate(options as MenuOption[]);
  } catch (error) {
    // Fall back to the relaxed validation above when the base implementation
    // still rejects HTML content (older Blockly versions).
    if (!(error instanceof TypeError)) {
      throw error;
    }
  }
};
