Given a real number n, find the square root of n. For example, given n = 9, return 3.

Considerations:

**1. What method should you use?**

- You _could_ just use `Math.sqrt(n)`, but that's probably not the point of the exercise
- They likely want you to implement an algorithm (Newton's method or binary search)

**2. Floating point precision**

- For `n = 9`, the answer is exactly `3`
- But for `n = 2`, the answer is `1.41421356...` (irrational)
- How precise should your answer be? Do you need to specify a tolerance like `0.00001`?

**3. Edge cases**

- What about `n = 0`? (answer: `0`)
- What about negative numbers? (undefined in real numbers, but maybe return `NaN` or throw an error?)
- What about very large or very small numbers?

**4. Performance**

- Newton's method converges very quickly (quadratic convergence)
- Binary search is simpler but slower (logarithmic convergence)
