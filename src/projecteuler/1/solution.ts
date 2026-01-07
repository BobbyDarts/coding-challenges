// There are many ways to solve this problem. Here are two different implementations.

const sum = (numbers: number[]): number =>
  numbers.reduce((total, nbr) => total + nbr, 0);

type Range = {
  start?: number;
  stop: number;
  step?: number;
};

const range = ({ start = 0, stop, step = 1 }: Range): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// set-based implementation
export function sumMultiplesOf3And5(limit: number): number {
  const multiplesOf3 = range({ stop: limit - 1, step: 3 });
  const multiplesOf5 = range({ stop: limit - 1, step: 5 });
  const multiples = Array.from(new Set([...multiplesOf3, ...multiplesOf5]));
  return sum(multiples);
}

// filter-based implementation
export function sumMultiplesOf3And5_v2(limit: number): number {
  const lRange = range({ stop: limit - 1 });
  const multiples = lRange.filter((nbr) => nbr % 3 === 0 || nbr % 5 === 0);
  return sum(multiples);
}
