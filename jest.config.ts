import { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  errorOnDeprecated: false,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|js)x?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleFileExtensions: ["js", "jsx", "tsx", "ts"],
  rootDir: ".",
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  maxWorkers: 1,
  coveragePathIgnorePatterns: ["/node_modules/", ".storybook", "test/setup"],
};

export default config;
