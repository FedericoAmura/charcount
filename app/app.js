let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let swaggerUI = require('swagger-ui-express');
let swaggerDocument = require('./doc/count.json');

let root = require('./routes/root');
let count = require('./routes/count');

process.title = 'charcount';
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// valid routes go here
app.use('/',root);
app.use('/count',count);
app.use('/count-doc',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
