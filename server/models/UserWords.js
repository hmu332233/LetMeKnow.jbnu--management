const UserWords = require('../schemas/UserWords');

const UserWordsModule = {
  create: async ({ id, content }) => {
    let result;
    try {
      const newUserWord = new UserWords({ id, content });
      result = await newUserWord.save();
    } catch (err) {
      throw Error(err)
    }
    return result;
  }
}

module.exports = UserWordsModule;