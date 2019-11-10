const service = require('../services');
const { format } = require('../utils');

exports.getMediMenus = async (req, res, next) => {
  try {
    const result = await service.menus.getMediMenus();
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.getJinsuMenus = async (req, res, next) => {
  try {
    const result = await service.menus.getJinsuMenus();
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.getStudentHallMenus = async (req, res, next) => {
  try {
    const result = await service.menus.getStudentHallMenus();
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.getJungdamMenus = async (req, res, next) => {
  try {
    const result = await service.menus.getJungdamMenus();
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};

exports.getHuMenus = async (req, res, next) => {
  try {
    const result = await service.menus.getHuMenus();
    res.json(format.response.successTrue(result));
  } catch (err) {
    next(err);
  }
};
