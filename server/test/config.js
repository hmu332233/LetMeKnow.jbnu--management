const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  verbose: true,
  globals: {
    JWT_SECRET : 'secret'
  }
};