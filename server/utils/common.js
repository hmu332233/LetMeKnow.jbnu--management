const _ = require('lodash');

const utils = {};

/*
  cleanObject
  key 값 중에 null 또는 undefined가 있으면 이것을 제거한 새로운 object를 리턴한다.
  
  @param {object} originalObject 
  @return {object} null, undefined가 제거된 새로운 object
*/
utils.cleanObject = (originalObject) => _.pickBy(originalObject, _.identity);

utils.normalizeUserWords = (userWords) => {
  return userWords.map(userWord => {
    return {
      id: userWord.id,
      content: userWord.content,
      timestamp: userWord.createdAt
    };
  });
}

module.exports = utils;