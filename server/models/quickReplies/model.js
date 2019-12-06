const { db, CONSTANTS } = require('./info');

exports.CONSTANTS = CONSTANTS;

exports.findByDate = ({ date = new Date() } = {}) => {
  return db.quick_replies.find({
    start: { $lte: date },
    end: { $gt: date },
  });
};

exports.add = ({ label, action = CONSTANTS.ACTION.MESSAGE, messageText, start, end }) => {
  return db.quick_replies.create({ label, action, messageText, start, end });
};

exports.deleteOne = ({ _id }) => {
  return db.quick_replies.deleteOne({ _id });
};
