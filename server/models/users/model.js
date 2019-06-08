const { db, CONSTANTS } = require('./info');

const { format } = require('../../utils');

const Users = {
  CONSTANTS,
  findBy_id: async function ({ _id }, { select } = {}) {
    try {
      const user = await db.users.findOne({ _id }).select(select).lean();
      return user;
    } catch (err) {
      throw format.mongo.error(err);
    }
  },
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
    const user = await this.findById({ id });

    if (!user) {
      return { isVerified: false };
    }

    const isVerified = pw === user.pw;
    return { user, isVerified };
  }
}

module.exports = Users;