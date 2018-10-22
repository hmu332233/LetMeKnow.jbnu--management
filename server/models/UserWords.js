const UserWords = require('../schemas/UserWords');

const utils = require('../utils');

const moment = require('moment');

const UserWordsModule = {
  find: async (query = {}, options) => {
    query = utils.cleanObject(query);
    try {
      const userWords = await UserWords.find(query, options);
      return userWords;
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  },
  /*
  *  특정 날짜 구역내를 검색한다
  *  @param {Date} start 시작날짜
  *  @param {Date} end 끝 날짜
  */
  findByDate: async ({ start , end }) => {
    start = start || moment().startOf('day');
    end = end || moment(start).endOf('day');

    try {
      const userWords = await UserWords.find({
        createdAt: {
          $gte: start.toDate(),
          $lt: end.toDate()
        }
      });
      return userWords;
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  },
  create: async ({ id, content }) => {
    try {
      const newUserWord = new UserWords({ id, content });
      return await newUserWord.save();
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  },
}

module.exports = UserWordsModule;