const MediMenusModule = require('../models/mediMenus');
const JinsuMenusModule = require('../models/jinsuMenus');
const StudentHallMenusModule = require('../models/studentHallMenus');
const JungdamMenusModule = require('../models/jungdamMenus');
const HuMenusModule = require('../models/huMenus');

const { format } = require('../utils');

exports.getMediMenus = async function (req, res, next) {
  try {
    const result = await MediMenusModule.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
}

exports.getJinsuMenus = async function (req, res, next) {
  try {
    const result = await JinsuMenusModule.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getStudentHallMenus = async function (req, res, next) {
  try {
    const result = await StudentHallMenusModule.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getJungdamMenus = async function (req, res, next) {
  try {
    const result = await JungdamMenusModule.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getHuMenus = async function (req, res, next) {
  try {
    const result = await HuMenusModule.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};