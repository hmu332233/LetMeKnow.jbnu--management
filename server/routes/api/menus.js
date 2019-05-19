const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/medi', controller.menus.getMediMenus);
router.get('/jinsu', controller.menus.getJinsuMenus);
router.get('/studentHall', controller.menus.getStudentHallMenus);
router.get('/jungdam', controller.menus.getStudentHallMenus);
router.get('/hu', controller.menus.getHuMenus);

module.exports = router;