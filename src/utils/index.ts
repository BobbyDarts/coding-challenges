import type { Range } from "./types";

// Direct Recurrence
export function evenFibonacci(n: number): number {
  // EFn = 4*EFn-1 + EFn-2
  // 0, 2, 8, 34, 144, 610, ...
  if (n <= 0) return 0;
  if (n === 1) return 2;
  return 4 * evenFibonacci(n - 1) + evenFibonacci(n - 2);
}

export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export const arraySum = (numbers: number[]): number =>
  numbers.reduce((total, nbr) => total + nbr, 0);

export const range = ({ start = 0, stop, step = 1 }: Range): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
