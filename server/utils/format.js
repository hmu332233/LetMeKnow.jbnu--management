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

format.axios = {
  error: (err) => ({ 
    name: 'AxiosError', 
    code: err.code, 
    message: err.Error 
  })
}

module.exports = format;