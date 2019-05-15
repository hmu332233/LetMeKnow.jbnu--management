const mongoose = require('mongoose');

/*
*  User
*/
// schema
const userSchema = mongoose.Schema({
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

// model & export
const Users = mongoose.model('users', userSchema);
module.exports = Users;