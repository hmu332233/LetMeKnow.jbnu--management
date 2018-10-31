const { firebase, db } = require('../db/firebaseInit');
const moment = require('moment');

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
  }
};

module.exports = UserWordsModule;