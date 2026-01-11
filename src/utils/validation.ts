type ValidatePositiveIntegerParams = {
  value: number;
  functionName: string;
  minValue?: number;
};

/**
 * Validates that a value is a valid positive integer within a specified range
 * @param params - Validation parameters
 * @param params.value - The value to validate
 * @param params.functionName - Name of the calling function (used in error messages)
 * @param params.minValue - Minimum allowed value (default: 1)
 * @throws {TypeError} If value is not a valid number or not an integer
 * @throws {RangeError} If value is Infinity or below minValue
 * @example
 * validatePositiveInteger({
 *   value: 5,
 *   functionName: 'myFunc()'
 * }); // passes
 *
 * validatePositiveInteger({
 *   value: 0,
 *   functionName: 'myFunc()',
 *   minValue: 1
 * }); // throws RangeError
 *
 * validatePositiveInteger({
 *   value: 3.14,
 *   functionName: 'myFunc()'
 * }); // throws TypeError
 */
// With optional params, I like to use a single object parameter for clarity
export function validatePositiveInteger({
  value,
  functionName,
  minValue = 1,
}: ValidatePositiveIntegerParams): void {
  // Type validation
  if (typeof value !== "number" || isNaN(value)) {
    throw new TypeError(`${functionName} requires a valid number`);
  }

  // Infinity check
  if (!isFinite(value)) {
    throw new RangeError(`${functionName} does not accept Infinity`);
  }

  // Integer check
  if (!Number.isInteger(value)) {
    throw new TypeError(
      `${functionName} requires an integer, received ${value}`
    );
  }

  // Range check
  if (value < minValue) {
    throw new RangeError(
      `${functionName} requires an integer >= ${minValue}, received ${value}`
    );
  }
}
