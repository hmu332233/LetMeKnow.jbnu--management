const jwt = require('jsonwebtoken');

const Users = require('../models/users');

const { format } = require('../utils');

exports.verifyAndReturnToken = async function ({ id, pw }) {
  const { user, isVerified } = await Users.verify({ id, pw });
  if (!isVerified) {
    return { success: false };
  }
  const secret = JWT_SECRET;
  const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '1d' });
  return { success: true, token };
}