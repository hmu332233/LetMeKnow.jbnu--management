const UserWords = require('../models/userWords');
const { format } = require('../utils');

exports.search = async (req, res, next) => {
  const { user, content } = req.query;
  try {
    const query = {
      id: user,
      content,
    };
    const result = await UserWords.find(query, null, true);
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.findByDateAndGroupByContent = async (req, res, next) => {
  const { start, end } = req.query;
  try {
    const result = await UserWords.findByDateAndGroupByContent({ start, end });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.findByDate = async (req, res, next) => {
  const { start, end } = req.query;
  try {
    const result = await UserWords.findByDate({ start, end });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const { id, content } = req.body;
  try {
    const result = await UserWords.create({ id, content });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};
