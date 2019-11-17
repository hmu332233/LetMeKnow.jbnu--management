const { format } = require('./../../utils');

const QuickReplies = require('./../../models/quickReplies');

exports.addQuickReply = async (req, res, next) => {
  const { label, messageText, start, end } = req.body;
  try {
    const result = await QuickReplies.add({
      label,
      messageText,
      start: start && new Date(start),
      end: end && new Date(end),
    });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.getQuickReplies = async (req, res, next) => {
  try {
    const result = await QuickReplies.findByDate({ date: new Date() });
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};
