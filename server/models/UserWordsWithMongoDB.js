const UserWords = require('../schemas/UserWords');

const { utils } = require('../utils');

const moment = require('moment');

const UserWordsModule = {
  find: async (query = {}, options, isFilteredByToday) => {
    query = utils.cleanObject(query);
    
    if (isFilteredByToday) {
      const start = moment().startOf('day');
      const end = moment(start).endOf('day');
      query.createdAt = {
        $gte: start.toDate(),
        $lt: end.toDate()
      }
    }

    try {
      const userWords = await UserWords.find(query, options).lean().sort({ createdAt: -1 });
      return userWords;
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  },
  /*
  *  특정 키워드가 포함된 userWord를 가져온다
  *  @param {String} content 검색할 키워드
  *  @param {Boolean} matchAll 전체 일치, 부분 일치 여부
  */
  findByContent: async ({ content = '', matchAll = false }) => {
    const contentQuery = matchAll ? content : /`${content}`/;
    try {
      const userWords = await UserWords.find({ 
        content: contentQuery 
      }).lean().sort({ createdAt: -1 });
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
    end = end && moment(end).endOf('day') || moment(start).endOf('day');

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
          $sort: {
            createdAt: 1
          }
        },
        {
          $group: {
            _id: '$content',
            count: { $sum: 1 },
            lastUserId: { $last: "$id" },
            lastTimestamp: { $last: "$createdAt" }
          }
        },
        {
          $project: {  
            _id: 0,
            content: "$_id",
            count: 1,
            lastUserId: 1,
            lastTimestamp: 1
         }
        }
      ]).sort({ count: -1, lastTimestamp: 1 });
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
    end = end && moment(end).endOf('day') || moment(start).endOf('day');

    try {
      const userWords = await UserWords.find({
        createdAt: {
          $gte: start.toDate(),
          $lt: end.toDate()
        }
      }).lean().sort({ createdAt: -1 });
      return utils.normalizeUserWords(userWords);
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