const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/quick-replies', controller.addon.getQuickReplies);
router.post('/quick-replies', controller.addon.addQuickReply);

module.exports = router;
