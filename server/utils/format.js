const format = {};

format.response = {
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

format.mongo = {
  error: (err) => ({ 
    name: 'MongoError', 
    code: err.code, 
    message: err.errmsg 
  })
}

module.exports = format;