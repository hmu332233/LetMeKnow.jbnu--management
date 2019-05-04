const express = require('express');
const router = express.Router();

const MediMenusModule = require('../../models/MediMenus');
const JinsuMenusModule = require('../../models/JinsuMenus');
const StudentHallMenusModule = require('../../models/StudentHallMenus');
const JungdamMenusModule = require('../../models/JungdamMenus');
const HuMenusModule = require('../../models/HuMenus');

const utils = require('../../utils');

router.get('/medi', async (req, res, next) => {
  try {
    const result = await MediMenusModule.getLatestMenu();
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

router.get('/jinsu', async (req, res, next) => {
  try {
    const result = await JinsuMenusModule.getLatestMenu();
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

router.get('/studentHall', async (req, res, next) => {
  try {
    const result = await StudentHallMenusModule.getLatestMenu();
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

router.get('/jungdam', async (req, res, next) => {
  try {
    const result = await JungdamMenusModule.getLatestMenu();
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

router.get('/hu', async (req, res, next) => {
  try {
    const result = await HuMenusModule.getLatestMenu();
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

module.exports = router;