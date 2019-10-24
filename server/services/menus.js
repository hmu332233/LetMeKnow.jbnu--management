const MediMenus = require('../models/mediMenus');
const JinsuMenus = require('../models/jinsuMenus');
const StudentHallMenus = require('../models/studentHallMenus');
const JungdamMenus = require('../models/jungdamMenus');
const HuMenus = require('../models/huMenus');

exports.getMediMenus = async () => {
  const menu = await MediMenus.getLatestMenu();
  return menu;
};

exports.getJinsuMenus = async () => {
  const menu = await JinsuMenus.getLatestMenu();
  return menu;
};

exports.getStudentHallMenus = async () => {
  const menu = await StudentHallMenus.getLatestMenu();
  return menu;
};

exports.getJungdamMenus = async () => {
  const menu = await JungdamMenus.getLatestMenu();
  return menu;
};

exports.getHuMenus = async () => {
  const menu = await HuMenus.getLatestMenu();
  return menu;
};
