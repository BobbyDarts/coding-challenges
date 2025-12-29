import { canShiftToGet } from "./solution";

describe("Problem 1820: String Shift", () => {
  test("should return true for valid shift", () => {
    expect(canShiftToGet("abcde", "cdeab")).toBe(true);
  });

  test("should return false for invalid shift", () => {
    expect(canShiftToGet("abc", "acb")).toBe(false);
  });

  test("should handle sentence with spaces", () => {
    expect(canShiftToGet("This is a sentence.", "is is a sentence.Th")).toBe(
      true
    );
  });
});
