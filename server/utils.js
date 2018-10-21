const _ = require('lodash');

const utils = {};

/*
  cleanObject
  key 값 중에 null 또는 undefined가 있으면 이것을 제거한 새로운 object를 리턴한다.
  
  @param {object} originalObject 
  @return {object} null, undefined가 제거된 새로운 object
*/
utils.cleanObject = (originalObject) => _.pickBy(originalObject, _.identity);

utils.resultFormat = {
  successTrue: (data) => ({
    success: true,
    message: null,
    errors: null,
    data: data
  }),
  successFalse: (err, message) => ({
    success: false,
    message: message,
    errors: err,
    data: null
  })
}

utils.mongoFormat = {
  error: (err) => ({ 
    name: 'MongoError', 
    code: err.code, 
    message: err.errmsg 
  })
}

module.exports = utils;