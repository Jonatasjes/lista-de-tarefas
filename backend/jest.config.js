// eslint-disable-next-line no-undef
module.exports = {
  // collectCoverage: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
