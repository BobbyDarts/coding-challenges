import {
  arraySum,
  evenFibonacci,
  factors,
  fibonacci,
  primeFactors,
  range,
} from ".";

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

describe("Even Fibonacci - Validation", () => {
  test("should throw TypeError for non-numbers", () => {
    expect(() => evenFibonacci("12" as any)).toThrow(TypeError);
    expect(() => evenFibonacci(NaN)).toThrow(TypeError);
  });

  test("should throw RangeError for Infinity", () => {
    expect(() => evenFibonacci(Infinity)).toThrow(RangeError);
    expect(() => evenFibonacci(-Infinity)).toThrow(RangeError);
  });

  test("should throw TypeError for non-integers", () => {
    expect(() => evenFibonacci(12.5)).toThrow(TypeError);
    expect(() => evenFibonacci(3.14)).toThrow(TypeError);
  });

  test("should throw RangeError for negative numbers", () => {
    expect(() => evenFibonacci(-1)).toThrow(RangeError);
    expect(() => evenFibonacci(-5)).toThrow(RangeError);
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

  test("should throw RangeError for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-5)).toThrow(RangeError);
    expect(() => fibonacci(-100)).toThrow(RangeError);
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

describe("Fibonacci - Validation", () => {
  test("should throw TypeError for non-numbers", () => {
    expect(() => fibonacci("12" as any)).toThrow(TypeError);
    expect(() => fibonacci(NaN)).toThrow(TypeError);
  });

  test("should throw RangeError for Infinity", () => {
    expect(() => fibonacci(Infinity)).toThrow(RangeError);
    expect(() => fibonacci(-Infinity)).toThrow(RangeError);
  });

  test("should throw TypeError for non-integers", () => {
    expect(() => fibonacci(12.5)).toThrow(TypeError);
    expect(() => fibonacci(3.14)).toThrow(TypeError);
  });

  test("should throw RangeError for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-5)).toThrow(RangeError);
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

describe("Array Sum - Validation", () => {
  test("should throw TypeError for non-arrays", () => {
    expect(() => arraySum("123" as any)).toThrow(TypeError);
    expect(() => arraySum(123 as any)).toThrow(TypeError);
    expect(() => arraySum(null as any)).toThrow(TypeError);
  });

  test("should throw TypeError for arrays with non-numbers", () => {
    expect(() => arraySum([1, 2, "3" as any])).toThrow(TypeError);
    expect(() => arraySum([1, NaN, 3])).toThrow(TypeError);
    expect(() => arraySum([1, Infinity, 3])).toThrow(TypeError);
  });
});

describe("Range", () => {
  test("should generate range with start, stop, and step", () => {
    expect(range({ start: 0, stop: 11, step: 2 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(range({ start: 1, stop: 6, step: 1 })).toEqual([1, 2, 3, 4, 5]);
    expect(range({ start: 5, stop: 16, step: 3 })).toEqual([5, 8, 11, 14]);
  });

  test("should use default start of 0", () => {
    expect(range({ stop: 5 })).toEqual([0, 1, 2, 3, 4]);
    expect(range({ stop: 3 })).toEqual([0, 1, 2]);
  });

  test("should use default step of 1", () => {
    expect(range({ start: 0, stop: 5 })).toEqual([0, 1, 2, 3, 4]);
    expect(range({ start: 2, stop: 7 })).toEqual([2, 3, 4, 5, 6]);
  });

  test("should use both defaults (start=0, step=1)", () => {
    expect(range({ stop: 4 })).toEqual([0, 1, 2, 3]);
    expect(range({ stop: 0 })).toEqual([]);
  });

  test("should handle single element range", () => {
    expect(range({ start: 5, stop: 6 })).toEqual([5]);
    expect(range({ start: 0, stop: 1 })).toEqual([0]);
  });

  test("should return empty array when start equals stop", () => {
    expect(range({ start: 5, stop: 5 })).toEqual([]);
    expect(range({ start: 0, stop: 0 })).toEqual([]);
  });

  test("should handle negative numbers", () => {
    expect(range({ start: -5, stop: 1 })).toEqual([-5, -4, -3, -2, -1, 0]);
    expect(range({ start: -10, stop: -4, step: 2 })).toEqual([-10, -8, -6]);
  });

  test("should handle negative to positive range", () => {
    expect(range({ start: -3, stop: 4 })).toEqual([-3, -2, -1, 0, 1, 2, 3]);
    expect(range({ start: -2, stop: 3, step: 2 })).toEqual([-2, 0, 2]);
  });

  test("should handle decimal steps", () => {
    expect(range({ start: 0, stop: 2.1, step: 0.5 })).toEqual([
      0, 0.5, 1, 1.5, 2,
    ]);
    expect(range({ start: 1, stop: 3.1, step: 0.25 })).toEqual([
      1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3,
    ]);
  });

  test("should handle larger steps", () => {
    expect(range({ start: 0, stop: 21, step: 5 })).toEqual([0, 5, 10, 15, 20]);
    expect(range({ start: 10, stop: 101, step: 10 })).toEqual([
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    ]);
  });

  test("should handle step that does not evenly divide range", () => {
    expect(range({ start: 0, stop: 11, step: 3 })).toEqual([0, 3, 6, 9]);
    expect(range({ start: 1, stop: 11, step: 4 })).toEqual([1, 5, 9]);
  });

  test("should handle negative steps (counting down)", () => {
    expect(range({ start: 5, stop: 0, step: -1 })).toEqual([5, 4, 3, 2, 1]);
    expect(range({ start: 10, stop: 0, step: -2 })).toEqual([10, 8, 6, 4, 2]);
    expect(range({ start: 0, stop: -5, step: -1 })).toEqual([
      0, -1, -2, -3, -4,
    ]);
  });

  test("should return empty array for invalid direction", () => {
    expect(range({ start: 10, stop: 5 })).toEqual([]); // positive step, start > stop
    expect(range({ start: 0, stop: 5, step: -1 })).toEqual([]); // negative step, start < stop
  });

  test("should match Python range behavior exactly", () => {
    // Python: range(5) -> [0, 1, 2, 3, 4]
    expect(range({ stop: 5 })).toEqual([0, 1, 2, 3, 4]);

    // Python: range(2, 8) -> [2, 3, 4, 5, 6, 7]
    expect(range({ start: 2, stop: 8 })).toEqual([2, 3, 4, 5, 6, 7]);

    // Python: range(0, 10, 2) -> [0, 2, 4, 6, 8]
    expect(range({ start: 0, stop: 10, step: 2 })).toEqual([0, 2, 4, 6, 8]);

    // Python: range(5, 0, -1) -> [5, 4, 3, 2, 1]
    expect(range({ start: 5, stop: 0, step: -1 })).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("Range - Validation", () => {
  test("should throw RangeError for zero step", () => {
    expect(() => range({ stop: 5, step: 0 })).toThrow(RangeError);
    expect(() => range({ stop: 5, step: 0 })).toThrow("step cannot be zero");
  });

  test("should throw TypeError for invalid stop", () => {
    expect(() => range({ stop: NaN })).toThrow(TypeError);
    expect(() => range({ stop: Infinity })).toThrow(TypeError);
    expect(() => range({ stop: -Infinity })).toThrow(TypeError);
  });

  test("should throw TypeError for invalid start", () => {
    expect(() => range({ start: NaN, stop: 5 })).toThrow(TypeError);
    expect(() => range({ start: Infinity, stop: 5 })).toThrow(TypeError);
    expect(() => range({ start: -Infinity, stop: 5 })).toThrow(TypeError);
  });

  test("should throw TypeError for invalid step", () => {
    expect(() => range({ start: 0, stop: 5, step: NaN })).toThrow(TypeError);
    expect(() => range({ start: 0, stop: 5, step: Infinity })).toThrow(
      TypeError
    );
    expect(() => range({ start: 0, stop: 5, step: -Infinity })).toThrow(
      TypeError
    );
  });
});

describe("Factors", () => {
  test("should return all factors of a number", () => {
    expect(factors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    expect(factors(20)).toEqual([1, 2, 4, 5, 10, 20]);
    expect(factors(28)).toEqual([1, 2, 4, 7, 14, 28]);
  });

  test("should handle prime numbers", () => {
    expect(factors(2)).toEqual([1, 2]);
    expect(factors(3)).toEqual([1, 3]);
    expect(factors(7)).toEqual([1, 7]);
    expect(factors(11)).toEqual([1, 11]);
    expect(factors(13)).toEqual([1, 13]);
  });

  test("should handle perfect squares", () => {
    expect(factors(4)).toEqual([1, 2, 4]);
    expect(factors(9)).toEqual([1, 3, 9]);
    expect(factors(16)).toEqual([1, 2, 4, 8, 16]);
    expect(factors(25)).toEqual([1, 5, 25]);
    expect(factors(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
  });

  test("should handle 1", () => {
    expect(factors(1)).toEqual([1]);
  });

  test("should return factors in ascending order", () => {
    const result = factors(100);
    expect(result).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);

    // Verify sorted
    for (let i = 1; i < result.length; i++) {
      expect(result[i]!).toBeGreaterThan(result[i - 1]!);
    }
  });

  test("should handle larger numbers", () => {
    expect(factors(60)).toEqual([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]);
    expect(factors(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
  });

  test("should not have duplicates", () => {
    const result = factors(36);
    const uniqueResult = [...new Set(result)];
    expect(result).toEqual(uniqueResult);
  });

  test("should handle numbers with many factors", () => {
    expect(factors(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
    expect(factors(48)).toEqual([1, 2, 3, 4, 6, 8, 12, 16, 24, 48]);
  });
});

describe("Factors - Validation", () => {
  test("should throw TypeError for non-numbers", () => {
    expect(() => factors("12" as any)).toThrow(TypeError);
    expect(() => factors(NaN)).toThrow(TypeError);
  });

  test("should throw RangeError for Infinity", () => {
    expect(() => factors(Infinity)).toThrow(RangeError);
    expect(() => factors(-Infinity)).toThrow(RangeError);
  });

  test("should throw TypeError for non-integers", () => {
    expect(() => factors(12.5)).toThrow(TypeError);
    expect(() => factors(3.14)).toThrow(TypeError);
  });

  test("should throw RangeError for non-positive numbers", () => {
    expect(() => factors(0)).toThrow(RangeError);
    expect(() => factors(-5)).toThrow(RangeError);
  });
});

describe("Prime Factors", () => {
  test("should return prime factors of a number", () => {
    expect(primeFactors(12)).toEqual([2, 3]);
    expect(primeFactors(20)).toEqual([2, 5]);
    expect(primeFactors(28)).toEqual([2, 7]);
  });

  test("should handle prime numbers", () => {
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(3)).toEqual([3]);
    expect(primeFactors(7)).toEqual([7]);
    expect(primeFactors(11)).toEqual([11]);
    expect(primeFactors(13)).toEqual([13]);
  });

  test("should handle powers of 2", () => {
    expect(primeFactors(4)).toEqual([2]); // 2^2
    expect(primeFactors(8)).toEqual([2]); // 2^3
    expect(primeFactors(16)).toEqual([2]); // 2^4
    expect(primeFactors(32)).toEqual([2]); // 2^5
  });

  test("should handle powers of other primes", () => {
    expect(primeFactors(9)).toEqual([3]); // 3^2
    expect(primeFactors(27)).toEqual([3]); // 3^3
    expect(primeFactors(25)).toEqual([5]); // 5^2
    expect(primeFactors(125)).toEqual([5]); // 5^3
  });

  test("should handle composite numbers", () => {
    expect(primeFactors(30)).toEqual([2, 3, 5]); // 2 × 3 × 5
    expect(primeFactors(42)).toEqual([2, 3, 7]); // 2 × 3 × 7
    expect(primeFactors(60)).toEqual([2, 3, 5]); // 2^2 × 3 × 5
  });

  test("should handle perfect squares", () => {
    expect(primeFactors(36)).toEqual([2, 3]); // 2^2 × 3^2
    expect(primeFactors(100)).toEqual([2, 5]); // 2^2 × 5^2
    expect(primeFactors(144)).toEqual([2, 3]); // 2^4 × 3^2
  });

  test("should return unique prime factors only", () => {
    // Even if a prime appears multiple times, should only appear once
    expect(primeFactors(8)).toEqual([2]); // 2 × 2 × 2
    expect(primeFactors(12)).toEqual([2, 3]); // 2 × 2 × 3
  });

  test("should handle larger numbers", () => {
    expect(primeFactors(84)).toEqual([2, 3, 7]); // 2^2 × 3 × 7
    expect(primeFactors(210)).toEqual([2, 3, 5, 7]); // 2 × 3 × 5 × 7
  });

  test("should return factors in ascending order", () => {
    const result = primeFactors(210);
    expect(result).toEqual([2, 3, 5, 7]);

    // Verify sorted
    for (let i = 1; i < result.length; i++) {
      expect(result[i])!.toBeGreaterThan(result[i - 1]!);
    }
  });

  test("should handle numbers with large prime factors", () => {
    expect(primeFactors(14)).toEqual([2, 7]);
    expect(primeFactors(22)).toEqual([2, 11]);
    expect(primeFactors(26)).toEqual([2, 13]);
  });

  test("should match prime factorization properties", () => {
    // Product of unique prime factors should divide the original number
    const n = 60;
    const primes = primeFactors(n);
    const product = primes.reduce((acc, p) => acc * p, 1);
    expect(n % product).toBe(0);
  });
});

describe("Prime Factors - Validation", () => {
  test("should throw TypeError for non-numbers", () => {
    expect(() => primeFactors("12" as any)).toThrow(TypeError);
    expect(() => primeFactors(NaN)).toThrow(TypeError);
  });

  test("should throw RangeError for Infinity", () => {
    expect(() => primeFactors(Infinity)).toThrow(RangeError);
    expect(() => primeFactors(-Infinity)).toThrow(RangeError);
  });

  test("should throw TypeError for non-integers", () => {
    expect(() => primeFactors(12.5)).toThrow(TypeError);
    expect(() => primeFactors(3.14)).toThrow(TypeError);
  });

  test("should throw RangeError for numbers less than 2", () => {
    expect(() => primeFactors(0)).toThrow(RangeError);
    expect(() => primeFactors(1)).toThrow(RangeError);
    expect(() => primeFactors(-5)).toThrow(RangeError);
  });
});
