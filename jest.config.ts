import { Config } from "jest";

const config: Config = {
  // automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  errorOnDeprecated: false,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "jsx", "tsx", "ts"],
  rootDir: ".",
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  maxWorkers: 1,
};

export default config;
