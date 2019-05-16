const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/', controller.userWords.search);
router.get('/date/group', controller.userWords.findByDateAndGroupByContent);
router.get('/date', controller.userWords.findByDate);

router.post('/', controller.userWords.create);

module.exports = router;