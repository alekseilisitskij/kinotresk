const path = require("path");

module.exports = {
  preset: "ts-jest",
  rootDir: path.resolve(__dirname, "../../"),
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: path.resolve(__dirname, "tsconfig.jest.json") },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.ts")],
};
