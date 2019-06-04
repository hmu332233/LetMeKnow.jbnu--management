exports.handle = (err, req, res, next) => {
  const code = err.code || 500;
  const message = err.message || 'error';
  res.status(code).json(message);
}