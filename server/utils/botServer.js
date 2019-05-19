const axios = require('axios');

const BOT_SERVER_HOST = process.env.BOT_SERVER_HOST;

const format = require('./format')

const botServer = {};

botServer.sendMessage = async ({ message }) => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BOT_SERVER_HOST}/message`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        userRequest: {
          user: {
            id: 'management_test_user'
          },
          utterance: message
        }
      }
    });
    return res.data;
  } catch (err) {
    throw format.axios.error(err);
  }
};

module.exports = botServer;
