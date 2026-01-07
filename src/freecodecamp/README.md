# FreeCodeCamp Challenges

Solutions to coding challenges from [FreeCodeCamp](https://www.freecodecamp.org/).

## About

FreeCodeCamp offers a comprehensive curriculum covering web development, algorithms, data structures, and more. This directory contains my solutions to their coding challenges, implemented in TypeScript with full test coverage.

## Problems Solved

| #            | Problem              | Date Solved |
| ------------ | -------------------- | ----------- |
| [145](./145) | Nth Fibonacci Number | 2026-01-07  |
| [149](./149) | vOwElcAsE            | 2026-01-07  |

## Workflow

### Start a new problem

```bash
npm run start:fcc <problem-number>

# Example:
npm run start:fcc 145
```

This creates:

- Branch: `freecodecamp/problem/<number>`
- Directory: `src/freecodecamp/<number>/`
- Files: `PROBLEM.md`, `solution.ts`, `solution.test.ts`

### Solve and commit

```bash
# After implementing and testing
npm run solve:fcc <problem-number> "<problem-name>"

# Example:
npm run solve:fcc 145 "Symmetric Difference"

# Dry run (preview changes)
npm run solve:fcc -- 145 "Symmetric Difference" --dry-run
```

## Running Tests

```bash
# Run all FreeCodeCamp tests
npm test freecodecamp

# Run specific problem tests
npm test freecodecamp/145

# Watch mode
npm run test:watch freecodecamp
```

## Categories

FreeCodeCamp challenges are organized into several categories:

- **JavaScript Algorithms and Data Structures**
  - Basic Algorithm Scripting
  - Intermediate Algorithm Scripting
  - Advanced Algorithm Scripting
  - Functional Programming
- **Coding Interview Prep**
  - Algorithms
  - Data Structures
  - Take Home Projects
  - Rosetta Code
  - Project Euler

## Resources

- [FreeCodeCamp](https://www.freecodecamp.org/)
- [JavaScript Algorithms Curriculum](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Coding Interview Prep](https://www.freecodecamp.org/learn/coding-interview-prep/)

## Notes

- Problem numbers correspond to FreeCodeCamp's challenge IDs or can be custom identifiers
- Each solution includes comprehensive test cases
- Focus on clean, readable code with proper TypeScript typing
