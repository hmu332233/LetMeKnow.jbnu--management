const mongoose = require('mongoose');

const CONSTANTS = {
  ACTION: {
    MESSAGE: 'message',
  },
};

/*
 *  QuizReply
 *  label {string}
 *  action {string}
 *  messageText {string}
 *  start {Date} 보여질 날짜 범위 중 시작 날짜
 *  end {Date} 보여질 날짜 범위 중 끝 날자
 */
const schema = mongoose.Schema({
  label: {
    type: String,
    required: [true, 'QuizReply - label is required!'],
  },
  action: {
    type: String,
    default: CONSTANTS.ACTION.MESSAGE,
  },
  messageText: {
    type: String,
    required: [true, 'QuizReply - messageText is required!'],
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
});

const model = mongoose.model('quiz_reply', schema);

module.exports = {
  db: { quick_replies: model },
  CONSTANTS,
};
