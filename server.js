const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Database
// const mongoUrl = process.env.MONGO_DB;
// mongoose.Promise = global.Promise;
// mongoose.connect(mongoUrl, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.once('open', () => {
//    console.log('DB connected!');
// });
// db.on('error', (err) => {
//   console.log('DB ERROR:', err);
// });

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

// API
app.get('/api', (req, res) => {
  res.send('hello, server!');
})

// Server
const port = 3000;
app.listen(port, () => {
  console.log('listening on port:' + port);
});