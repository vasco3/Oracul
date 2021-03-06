module.exports = {
  moduleFileExtensions: ['js'],
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
  ],
  testMatch: [
    '<rootDir>/src/**/*test.js',
    '<rootDir>/__tests__/**/*_test.{js,bs.js}',
  ],
  transform: {
    '^.+\\.js$': './jest-transform.js',
  },
  transformIgnorePatterns: [
    // transform ES6 modules generated by BuckleScript
    // https://regexr.com/46984
    '/node_modules/(?!(@.*/)?(bs-.*|reason-.*)/).+\\.js$',
  ],
};
