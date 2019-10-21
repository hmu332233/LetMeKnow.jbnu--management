const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  verbose: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/setup.js'],
};
