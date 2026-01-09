import { arraySum, evenFibonacci, fibonacci, range } from ".";

describe("Even Fibonacci using Direct Recurrence", () => {
  test("should return the nth even fibonacci number", () => {
    // EF(0) = 0
    // EF(1) = 2
    // EF(2) = 4*2 + 0 = 8
    // EF(3) = 4*8 + 2 = 34
    // EF(4) = 4*34 + 8 = 144
    // EF(5) = 4*144 + 34 = 610

    expect(evenFibonacci(0)).toBe(0);
    expect(evenFibonacci(1)).toBe(2);
    expect(evenFibonacci(2)).toBe(8);
    expect(evenFibonacci(3)).toBe(34);
    expect(evenFibonacci(4)).toBe(144);
    expect(evenFibonacci(5)).toBe(610);
    expect(evenFibonacci(6)).toBe(2584);
  });

  test("should use formula EF(n) = 4*EF(n-1) + EF(n-2)", () => {
    // Verify formula manually
    expect(evenFibonacci(2)).toBe(4 * evenFibonacci(1) + evenFibonacci(0));
    expect(evenFibonacci(3)).toBe(4 * evenFibonacci(2) + evenFibonacci(1));
    expect(evenFibonacci(4)).toBe(4 * evenFibonacci(3) + evenFibonacci(2));
  });

  test("should handle base cases", () => {
    expect(evenFibonacci(0)).toBe(0);
    expect(evenFibonacci(1)).toBe(2);
  });

  test("should calculate larger even fibonacci numbers", () => {
    expect(evenFibonacci(10)).toBe(832040);
    expect(evenFibonacci(12)).toBe(14930352);
  });

  test("should be consistent with regular fibonacci sequence", () => {
    // In regular Fibonacci: 1,1,2,3,5,8,13,21,34,55,89,144...
    // Even values at positions: 3,6,9,12,15...
    // Regular fib(3)=2, fib(6)=8, fib(9)=34, fib(12)=144

    expect(evenFibonacci(1)).toBe(2); // Same as fib(3)
    expect(evenFibonacci(2)).toBe(8); // Same as fib(6)
    expect(evenFibonacci(3)).toBe(34); // Same as fib(9)
    expect(evenFibonacci(4)).toBe(144); // Same as fib(12)
  });
});

describe("Fibonacci", () => {
  test("should return correct fibonacci numbers", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(9)).toBe(34);
    expect(fibonacci(10)).toBe(55);
  });

  test("should handle base cases", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  test("should handle negative numbers", () => {
    expect(fibonacci(-1)).toBe(0);
    expect(fibonacci(-5)).toBe(0);
    expect(fibonacci(-100)).toBe(0);
  });

  test("should calculate larger fibonacci numbers", () => {
    expect(fibonacci(12)).toBe(144);
    expect(fibonacci(15)).toBe(610);
    expect(fibonacci(20)).toBe(6765);
  });

  test("should follow fibonacci sequence pattern", () => {
    // F(n) = F(n-1) + F(n-2)
    for (let n = 2; n <= 10; n++) {
      expect(fibonacci(n)).toBe(fibonacci(n - 1) + fibonacci(n - 2));
    }
  });

  test("should return correct sequence", () => {
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    const actual = Array.from({ length: 11 }, (_, i) => fibonacci(i));
    expect(actual).toEqual(expected);
  });

  test("should handle fibonacci(2) edge case", () => {
    // F(2) = F(1) + F(0) = 1 + 0 = 1
    expect(fibonacci(2)).toBe(1);
  });
});

