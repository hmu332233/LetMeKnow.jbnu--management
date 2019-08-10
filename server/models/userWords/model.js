const moment = require('moment');

const { db } = require('./info');

const { common, format } = require('../../utils');

exports.find = async (query = {}, options, isFilteredByToday) => {
  query = common.cleanObject(query);

  if (isFilteredByToday) {
    const start = moment().startOf('day');
    const end = moment(start).endOf('day');
    query.createdAt = {
      $gte: start.toDate(),
      $lt: end.toDate(),
    };
  }

  try {
    const userWords = await db.user_words
      .find(query, options)
      .sort({ createdAt: -1 })
      .lean();
    return userWords;
  } catch (err) {
    throw format.mongo.error(err);
  }
};

/*
 *  특정 키워드가 포함된 userWord를 가져온다
 *  @param {String} content 검색할 키워드
 *  @param {Boolean} matchAll 전체 일치, 부분 일치 여부
 */
exports.findByContent = async ({ content = '', matchAll = false }) => {
  const contentQuery = matchAll ? content : /`${content}`/;
  try {
    const userWords = await db.user_words
      .find({
        content: contentQuery,
      })
      .sort({ createdAt: -1 })
      .lean();
    return userWords;
  } catch (err) {
    throw format.mongo.error(err);
  }
};

/*
 *  특정 키워드가 포함된 userWord를 가져온다
 *  @param {String} content 검색할 키워드
 *  @param {Boolean} matchAll 전체 일치, 부분 일치 여부
 */
exports.findByContent = async ({ content = '', matchAll = false }) => {
  const contentQuery = matchAll ? content : /`${content}`/;
  try {
    const userWords = await db.user_words
      .find({
        content: contentQuery,
      })
      .sort({ createdAt: -1 })
      .lean();
    return userWords;
  } catch (err) {
    throw format.mongo.error(err);
  }
};

/*
 *  특정 날짜 구역내에서 같은 단어별로 그룹화한다.
 *  @param {Date} start 시작날짜 ex) 2018-10-24
 *  @param {Date} end 끝 날짜 ex) 2018-10-24
 */
exports.findByDateAndGroupByContent = async ({ start, end }) => {
  start = (start && moment(start).startOf('day')) || moment().startOf('day');
  end = (end && moment(end).endOf('day')) || moment(start).endOf('day');

  try {
    const userWords = await db.user_words
      .aggregate([
        {
          $match: {
            createdAt: {
              $gte: start.toDate(),
              $lt: end.toDate(),
            },
          },
        },
        {
          $sort: {
            createdAt: 1,
          },
        },
        {
          $group: {
            _id: '$content',
            count: { $sum: 1 },
            lastUserId: { $last: '$id' },
            lastTimestamp: { $last: '$createdAt' },
          },
        },
        {
          $project: {
            _id: 0,
            content: '$_id',
            count: 1,
            lastUserId: 1,
            lastTimestamp: 1,
          },
        },
      ])
      .sort({ count: -1, lastTimestamp: 1 });
    return userWords;
  } catch (err) {
    throw format.mongo.error(err);
  }
};

/*
 *  특정 날짜 구역내를 검색한다
 *  @param {Date} start 시작날짜 ex) 2018-10-24
 *  @param {Date} end 끝 날짜 ex) 2018-10-24
 */
exports.findByDate = async ({ start, end }) => {
  start = (start && moment(start).startOf('day')) || moment().startOf('day');
  end = (end && moment(end).endOf('day')) || moment(start).endOf('day');

  try {
    const userWords = await db.user_words
      .find({
        createdAt: {
          $gte: start.toDate(),
          $lt: end.toDate(),
        },
      })
      .sort({ createdAt: -1 })
      .lean();

    return common.normalizeUserWords(userWords);
  } catch (err) {
    throw format.mongo.error(err);
  }
};

exports.create = async ({ id, content }) => {
  try {
    const newUserWord = new db.user_words({ id, content });
    return await newUserWord.save();
  } catch (err) {
    throw format.mongo.error(err);
  }
};
