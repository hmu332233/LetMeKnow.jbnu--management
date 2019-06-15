const UserWords = require('../models/userWords');
const { format } = require('../utils');

exports.search = async function (req, res, next) {
  const { user, content } = req.query;
  try {
    const query = { 
      id: user,
      content,
    };
    const result = await UserWords.find(query, null, true);
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}

exports.findByDateAndGroupByContent = async function (req, res, next) {
  const { start, end } = req.query;
  try {
    const result = await UserWords.findByDateAndGroupByContent({ start, end });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  } 
}

exports.findByDate = async function (req, res, next) {
  const { start, end } = req.query;
  try {
    const result = await UserWords.findByDate({ start, end });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}

exports.create = async function (req, res, next) {
  const { id, content } = req.body;
  try {
    const result = await UserWords.create({ id, content });
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}