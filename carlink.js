const express = require('express');

const app = express();

const home = require('./carlink/routes/HomeRoute');

app.use('/', home);

module.exports = app;