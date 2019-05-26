const { db, CONSTANTS } = require('./info');

const { format } = require('../../utils');

const modUsers = {
  CONSTANTS,
  create: async function ({ id, pw, level }) {
    const newUser = new db.users({ id, pw, level });
    try {
      await newUser.save();
      return true;
    } catch (err) {
      throw format.mongo.error(err);
    }
  }
}

module.exports = modUsers;