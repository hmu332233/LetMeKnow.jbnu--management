const { db } = require('./info');

exports.getLatestMenu = () => {
  return db.hu_menus
    .findOne({})
    .sort({ _id: -1 })
    .lean();
};
