// test-setup.js
const mongoose = require('mongoose');
mongoose.promise = global.Promise;

module.exports = {
  setupDB() {
    // Connect to Mongoose
    beforeAll(async done => {
      await mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      done();
    });

    // Disconnect Mongoose
    afterAll(async done => {
      await mongoose.connection.close();
      done();
    });
  },
};
