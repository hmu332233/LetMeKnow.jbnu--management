const express = require('express');
const router = express.Router();

// const dummy = require('../../data/userwords.json').data;

const UserWordsModule = require('../../models/UserWordsWithMongoDB');
// const UserWordsWithFirebase = require('../../models/UserWordsWithFirebase');

const { format } = require('../../utils');

router.get('/', async (req, res, next) => {
  const { user, content } = req.query;
  try {
    const query = { 
      id: user,
      content,
    };
    const result = await UserWordsModule.find(query, null, true);
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
});

router.get('/date/group', async (req, res, next) => {
  const { start, end } = req.query;
  try {
    const result = await UserWordsModule.findByDateAndGroupByContent({ start, end });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  } 
});

router.get('/date', async (req, res, next) => {
  const { start, end } = req.query;
  try {

    const result = await UserWordsModule.findByDate({ start, end });
    // const result = await UserWordsWithFirebase.findByDate({ start, end });
    // const result = dummy;
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
});

router.post('/', async (req, res, next) => {
  const { id, content } = req.body;

  // 임시
  // UserWordsWithFirebase.set({ id, content });
  try {
    const result = await UserWordsModule.create({ id, content });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
});

module.exports = router;