const axios = require('axios');

const BOT_SERVER_HOST = process.env.BOT_SERVER_HOST;

const format = require('./format');

exports.CONSTANTS = {
  TYPE: {
    MEDI: 'medi',
    HU: 'hu',
    JUNGDAM: 'jungdam',
    JINSU: 'jinsu',
    STUDENT_HALL: 'student_hall'
  }
}

exports.sendMessage = async ({ message }) => {
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

exports.toggleUseDb = async ({ type }) => {
  try {
    const res = await axios({
      method: 'put',
      url: `${BOT_SERVER_HOST}/api/menu_domitory/${type}/use_db`,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (err) {
    throw format.axios.error(err);
  }
}

exports.getUseDbState = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: `${BOT_SERVER_HOST}/api/menu_domitory/use_db`,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data.result;
  } catch (err) {
    throw format.axios.error(err);
  }
}
