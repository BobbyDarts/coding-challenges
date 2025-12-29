# Daily Coding Problem

A collection of coding problem solutions from [Daily Coding Problem](https://www.dailycodingproblem.com/).

## About

This repository contains my solutions to coding problems sent by Daily Coding Problem. Each problem is solved in TypeScript with comprehensive test coverage.

## Project Structure

```
daily-coding-problem/
├── src/
│   ├── 1820/
│   │   ├── PROBLEM.md         # Problem description
│   │   ├── solution.ts       # Solution implementation
│   │   └── solution.test.ts  # Test cases
│   ├── 1821/
│   │   ├── PROBLEM.md
│   │   ├── solution.ts
│   │   └── solution.test.ts
│   └── ...
├── package.json
├── tsconfig.json
└── jest.config.mjs
```

## Getting Started

### Prerequisites

- Node.js (v22+ recommended)
- npm (v11+)

### Installation

```bash
# Clone the repository
git clone https://github.com/bobbydarts/daily-coding-problem.git
cd daily-coding-problem

# Install dependencies
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests for a specific problem
npm test 1820
```

## Workflow

Each problem follows this workflow:

1. Create a new branch for the problem

   ```bash
   git checkout -b problem/XXXX
   ```

2. Create the problem directory structure

   ```bash
   mkdir -p src/XXXX
   touch src/XXXX/{PROBLEM.md,solution.ts,solution.test.ts}
   ```

3. Implement the solution with tests

4. Commit and merge
   ```bash
   git add src/XXXX/
   git commit -m "Solve problem XXXX: [problem name]"
   git checkout main
   git merge problem/XXXX
   git push origin main
   ```

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Jest** - Testing framework
- **ts-jest** - TypeScript preprocessor for Jest

## Resources

- [Daily Coding Problem](https://www.dailycodingproblem.com/) - Problem source
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## License

TMIT License - see [LICENSE](LICENSE) file for details.
