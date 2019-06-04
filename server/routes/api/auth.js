const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.post('/register', controller.auth.create);
router.post('/signin', controller.auth.signin);

module.exports = router;