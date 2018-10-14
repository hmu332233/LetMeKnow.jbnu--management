const mongoose = require('mongoose');

/*
*  User
*  id {string} 카카오톡에서 넘어온 유저 고유의 id
*/
// schema
const userSchema = mongoose.Schema({
  id: { 
    type: String,
    required:[true, 'User - id is required!'],
    unique: true
  }
});

// model & export
const Users = mongoose.model('users', userSchema);
module.exports = Users;