const express = require('express');
const router = express.Router();

router.use('/v1/auth', require('./auth'));
router.use('/v1/user_words', require('./userWords'));
router.use('/v1/bot', require('./bot'));
router.use('/v1/menus', require('./menus'));
router.use('/v1/addon', require('./addon'));

module.exports = router;