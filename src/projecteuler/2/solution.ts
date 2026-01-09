import { arraySum, evenFibonacci } from "../../utils";

export function evenFibonacciSum(limit: number): number {
  const numbers: number[] = [];
  let n = 0;

  while (true) {
    const fibonacci = evenFibonacci(n);
    if (fibonacci >= limit) break;
    numbers.push(fibonacci);
    n++;
  }

  return arraySum(numbers);
}
