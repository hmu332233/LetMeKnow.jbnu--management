const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/quick-replies', controller.addon.getQuickReplies);

module.exports = router;
