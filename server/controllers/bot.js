const { format, botServer } = require('../utils');

exports.sendMessage = async (req, res, next) => {
  const { message } = req.body;
  try {
    const result = await botServer.sendMessage({ message });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.toggleUseDb = async (req, res, next) => {
  const { type } = req.body;
  try {
    const result = await botServer.toggleUseDb({ type });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.getUseDbState = async (req, res, next) => {
  try {
    const result = await botServer.getUseDbState();
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};
