const UserWords = require('../schemas/UserWords');

const utils = require('../utils');

const UserWordsModule = {
  find: async (query = {}, options) => {
    try {
      const userWords = await UserWords.find(query, options);
      return userWords;
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  },
  create: async ({ id, content }) => {
    try {
      const newUserWord = new UserWords({ id, content });
      return await newUserWord.save();
    } catch (err) {
      throw utils.mongoFormat.error(err);
    }
  }
}

module.exports = UserWordsModule;