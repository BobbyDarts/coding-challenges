import { sqrt } from "./solution";

describe("Problem 1821: Square Root", () => {
  test("should return exact square roots", () => {
    expect(sqrt(9)).toBeCloseTo(Math.sqrt(9), 5);
    expect(sqrt(4)).toBeCloseTo(Math.sqrt(4), 5);
    expect(sqrt(16)).toBeCloseTo(Math.sqrt(16), 5);
    expect(sqrt(25)).toBeCloseTo(Math.sqrt(25), 5);
  });

  test("should handle non-perfect squares", () => {
    expect(sqrt(2)).toBeCloseTo(Math.sqrt(2), 5);
    expect(sqrt(3)).toBeCloseTo(Math.sqrt(3), 5);
    expect(sqrt(10)).toBeCloseTo(Math.sqrt(10), 5);
    expect(sqrt(7)).toBeCloseTo(Math.sqrt(7), 5);
  });

  test("should handle edge cases", () => {
    expect(sqrt(0)).toBe(0);
    expect(sqrt(1)).toBe(1);
  });

  test("should handle decimals", () => {
    expect(sqrt(0.25)).toBeCloseTo(Math.sqrt(0.25), 5);
    expect(sqrt(2.25)).toBeCloseTo(Math.sqrt(2.25), 5);
    expect(sqrt(0.01)).toBeCloseTo(Math.sqrt(0.01), 5);
  });

  test("should handle large numbers", () => {
    expect(sqrt(100)).toBeCloseTo(Math.sqrt(100), 5);
    expect(sqrt(1000)).toBeCloseTo(Math.sqrt(1000), 5);
    expect(sqrt(10000)).toBeCloseTo(Math.sqrt(10000), 5);
  });

  test("should throw error for negative numbers", () => {
    expect(() => sqrt(-1)).toThrow();
    expect(() => sqrt(-9)).toThrow();
  });
});
