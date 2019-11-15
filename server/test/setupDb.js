// test-setup.js
const mongoose = require('mongoose');
mongoose.promise = global.Promise;

module.exports = {
  setupDB() {
    // Connect to Mongoose
    beforeAll(async done => {
      await mongoose.connect(process.env.MONGO_DB || process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      done();
    });

    // Disconnect Mongoose
    afterAll(async done => {
      const collections = Object.keys(mongoose.connection.collections);

      for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany();
      }

      await mongoose.connection.close();
      done();
    });
  },
};
