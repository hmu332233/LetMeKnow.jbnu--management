const express = require('express');
const router = express.Router();

const UserWordsModule = require('../../models/UserWords');

const utils = require('../../utils');

router.get('/', async (req, res, next) => {
  const { user } = req.query;
  try {
    const result = await UserWordsModule.find({ id: user });
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

router.post('/', async (req, res, next) => {
  const { id, content } = req.body;
  try {
    const result = await UserWordsModule.create({ id, content });
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

module.exports = router;