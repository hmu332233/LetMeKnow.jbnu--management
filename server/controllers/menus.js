const MediMenus = require('../models/mediMenus');
const JinsuMenus = require('../models/jinsuMenus');
const StudentHallMenus = require('../models/studentHallMenus');
const JungdamMenus = require('../models/jungdamMenus');
const HuMenus = require('../models/huMenus');

const { format } = require('../utils');

exports.getMediMenus = async (req, res, next) => {
  try {
    const result = await MediMenus.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getJinsuMenus = async (req, res, next) => {
  try {
    const result = await JinsuMenus.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getStudentHallMenus = async (req, res, next) => {
  try {
    const result = await StudentHallMenus.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getJungdamMenus = async (req, res, next) => {
  try {
    const result = await JungdamMenus.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};

exports.getHuMenus = async (req, res, next) => {
  try {
    const result = await HuMenus.getLatestMenu();
    res.json(format.response.successTrue(result));
  } catch (err) {
    res.json(format.response.successFalse(err, err.message));
  }
};
