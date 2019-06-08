const Users = require('../models/users');
const service = require('../services');

const { format, error } = require('../utils');

exports.create = async function (req, res, next) {
  const { id, pw, level } = req.body;
  try {
    const isSuccess = await Users.create({ id, pw, level });
    res.json(format.response.successTrue(isSuccess));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}

exports.signin = async function (req, res, next) {
  const { id, pw } = req.body;
  try {
    const { isVerified, token } = await service.auth.verifyIdPwAndReturnToken({ id, pw });
    if (!isVerified) {
      throw error.unauthenticated();
    }
    res.cookie('x-access-token', token);
    res.json(format.response.successTrue(token));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}