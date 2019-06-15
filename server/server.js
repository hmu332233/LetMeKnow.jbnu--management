const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const middleware = require('./middleware');

const config = require('./configs')
JWT_SECRET = config.SECRET;
NODE_ENV = config.NODE_ENV || 'development';

// Database - mongo
const mongoUrl = config.MONGO_DB;
mongoose.Promise = global.Promise;
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.once('open', () => {
  console.log('DB connected!');
});
db.on('error', err => {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});

// 개발용 log
if (NODE_ENV === 'development') {
  const logger = require('morgan');
  app.use(logger('dev'));
  app.use(function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    next();
  });
  app.use('/assets', express.static('dist'));
} else {
  app.use('/assets', express.static('build'));
}

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/view'));
app.use(middleware.error.handle);

// Server
const port = 3000;
app.listen(port, () => {
  console.log('listening on port:' + port);
});
