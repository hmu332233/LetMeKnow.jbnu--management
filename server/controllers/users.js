const Users = require('../models/users');

const { format } = require('../utils');

exports.create = async function (req, res, next) {
  const { id, pw, level } = req.body;
  try {
    const isSuccess = await Users.create({ id, pw, level });
    res.json(format.response.successTrue(isSuccess));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}