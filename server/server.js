const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Database
const mongoUrl = process.env.MONGO_DB;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
   console.log('DB connected!');
});
db.on('error', (err) => {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});

// 개발용 log
const node_env = process.env.NODE_ENV || 'development';
if(node_env === 'development'){
	app.use(logger('dev'));
	app.use(function (req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
		next();
  });
}

// API
app.use('/api/user_words', require('./routes/api/userWords'));


// Server
const port = 3000;
app.listen(port, () => {
  console.log('listening on port:' + port);
});