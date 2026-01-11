import { nthFibonacci } from "./solution";

describe("Problem 145: Nth Fibonacci", () => {
  test("should return correct fibonacci numbers", () => {
    expect(nthFibonacci(0)).toBe(0);
    expect(nthFibonacci(1)).toBe(1);
    expect(nthFibonacci(2)).toBe(1);
    expect(nthFibonacci(3)).toBe(2);
    expect(nthFibonacci(4)).toBe(3);
    expect(nthFibonacci(5)).toBe(5);
    expect(nthFibonacci(6)).toBe(8);
    expect(nthFibonacci(7)).toBe(13);
    expect(nthFibonacci(8)).toBe(21);
    expect(nthFibonacci(9)).toBe(34);
    expect(nthFibonacci(10)).toBe(55);
  });

  test("should handle larger fibonacci numbers", () => {
    expect(nthFibonacci(20)).toBe(6765);
    expect(nthFibonacci(30)).toBe(832040);
    expect(nthFibonacci(35)).toBe(9227465);
  });

  test("should handle edge cases", () => {
    expect(nthFibonacci(0)).toBe(0);
    expect(nthFibonacci(1)).toBe(1);
  });

  test("should handle very large fibonacci numbers", () => {
    expect(nthFibonacci(40)).toBe(102334155);
    expect(nthFibonacci(50)).toBe(12586269025);
  });

  test("should maintain accuracy for sequential calls", () => {
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

    for (let i = 0; i < sequence.length; i++) {
      expect(nthFibonacci(i)).toBe(sequence[i]);
    }
  });

  test("should follow fibonacci sequence pattern", () => {
    // F(n) = F(n-1) + F(n-2)
    for (let n = 2; n <= 10; n++) {
      expect(nthFibonacci(n)).toBe(nthFibonacci(n - 1) + nthFibonacci(n - 2));
    }
  });
});

describe("Problem 145: Nth Fibonacci - Validation", () => {
  test("should throw TypeError for non-numbers", () => {
    expect(() => nthFibonacci("12" as any)).toThrow(TypeError);
    expect(() => nthFibonacci(NaN)).toThrow(TypeError);
  });

  test("should throw RangeError for Infinity", () => {
    expect(() => nthFibonacci(Infinity)).toThrow(RangeError);
    expect(() => nthFibonacci(-Infinity)).toThrow(RangeError);
  });

  test("should throw TypeError for non-integers", () => {
    expect(() => nthFibonacci(12.5)).toThrow(TypeError);
    expect(() => nthFibonacci(3.14)).toThrow(TypeError);
  });

  test("should throw RangeError for negative numbers", () => {
    expect(() => nthFibonacci(-1)).toThrow(RangeError);
    expect(() => nthFibonacci(-5)).toThrow(RangeError);
  });
});
