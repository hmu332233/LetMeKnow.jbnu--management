const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.post('/register', controller.users.create);
router.post('/signin', controller.users.signin);

module.exports = router;