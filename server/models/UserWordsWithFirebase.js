const { firebase, db } = require('../db/firebaseInit');
const moment = require('moment');
const _ = require('lodash');

const userWordRef = db.collection('user_words');

const UserWordsModule = {
  set: ({ id, content }) => {
    const newUserWord = userWordRef.doc();
    newUserWord.set({ 
      id,
      content,
      timestamp: moment().valueOf(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  /*
  *  특정 날짜 구역내를 검색한다
  *  @param {Date} start 시작날짜 ex) 2018-10-24
  *  @param {Date} end 끝 날짜 ex) 2018-10-24
  */
  findByDate: async ({ start , end }) => {
    start = start && moment(start).startOf('day') || moment().startOf('day');
    end = end && moment(start).endOf('day') || moment(start).endOf('day');

    const userWordSnapshot = await userWordRef.where('timestamp', '>=', start.valueOf()).where('timestamp', '<', end.valueOf()).orderBy("timestamp", "desc").get();

    if (userWordSnapshot.empty) {
      return [];
    }

    const data = userWordSnapshot.docs.map((docSnapshot) => docSnapshot.data());
    return data;
  },
  /*
  *  특정 날짜 구역내에서 같은 단어별로 그룹화한다.
  *  @param {Date} start 시작날짜 ex) 2018-10-24
  *  @param {Date} end 끝 날짜 ex) 2018-10-24
  */
  findByDateAndGroupByContent: async ({ start , end }) => {
    const userWords = await UserWordsModule.findByDate({ start, end });
    const userWordGroups = _.groupBy(userWords, 'content');
    
    const userWordGroupArrayWithCount = [];
    for(let key in userWordGroups) {
      const length = userWordGroups[key].length;
      userWordGroupArrayWithCount.push({
        content: key,
        count: length,
        lastUserId: userWordGroups[key][0].id,
        lastTimestamp: userWordGroups[key][0].timestamp
      });
    }

    return _.orderBy(userWordGroupArrayWithCount, ['count', 'lastTimestamp'], ['desc', 'age']);
  }
};

module.exports = UserWordsModule;