const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');

beforeAll(done => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    done();
  });
});

afterAll(done => {
  mongoose.disconnect();
  return done();
});