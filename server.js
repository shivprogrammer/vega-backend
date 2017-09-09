'use strict';

const express = require('express');
const debug = require('debug')('vega:server');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./route/user-route.js');
const errors = require('./lib/error-middleware.js');

dotenv.load();

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI);

let morganFormat = process.env.PRODUCTION ? 'common' : 'dev';

app.use(cors());
app.use(morgan(morganFormat));
app.use(userRouter);
app.use(errors);

app.get('/', (req, res) => {
  res.send('you are in the right place homie');
});

app.get('/home', (req, res) => {
  res.send('should load the damn main page');
});

app.listen(PORT, () => {
  debug(`Server is running at: ${PORT}`);
});

//MONGODB_URI='mongodb://localhost/vega'
