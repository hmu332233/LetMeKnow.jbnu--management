const { db } = require('./info');

exports.getLatestMenu = () => {
  return db.jinsu_menus
    .findOne({})
    .sort({ _id: -1 })
    .lean();
};
