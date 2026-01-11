import type { Range } from "./types";
import { validatePositiveInteger } from "./validation";

/**
 * Generates the nth even Fibonacci number using direct recurrence
 * Formula: EF(n) = 4*EF(n-1) + EF(n-2)
 * Sequence: 0, 2, 8, 34, 144, 610, ...
 * @param n - The position in the even Fibonacci sequence (0-indexed)
 * @returns The nth even Fibonacci number
 * @throws {TypeError} If n is not a valid integer
 * @throws {RangeError} If n is negative
 * @example
 * evenFibonacci(0) // 0
 * evenFibonacci(1) // 2
 * evenFibonacci(3) // 34
 */
export function evenFibonacci(n: number): number {
  validatePositiveInteger({
    value: n,
    functionName: "evenFibonacci()",
    minValue: 0,
  });

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 2;

  // Iterative calculation using the formula: EF(n) = 4*EF(n-1) + EF(n-2)
  let prev2 = 0; // EF(0)
  let prev1 = 2; // EF(1)

  for (let i = 2; i <= n; i++) {
    const current = 4 * prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

/**
 * Generates the nth Fibonacci number
 * Formula: F(n) = F(n-1) + F(n-2)
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 * @param n - The position in the Fibonacci sequence (0-indexed)
 * @returns The nth Fibonacci number
 * @throws {TypeError} If n is not a valid integer
 * @throws {RangeError} If n is negative
 * @example
 * fibonacci(0)  // 0
 * fibonacci(1)  // 1
 * fibonacci(5)  // 5
 * fibonacci(10) // 55
 */
export function fibonacci(n: number): number {
  validatePositiveInteger({
    value: n,
    functionName: "fibonacci()",
    minValue: 0,
  });

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Iterative calculation
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

/**
 * Calculates the sum of all numbers in an array
 * @param numbers - Array of numbers to sum
 * @returns Sum of all numbers (returns 0 for empty array)
 * @throws {TypeError} If input is not an array or contains non-numbers
 * @example
 * arraySum([1, 2, 3, 4, 5]) // 15
 * arraySum([]) // 0
 * arraySum([-1, 1, 2]) // 2
 */
export const arraySum = (numbers: number[]): number => {
  // Validate input is an array (inline for now)
  if (!Array.isArray(numbers)) {
    throw new TypeError("arraySum() requires an array");
  }

  // Validate all elements are numbers
  const invalidIndex = numbers.findIndex(
    (n) => typeof n !== "number" || isNaN(n) || !isFinite(n)
  );

  if (invalidIndex !== -1) {
    throw new TypeError(
      `arraySum() requires all elements to be valid numbers, ` +
        `found ${typeof numbers[invalidIndex]} at index ${invalidIndex}`
    );
  }

  return numbers.reduce((total, nbr) => total + nbr, 0);
};

/**
 * Generates an array of numbers in a range (exclusive of stop, like Python's range)
 * @param options - Range configuration
 * @param options.start - Starting value (default: 0)
 * @param options.stop - Ending value (exclusive)
 * @param options.step - Step size (default: 1)
 * @returns Array of numbers in the specified range
 * @throws {TypeError} If stop, start, or step are not valid numbers
 * @throws {RangeError} If step is zero
 * @example
 * range({ stop: 5 })                  // [0, 1, 2, 3, 4]
 * range({ start: 2, stop: 8 })        // [2, 3, 4, 5, 6, 7]
 * range({ start: 0, stop: 10, step: 2 }) // [0, 2, 4, 6, 8]
 * range({ start: 5, stop: 0, step: -1 }) // [5, 4, 3, 2, 1]
 */
export const range = ({ start = 0, stop, step = 1 }: Range): number[] => {
  // Validate stop (required parameter)
  if (typeof stop !== "number" || isNaN(stop) || !isFinite(stop)) {
    throw new TypeError("range() requires a valid number for stop");
  }

  // Validate start
  if (typeof start !== "number" || isNaN(start) || !isFinite(start)) {
    throw new TypeError("range() requires a valid number for start");
  }

  // Validate step
  if (typeof step !== "number" || isNaN(step) || !isFinite(step)) {
    throw new TypeError("range() requires a valid number for step");
  }

  // Step cannot be zero
  if (step === 0) {
    throw new RangeError("range() step cannot be zero");
  }

  // Build range iteratively
  const result: number[] = [];

  if (step > 0) {
    // Positive step: start < stop
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else {
    // Negative step: start > stop
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
};

/**
 * Finds all factors of a positive integer
 * A factor is a number that divides evenly into the given number
 * @param n - The number to find factors of (must be a positive integer)
 * @returns Sorted array of all factors in ascending order
 * @throws {TypeError} If n is not a valid integer
 * @throws {RangeError} If n is not positive
 * @example
 * factors(1)   // [1]
 * factors(12)  // [1, 2, 3, 4, 6, 12]
 * factors(16)  // [1, 2, 4, 8, 16]
 * factors(100) // [1, 2, 4, 5, 10, 20, 25, 50, 100]
 */
export const factors = (n: number): number[] => {
  validatePositiveInteger({ value: n, functionName: "factors()", minValue: 1 });

  // Special case for 1
  if (n === 1) return [1];

  // Calculate factors
  const lRange = range({ start: 1, stop: Math.floor(Math.sqrt(n)) + 1 });
  return Array.from(
    new Set(lRange.filter((i) => n % i === 0).flatMap((i) => [i, n / i]))
  ).sort((a, b) => a - b);
};

/**
 * Finds all unique prime factors of a positive integer >= 2
 * A prime factor is a prime number that divides evenly into the given number
 * Uses trial division with optimization: checks 2 separately, then odd numbers only
 * @param n - The number to find prime factors of (must be >= 2)
 * @returns Sorted array of unique prime factors in ascending order
 * @throws {TypeError} If n is not a valid integer
 * @throws {RangeError} If n is less than 2
 * @example
 * primeFactors(2)   // [2]
 * primeFactors(12)  // [2, 3]
 * primeFactors(60)  // [2, 3, 5]
 * primeFactors(100) // [2, 5]
 */
export const primeFactors = (n: number): number[] => {
  validatePositiveInteger({
    value: n,
    functionName: "primeFactors()",
    minValue: 2,
  });

  const result: number[] = [];
  let divisor = 2;
  let remaining = n;

  // Optimization: handle 2 separately
  while (remaining % 2 === 0) {
    result.push(2);
    remaining /= 2;
  }

  // Only check odd divisors from 3 onward
  divisor = 3;
  while (remaining > 1) {
    if (remaining % divisor === 0) {
      result.push(divisor);
      remaining /= divisor;
    } else {
      divisor += 2; // Skip even numbers
    }

    // Optimization: stop at sqrt(remaining)
    if (divisor * divisor > remaining && remaining > 1) {
      result.push(remaining);
      break;
    }
  }

  return Array.from(new Set(result)).sort((a, b) => a - b);
};
