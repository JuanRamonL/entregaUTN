const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');
const dotenv = require('dotenv');

dotenv.config();

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const nosotrosRouter = require('./routes/nosotros');
const portfolioRouter = require('./routes/portfolio');
const usersRouter = require('./routes/users');

var app = express();

// configuración del motor
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',hbs ({
  extname:'.hbs',
  defaultLayout: 'layout',
  layoutsDir: 'views/layout',
  partialsDir:'views/partials',
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/portfolio', portfolioRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.status == 404)
      err.code = 404 ;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
