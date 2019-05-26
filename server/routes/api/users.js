const express = require('express');
const router = express.Router();

const controller = require('../../controllers');

router.post('/users', controller.users.create);

module.exports = router;