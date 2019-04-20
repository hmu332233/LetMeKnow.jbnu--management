const express = require('express');
const router = express.Router();

const MediMenusModule = require('../../models/MediMenus');

const utils = require('../../utils');

router.get('/medi', async (req, res, next) => {
  try {
    const result = await MediMenusModule.getLatestMenu();
    res.json(utils.resultFormat.successTrue(result));
  } catch (err) {
    res.json(utils.resultFormat.successFalse(err, err.message));
  }
});

module.exports = router;