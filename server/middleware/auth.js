const service = require('../services');
const Users = require('../models/users');

const { error } = require('../utils');

exports.check = () => async (req, res, next) => {
  const token = req.cookies['x-access-token'] || req.query.token;
  const { isVerified, _id } = service.auth.verifyToken({ token });
  if (!isVerified) {
    throw error.unauthenticated();
  }
  const user = await Users.findBy_id({ _id });
  req.userData = user;
  next();
}