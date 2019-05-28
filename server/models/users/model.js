const { db, CONSTANTS } = require('./info');

const { format } = require('../../utils');

const Users = {
  CONSTANTS,
  findById: async function ({ id }, { select } = {}) {
    try {
      const user = await db.users.findOne({ id }).select(select).lean();
      return user;
    } catch (err) {
      throw format.mongo.error(err);
    }
  },
  create: async function ({ id, pw, level }) {
    const newUser = new db.users({ id, pw, level });
    try {
      await newUser.save();
      return true;
    } catch (err) {
      throw format.mongo.error(err);
    }
  },
  verify: async function ({ id, pw }) {
    const user = await this.findById({ id }, { select: { pw: 1 }});
    return pw === user.pw;
  }
}

module.exports = Users;