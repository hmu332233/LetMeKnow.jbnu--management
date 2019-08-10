const { db } = require('./info');

exports.getLatestMenu = () => {
  return db.student_hall_menus
    .findOne({})
    .sort({ _id: -1 })
    .lean();
};
