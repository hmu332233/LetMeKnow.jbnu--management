const { db } = require('./info');

exports.findByDate = ({ date = new Date() } = {}) => {
  return db.quick_replies.find({
    start: { $lte: date },
    end: { $gt: date },
  });
};
