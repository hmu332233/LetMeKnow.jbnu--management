const express = require('express');
const router = express.Router();

const { format } = require('../../utils');
const BotServerApi = require('../../modules/BotServerApi');

router.post('/message', async (req, res, next) => {
  const { message } = req.body;
  try {
    const result = await BotServerApi.sendMessage({ message });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
});

module.exports = router;