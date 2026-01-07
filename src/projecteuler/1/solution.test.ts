import { sumMultiplesOf3And5, sumMultiplesOf3And5_v2 } from "./solution";

describe("Problem 1: Sum of Multiples of 3 and 5", () => {
  const implementations = [
    ["set-based implementation", sumMultiplesOf3And5],
    ["filter-based implementation", sumMultiplesOf3And5_v2],
  ] as const;

  describe.each(implementations)("%s", (_, fn) => {
    test("returns 23 for limit = 10 (problem example)", () => {
      expect(fn(10)).toBe(23);
    });

    test("returns 0 when limit is less than 3", () => {
      expect(fn(0)).toBe(0);
      expect(fn(1)).toBe(0);
      expect(fn(2)).toBe(0);
    });

    test("handles limit = 3", () => {
      // multiples below 3 → none
      expect(fn(3)).toBe(0);
    });

    test("handles limit = 4", () => {
      // multiples: 3
      expect(fn(4)).toBe(3);
    });

    test("handles limit = 5", () => {
      // multiples: 3
      expect(fn(5)).toBe(3);
    });

    test("handles limit = 6", () => {
      // multiples: 3, 5
      expect(fn(6)).toBe(8);
    });

    test("works for a larger number", () => {
      expect(fn(1000)).toBe(233168);
    });
  });

  test("both implementations return the same result for a range of inputs", () => {
    for (let i = 0; i <= 100; i++) {
      expect(sumMultiplesOf3And5(i)).toBe(sumMultiplesOf3And5_v2(i));
    }
  });
});
