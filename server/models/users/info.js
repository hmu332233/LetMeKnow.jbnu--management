const mongoose = require('mongoose');

const CONSTANTS = {};

// schema
const schema = mongoose.Schema({
  id: { 
    type: String,
    required:[true, 'User - id is required!'],
    unique: true
  },
  pw: { 
    type: String,
    required:[true, 'User - pw is required!']
  }
});

const model = mongoose.model('user', schema);

module.exports = {
  db: { users: model },
  CONSTANTS
};