// Free Code Camp Daily Coding Challenge (01/02/2026)
import { fibonacci } from "@utils";
import { validatePositiveInteger } from "@utils/validation";

export function nthFibonacci(n: number): number {
  validatePositiveInteger({
    value: n,
    functionName: "nthFibonacci()",
    minValue: 0,
  });

  return fibonacci(n);
}
