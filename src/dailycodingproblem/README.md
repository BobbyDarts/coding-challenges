# Daily Coding Problem

A collection of coding problem solutions from [Daily Coding Problem](https://www.dailycodingproblem.com/).

## About

This repository contains my solutions to coding problems sent by Daily Coding Problem. Each problem is solved in TypeScript with comprehensive test coverage.

## Problems Solved

| #              | Problem       | Difficulty | Date Solved |
| -------------- | ------------- | ---------- | ----------- |
| [1813](./1813) | Order Log     | Easy       | 2026-01-02  |
| [1818](./1818) | Closest Point | Easy       | 2026-01-02  |
| [1820](./1820) | String Shift  | Easy       | 2025-12-29  |
| [1821](./1821) | Square Root   | Medium     | 2026-01-02  |

## Getting Started

## Workflow

Each problem follows this workflow:

1. Start a new problem

   **Using the start script (recommended):**

```bash
   npm run start:dcp <problem-number>

   # Example:
   npm run start:dcp 1817
```

**Manual commands:**

```bash
   git checkout -b dcp/problem/XXXX
   mkdir -p src/dailycodingproblem/XXXX
   touch src/dailycodingproblem/XXXX/{PROBLEM.md,solution.ts,solution.test.ts}
```

2. Fill in the problem details and implement the solution

   - Edit `src/dailycodingproblem/XXXX/PROBLEM.md` with the problem description
   - Implement `src/dailycodingproblem/XXXX/solution.ts`
   - Add tests to `src/dailycodingproblem/XXXX/solution.test.ts`
   - Run tests: `npm test dailycodingproblem/XXXX`

3. Commit and merge your changes

   **Using the solve script (recommended):**

```bash
   # Normal solve and merge
   npm run solve:dcp <problem-number> "<problem-name>"

   # Dry run (preview what will happen without executing)
   npm run solve:dcp -- <problem-number> "<problem-name>" --dry-run

   # Example:
   npm run solve:dcp 1817 "Binary Tree"
   npm run solve:dcp -- 1817 "Binary Tree" --dry-run
```

**Manual git commands:**

```bash
   git add src/dailycodingproblem/XXXX/
   git commit -m "Solve problem XXXX: [problem name]"
   git checkout main
   git merge dcp/problem/XXXX
   git push origin main
   git branch -d dcp/problem/XXXX
```

Each problem follows this workflow:

1. Create a new branch for the problem

   ```bash
   git checkout -b dcp/problem/XXXX
   ```

2. Create the problem directory structure

   ```bash
   mkdir -p src/dailycodingproblem/XXXX
   touch src/dailycodingproblem/XXXX/{PROBLEM.md,solution.ts,solution.test.ts}
   ```

3. Implement the solution with tests

4. Commit and merge your changes

   **Using the solve script (recommended):**

```bash
   # Normal solve and merge
   npm run solve:dcp  ""

   # Dry run (preview what will happen without executing)
   npm run solve:dcp --  "" --dry-run

   # Example:
   npm run solve:dcp 1818 "Closest Points"
   npm run solve:dcp -- 1818 "Closest Points" --dry-run
```

**Manual git commands:**

```bash
   git add src/dailycodingproblem/XXXX/
   git commit -m "Solve problem XXXX: [problem name]"
   git checkout main
   git merge dcp/problem/XXXX
   git push origin main
   git branch -d dcp/problem/XXXX
```

## License

MIT License - see [LICENSE](LICENSE) file for details.
