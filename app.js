var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var familiesRouter = require('./routes/families');
var meetingsRouter = require('./routes/meetings');
var profilesRouter = require('./routes/profiles');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/families', familiesRouter);
app.use('/meetings', meetingsRouter);
app.use('/profiles', profilesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