describe("Array Sum", () => {
  test("should sum array of positive numbers", () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
    expect(arraySum([10, 20, 30])).toBe(60);
    expect(arraySum([100])).toBe(100);
  });

  test("should sum array of negative numbers", () => {
    expect(arraySum([-1, -2, -3])).toBe(-6);
    expect(arraySum([-10, -20, -30])).toBe(-60);
  });

  test("should sum array of mixed positive and negative numbers", () => {
    expect(arraySum([1, -1, 2, -2])).toBe(0);
    expect(arraySum([10, -5, 3, -2])).toBe(6);
    expect(arraySum([-100, 50, 30, 20])).toBe(0);
  });

  test("should handle array with zeros", () => {
    expect(arraySum([0, 0, 0])).toBe(0);
    expect(arraySum([1, 0, 2, 0, 3])).toBe(6);
  });

  test("should return 0 for empty array", () => {
    expect(arraySum([])).toBe(0);
  });

  test("should handle single element array", () => {
    expect(arraySum([42])).toBe(42);
    expect(arraySum([-5])).toBe(-5);
    expect(arraySum([0])).toBe(0);
  });

  test("should handle large numbers", () => {
    expect(arraySum([1000000, 2000000, 3000000])).toBe(6000000);
    expect(arraySum([999999999, 1])).toBe(1000000000);
  });

  test("should handle decimal numbers", () => {
    expect(arraySum([1.5, 2.5, 3.0])).toBe(7.0);
    expect(arraySum([0.1, 0.2, 0.3])).toBeCloseTo(0.6, 5);
  });

  test("should handle large arrays", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(arraySum(largeArray)).toBe(500500); // Sum of 1 to 1000
  });

  test("should handle array with duplicates", () => {
    expect(arraySum([5, 5, 5, 5])).toBe(20);
    expect(arraySum([1, 1, 1, 1, 1])).toBe(5);
  });
});

describe("Range", () => {
  test("should generate range with start, stop, and step", () => {
    expect(range({ start: 0, stop: 10, step: 2 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(range({ start: 1, stop: 5, step: 1 })).toEqual([1, 2, 3, 4, 5]);
    expect(range({ start: 5, stop: 15, step: 3 })).toEqual([5, 8, 11, 14]);
  });

  test("should use default start of 0", () => {
    expect(range({ stop: 5 })).toEqual([0, 1, 2, 3, 4, 5]);
    expect(range({ stop: 3 })).toEqual([0, 1, 2, 3]);
  });

  test("should use default step of 1", () => {
    expect(range({ start: 0, stop: 5 })).toEqual([0, 1, 2, 3, 4, 5]);
    expect(range({ start: 2, stop: 7 })).toEqual([2, 3, 4, 5, 6, 7]);
  });

  test("should use both defaults (start=0, step=1)", () => {
    expect(range({ stop: 4 })).toEqual([0, 1, 2, 3, 4]);
    expect(range({ stop: 0 })).toEqual([0]);
  });

  test("should handle single element range", () => {
    expect(range({ start: 5, stop: 5 })).toEqual([5]);
    expect(range({ start: 0, stop: 0 })).toEqual([0]);
  });

  test("should handle negative numbers", () => {
    expect(range({ start: -5, stop: 0 })).toEqual([-5, -4, -3, -2, -1, 0]);
    expect(range({ start: -10, stop: -5, step: 2 })).toEqual([-10, -8, -6]);
  });

  test("should handle negative to positive range", () => {
    expect(range({ start: -3, stop: 3 })).toEqual([-3, -2, -1, 0, 1, 2, 3]);
    expect(range({ start: -2, stop: 2, step: 2 })).toEqual([-2, 0, 2]);
  });

  test("should handle decimal steps", () => {
    expect(range({ start: 0, stop: 2, step: 0.5 })).toEqual([
      0, 0.5, 1, 1.5, 2,
    ]);
    expect(range({ start: 1, stop: 3, step: 0.25 })).toEqual([
      1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3,
    ]);
  });

  test("should handle larger steps", () => {
    expect(range({ start: 0, stop: 20, step: 5 })).toEqual([0, 5, 10, 15, 20]);
    expect(range({ start: 10, stop: 100, step: 10 })).toEqual([
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    ]);
  });

  test("should handle step that does not evenly divide range", () => {
    // When (stop - start) is not evenly divisible by step
    expect(range({ start: 0, stop: 10, step: 3 })).toEqual([0, 3, 6, 9]);
    expect(range({ start: 1, stop: 10, step: 4 })).toEqual([1, 5, 9]);
  });

  test("should create empty or single element for edge cases", () => {
    expect(range({ start: 10, stop: 5 })).toEqual([]); // start > stop with positive step
    expect(range({ start: 0, stop: 0, step: 5 })).toEqual([0]);
  });

  test("should mimic Python range behavior", () => {
    // Python: range(5) -> [0, 1, 2, 3, 4]
    // Our range needs stop=4 to get same result since we're inclusive
    expect(range({ stop: 4 })).toEqual([0, 1, 2, 3, 4]);

    // Python: range(2, 8) -> [2, 3, 4, 5, 6, 7]
    // Our range is inclusive, so stop=7 gives same result
    expect(range({ start: 2, stop: 7 })).toEqual([2, 3, 4, 5, 6, 7]);
  });
});
