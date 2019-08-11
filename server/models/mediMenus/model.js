const { db } = require('./info');

exports.getLatestMenu = () => {
  return db.medi_menus
    .findOne({})
    .sort({ _id: -1 })
    .lean();
};
