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
  *  특정 날짜 구역내에서 같은 단어별로 그룹화한다.
  *  @param {Date} start 시작날짜 ex) 2018-10-24
  *  @param {Date} end 끝 날짜 ex) 2018-10-24
  */
  findByDateAndGroupByContent: async ({ start , end }) => {
    start = start && moment(start).startOf('day') || moment().startOf('day');
    end = end && moment(start).endOf('day') || moment(start).endOf('day');

    try {
      const userWords = await UserWords.aggregate([
        {
          $match: {
            createdAt: {
              $gte: start.toDate(),
              $lt: end.toDate()
            }
          }
        },
        {
          $group: {
            _id: '$content',
            count: { $sum: 1 }
          }
        }
      ]);
      return userWords;
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  },
  /*
  *  특정 날짜 구역내를 검색한다
  *  @param {Date} start 시작날짜 ex) 2018-10-24
  *  @param {Date} end 끝 날짜 ex) 2018-10-24
  */
  findByDate: async ({ start , end }) => {
    start = start && moment(start).startOf('day') || moment().startOf('day');
    end = end && moment(start).endOf('day') || moment(start).endOf('day');

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