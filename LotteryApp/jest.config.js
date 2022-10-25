/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    __DEV__: true
  },
  moduleNameMapper: {
    "my-module.js": "<rootDir>/path/to/my-module.js"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@?react-navigation|@?mobx-react-lite)"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};