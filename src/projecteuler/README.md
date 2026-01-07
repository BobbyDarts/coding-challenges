# Project Euler Challenges

Solutions to coding challenges from [Project Euler](https://projecteuler.net/).

## About

Project Euler is a collection of difficult math-focused programming problems. While mathematical thinking can help you find smarter and more efficient solutions, most of the problems ultimately require writing code and using computational techniques to solve them.

## Problems Solved

| #                       | Problem             | Date Solved |
| ----------------------- | ------------------- | ----------- |
| [1](src/projecteuler/1) | Multiples of 3 or 5 | 2026-01-07  |

## Workflow

### Start a new problem

```bash
npm run start:euler <problem-number>

# Example:
npm run start:euler 1
```

This creates:

- Branch: `projecteuler/problem/<number>`
- Directory: `src/projecteuler/<number>/`
- Files: `PROBLEM.md`, `solution.ts`, `solution.test.ts`

### Solve and commit

```bash
# After implementing and testing
npm run solve:euler <problem-number> "<problem-name>"

# Example:
npm run solve:euler 1 "Multiples of 3 or 5"

# Dry run (preview changes)
npm run solve:euler -- 1 "Multiples of 3 or 5" --dry-run
```

## Running Tests

```bash
# Run all Project Euler tests
npm test projecteuler

# Run specific problem tests
npm test projecteuler/1

# Watch mode
npm run test:watch projecteuler
```

## Categories

Project Euler challenges are organized into several categories:

- **Foundations**

  - Multiples & Divisibility
  - Loops & Conditionals
  - Basic Arithmetic

- **Number Theory**

  - Prime Numbers
  - Factors & Divisors
  - Modular Arithmetic

- **Sequences & Series**

  - Fibonacci
  - Arithmetic & Geometric Series
  - Recurrence Relations

- **Combinatorics**

  - Permutations & Combinations
  - Counting Problems
  - Binomial Coefficients

- **Dynamic Programming & Optimization**

  - Memoization
  - Tabulation
  - Search Space Reduction

- **Data Structures**

  - Arrays & Tuples
  - Sets & Maps
  - Graphs

- **Graph Theory**

  - Paths & Shortest Routes
  - Traversals
  - Spanning Trees

- **Geometry**

  - Coordinate Geometry
  - Lattice Points
  - Polygons & Areas

- **Probability & Statistics**

  - Expected Value
  - Simulations
  - Random Processes

- **Algebra & Advanced Math**

  - Polynomials & Matrices
  - Diophantine Equations
  - Generating Functions

- **Big Numbers & Precision**
  - Large Integer Arithmetic
  - Modular Exponentiation
  - Avoiding Overflow

## Resources

- [Project Euler](https://projecteuler.net/)

## Notes

- Problem numbers correspond to Project Euler's challenge IDs or can be custom identifiers
- Each solution includes comprehensive test cases
- Focus on clean, readable code with proper TypeScript typing
