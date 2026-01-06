#!/usr/bin/env ts-node

import { execSync } from "child_process";
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const args = process.argv.slice(2);
const [platform, problemNumber] = args;

if (!platform || !problemNumber) {
  console.error("Usage: npm run start:<platform> <problem-number>");
  console.error("Example: npm run start:dcp 1817");
  process.exit(1);
}

const branchName = `${platform}/problem/${problemNumber}`;
const problemDir = join(process.cwd(), "src", platform, problemNumber);

// Check if problem directory already exists
if (existsSync(problemDir)) {
  console.error(
    `❌ Error: Problem ${problemNumber} already exists at ${problemDir}`
  );
  process.exit(1);
}

try {
  // Create branch
  console.log(`🌿 Creating branch ${branchName}...`);
  execSync(`git checkout -b ${branchName}`, { stdio: "inherit" });

  // Create directory
  console.log(`📁 Creating directory src/${platform}/${problemNumber}...`);
  mkdirSync(problemDir, { recursive: true });

  // Create PROBLEM.md
  const problemMdContent = `# Problem ${problemNumber}

## Description

[Paste problem description here]

## Examples

\`\`\`
Example 1:
Input: 
Output: 

Example 2:
Input: 
Output: 
\`\`\`

## Constraints

- [Add constraints here]

## Notes

- [Add any additional notes or approaches here]
`;

  writeFileSync(join(problemDir, "PROBLEM.md"), problemMdContent);
  console.log(`  ✓ Created PROBLEM.md`);

  // Create solution.ts
  const solutionContent = `export function solution() {
  // TODO: Implement solution
}
`;

  writeFileSync(join(problemDir, "solution.ts"), solutionContent);
  console.log(`  ✓ Created solution.ts`);

  // Create solution.test.ts
  const testContent = `import { solution } from './solution';

describe('Problem ${problemNumber}: [Problem Name]', () => {
  test('should handle example case', () => {
    // TODO: Add test cases
    expect(true).toBe(true);
  });

  test('should handle edge cases', () => {
    // TODO: Add edge case tests
  });
});
`;

  writeFileSync(join(problemDir, "solution.test.ts"), testContent);
  console.log(`  ✓ Created solution.test.ts`);

  console.log(`\n✅ Problem ${problemNumber} initialized!`);
  console.log(`\nNext steps:`);
  console.log(
    `  1. Edit src/${platform}/${problemNumber}/PROBLEM.md with the problem description`
  );
  console.log(`  2. Implement src/${platform}/${problemNumber}/solution.ts`);
  console.log(
    `  3. Add tests to src/${platform}/${problemNumber}/solution.test.ts`
  );
  console.log(`  4. Run tests: npm test ${platform}/${problemNumber}`);

  // Platform-specific solve command hints
  const platformShorthand =
    platform === "dailycodingproblem" ? "dcp" : platform;
  console.log(
    `  5. When done: npm run solve:${platformShorthand} ${problemNumber} "<problem-name>"`
  );
} catch (error) {
  console.error("❌ Error:", error);
  process.exit(1);
}
