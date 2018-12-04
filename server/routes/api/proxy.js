const express = require('express');
const router = express.Router();

const utils = require('../../utils');
const BotServerApi = require('../../modules/BotServerApi');

router.post('/message', async (req, res, next) => {
  const { message } = req.body;
  try {
    const result = await BotServerApi.sendMessage({ message });
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

module.exports = router;