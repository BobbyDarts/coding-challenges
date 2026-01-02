export function sqrt(n: number): number {
  // Handle edge cases
  if (n < 0) {
    throw new Error("Cannot compute square root of negative number");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let guess = n;
  const epsilon = 0.00001; // precision tolerance

  // Newton's method: x_next = (x + n/x) / 2
  while (Math.abs(guess * guess - n) > epsilon) {
    guess = (guess + n / guess) / 2;
  }

  return guess;
}
