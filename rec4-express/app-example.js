var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Create new application object
var app = express();

// view engine setup
// This serves views from /views but make it seem top level
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Logs every request
app.use(logger('dev'));

// Middleware which parses request bodies
// THIS IS IMPORTANT! Without it, you won't be able to
// access req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Parse cookie header and populate req.cookies
app.use(cookieParser());

// Serve static objects from /public but make it seem top level
app.use(express.static(path.join(__dirname, 'public')));

// Use module routes/users, a router() instance
var users = require('./routes/users');
app.use('/users', users);

// Use module routes/index, a router() instance
var index = require('./routes/index');
app.use('/', index);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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

// All modules export an object which can be called
// elsewhere in the code. Here, we export the app
// object
module.exports = app;
