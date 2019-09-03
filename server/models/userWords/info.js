const mongoose = require('mongoose');

const CONSTANTS = {};

/*
 *  UserWord
 *  id {string} 카카오톡에서 넘어온 유저 고유의 id
 *  content {string} 카카오톡에서 넘어온 유저가 입력한 단어
 */
const userWordSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'UserWord - id is required!'],
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('user_word', userWordSchema);

module.exports = {
  db: { user_words: model },
  CONSTANTS,
};
