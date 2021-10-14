const esModules = [].join('|');

module.exports = {
  preset: 'jest-preset-angular',
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  clearMocks: true,

  globals: {
    'ts-jest': {},
  },
};
