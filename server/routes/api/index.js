const express = require('express');
const router = express.Router();

router.use('/v1/auth', require('./users'));
router.use('/v1/user_words', require('./userWords'));
router.use('/v1/bot', require('./bot'));
router.use('/v1/menus', require('./menus'));

module.exports = router;