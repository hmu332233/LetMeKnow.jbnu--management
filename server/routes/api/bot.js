const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.get('/use_db', controller.bot.getUseDbState);
router.post('/message', controller.bot.sendMessage);
router.put('/use_db', controller.bot.toggleUseDb);

module.exports = router;
