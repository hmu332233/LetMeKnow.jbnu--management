const { db } = require('./info');

exports.getLatestMenu = () => {
  return db.jungdam_menus
    .findOne({})
    .sort({ _id: -1 })
    .lean();
};
