exports.wrapAsync = fn => (req, res, next) => {
  return fn(req, res, next).catch(next);
}

exports.unauthenticated  = () => ({
  code: 401,
  message: 'unauthenticated'
});