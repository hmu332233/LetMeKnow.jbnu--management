const moment = require('moment');
const _ = require('lodash');

const axios = require("axios");

const BOT_SERVER_HOST = process.env.BOT_SERVER_HOST;

const BotServerApi = {
  setBackupData: () => {},
  getBackupData: async () => {},
  sendMessage: async ({ message }) => {
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
  }
};

module.exports = BotServerApi;
