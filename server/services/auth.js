const jwt = require('jsonwebtoken');

const Users = require('../models/users');

const { format } = require('../utils');

exports.verifyIdPwAndReturnToken = async ({ id, pw }) => {
  const { user, isVerified } = await Users.verify({ id, pw });
  if (!isVerified) {
    return { isVerified: false };
  }
  const secret = JWT_SECRET;
  const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '1d' });
  return { isVerified: true, token };
};

exports.verifyToken = ({ token }) => {
  try {
    const secret = JWT_SECRET;
    const { _id } = jwt.verify(token, secret);
    return { isVerified: true, _id };
  } catch (err) {
    return { isVerified: false };
  }
};
