# Coding Challenges

A collection of my solutions to various coding challenge platforms, all using TypeScript and Jest.

## Platforms

### [Daily Coding Problem](https://www.dailycodingproblem.com/)

Daily interview prep questions from top companies.

**Quick Start:**

```bash
npm run start:dcp 1817
npm run solve:dcp 1817 "Problem Name"
```

See [Daily Coding Problem README](./src/dailycodingproblem/README.md) for details.

### Coming Soon

- LeetCode
- Advent of Code
- Project Euler

## Project Structure

```
coding-challenges/
├── src/
│   ├── dailycodingproblem/
│   │   ├── 1818/
│   │   ├── 1820/
│   │   └── 1821/
│   ├── leetcode/ (coming soon)
│   └── adventofcode/ (coming soon)
├── scripts/
│   ├── start.ts
│   └── solve.ts
├── package.json
├── tsconfig.json
└── jest.config.mjs
```

### Prerequisites

- Node.js (v22+ recommended)
- npm (v11+)

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Jest** - Testing framework
- **ts-jest** - TypeScript preprocessor for Jest

## Installation

```bash
git clone https://github.com/BobbyDarts/coding-challenges.git
cd coding-challenges
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests for specific platform
npm test dailycodingproblem

# Run tests for specific problem
npm test dailycodingproblem/1818
```

## Resources

- [Daily Coding Problem](https://www.dailycodingproblem.com/) - Problem source
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## License

MIT License - see [LICENSE](LICENSE) file for details.
