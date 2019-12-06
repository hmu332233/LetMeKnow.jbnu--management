const mongoose = require('mongoose');

const CONSTANTS = {};

/*
 *  UserWord
 *  type 요청의 보내진 곳의 이름
 *  id 유저 고유의 id
 *  utterance 유저가 입력한 발화
 *  block 발화에 반응한 블록의 정보
 *  params 발화로부터 추출한 파라미터 정보 (kakao)
 */
const userWordSchema = mongoose.Schema(
  {
    origin: {
      type: String,
      required: [true, 'UserWord - origin is required!'],
    },
    id: {
      type: String,
      required: [true, 'UserWord - id is required!'],
    },
    utterance: {
      type: String,
      default: '',
    },
    block: {
      id: String,
      name: String,
    },
    params: {
      type: Object,
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
