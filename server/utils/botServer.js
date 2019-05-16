const axios = require('axios');

const BOT_SERVER_HOST = process.env.BOT_SERVER_HOST;

const botServer = {};

botServer.sendMessage = async ({ message }) => {
  const res = await axios({
    method: 'post',
    url: `${BOT_SERVER_HOST}/message`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      user_key: 'management_test_user',
      content: message
    }
  });

  return res.data;
};

module.exports = botServer;
