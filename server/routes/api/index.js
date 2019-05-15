const express = require('express');
const router = express.Router();

router.use('/v1/user_words', require('./userWords'));
router.use('/v1/proxy', require('./proxy'));
router.use('/v1/menus', require('./menus'));

module.exports = router;