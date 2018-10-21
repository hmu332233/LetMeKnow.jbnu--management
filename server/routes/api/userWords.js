const express = require('express');
const router = express.Router();

const UserWordsModule = require('../../models/UserWords');

router.get('/', (req, res, next) => {
});

router.post('/', async (req, res, next) => {
  const { id, content } = req.body;
  const result = await UserWordsModule.create({ id, content });
  res.json({
    result: true,
    data: result
  });
});

module.exports = router;