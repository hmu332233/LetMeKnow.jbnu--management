const utils = {};

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