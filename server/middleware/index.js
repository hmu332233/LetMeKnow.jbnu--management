const service = require('../services');
const Users = require('../models/users');

const { format } = require('../utils');

exports.verifyTokenAndInjectUserData = async function (req, res, next) {
  const token = req.headers['x-access-token'] || req.query.token;
  const { isVerified, _id } = service.auth.verifyToken({ token });

  if (!isVerified) {
    return res.status(403).json(format.response.successFalse(null, 'not signed'));
  }

  const user = await Users.findBy_id({ _id });
  req.userData = user;
  next();
}