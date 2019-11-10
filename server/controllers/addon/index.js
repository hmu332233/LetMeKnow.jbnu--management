const { format } = require('./../../utils');

const QuickReplies = require('./../../models/quickReplies');

exports.getQuickReplies = async (req, res, next) => {
  try {
    const result = await QuickReplies.findByDate({ date: new Date() });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};
