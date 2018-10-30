const { firebase, db } = require('../db/firebaseInit');
const moment = require('moment');

const UserWordsModule = {
  set: ({ id, content }) => {
    const newUserWord = db.collection('user_words').doc();
    newUserWord.set({ 
      id,
      content,
      timestamp: moment().unix(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}

module.exports = UserWordsModule;