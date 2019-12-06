const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  verbose: true,
  transform: {},
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
};
