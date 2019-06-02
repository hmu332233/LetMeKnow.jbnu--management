const express = require('express');
const router = express.Router();
const controller = require('../../controllers');

const { error } = require('../../utils');
const middleware = require('../../middleware');

router.get('/', controller.userWords.search);
router.get('/date/group', controller.userWords.findByDateAndGroupByContent);
router.get('/date', error.wrapAsync(middleware.auth.check, controller.userWords.findByDate));

router.post('/', controller.userWords.create);

module.exports = router;