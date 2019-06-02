exports.handle = (err, req, res, next) => {
  console.log(err)
  const code = err.code || 500;
  const message = err.message || 'error';
  res.status(code).json(message);
}