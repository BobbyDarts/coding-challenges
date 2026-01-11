import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",

    "^@utils$": "<rootDir>/src/utils",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",

    "^@euler/(.*)$": "<rootDir>/src/projecteuler/$1",
    "^@fcc/(.*)$": "<rootDir>/src/freecodecamp/$1",
    "^@dcp/(.*)$": "<rootDir>/src/dailycodingproblem/$1",
  },
  transform: {
    ...tsJestTransformCfg,
  },
};
