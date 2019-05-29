const Users = require('../models/users');
const service = require('../services');

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

exports.signin = async function (req, res, next) {
  const { id, pw } = req.body;
  try {
    const { success, token } = await service.auth.verifyAndReturnToken({ id, pw });
    if (!success) {
      return res.status(403).json(format.response.successFalse(null, 'signin fail'));
    }
    res.json(format.response.successTrue(token));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}