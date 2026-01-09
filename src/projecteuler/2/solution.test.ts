import { evenFibonacciSum } from "./solution";

describe("Problem 2: Even Fibonacci Numbers", () => {
  // Table of [limit, expectedSum]
  const cases: [number, number][] = [
    [0, 0],
    [1, 0],
    [3, 2], // even Fibonacci numbers below 3: [2]
    [10, 10], // [2, 8]
    [100, 44], // [2, 8, 34]
    [4000000, 4613732], // Project Euler #2
  ];

  test.each(cases)(
    "returns correct sum of even Fibonacci numbers below %i",
    (limit, expected) => {
      expect(evenFibonacciSum(limit)).toBe(expected);
    }
  );
});
