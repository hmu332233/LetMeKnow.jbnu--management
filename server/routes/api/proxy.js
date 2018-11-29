const express = require('express');
const router = express.Router();

const utils = require('../../utils');

router.get('/', async (req, res, next) => {
  const { user, content } = req.query;
  try {
    const query = { 
      id: user,
      content,
    };
    const result = await UserWordsModule.find(query, null, true);
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

module.exports = router;