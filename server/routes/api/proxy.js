const express = require('express');
const router = express.Router();

const { format, botServer } = require('../../utils');

router.post('/message', async (req, res, next) => {
  const { message } = req.body;
  try {
    const result = await botServer.sendMessage({ message });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
});

module.exports = router;