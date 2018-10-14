const mongoose = require('mongoose');
/*
*  UserWord
*  id {string} 카카오톡에서 넘어온 유저 고유의 id
*  content {string} 카카오톡에서 넘어온 유저가 입력한 단어
*/
// schema
const userWordSchema = mongoose.Schema({
  id: { 
    type: String,
    required:[true, 'UserWord - id is required!'],
    unique: true
  }
});

// model & export
const UserWords = mongoose.model('user_words', userWordSchema);
module.exports = UserWords;