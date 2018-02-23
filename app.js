require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');

const index = require('./controllers/index')

const app = express();

mongoose.connect(process.env.MONGODB_URI); 

const db = mongoose.connection 

db.on('open', () =>{
  console.log('You up!! Connected to DD!!! ')
})

db.on('error', (err) => {
  console.log(err)
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const cartController = require('./controllers/cartController')

app.use('/', index)
app.use('/users', userController)
app.use('/users/:userId/index', index)
app.use('/cart', cartController)
app.use('/products', productController)
app.use('/products/:productId/users', userController)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app
