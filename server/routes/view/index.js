const express = require('express');
const router = express.Router();
const path = require('path');

const middleware = require('../../middleware');

router.get(['/login'], (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.sendFile(path.join(__dirname + './../../../dist/index.html'));
  } else {
    res.sendFile(path.join(__dirname + './../../../build/index.html'));
  }
});

router.get(['/', '/usage', '/summary', '/chat', '/settings'], middleware.auth.checkView(), (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.sendFile(path.join(__dirname + './../../../dist/index.html'));
  } else {
    res.sendFile(path.join(__dirname + './../../../build/index.html'));
  }
});

module.exports = router;
