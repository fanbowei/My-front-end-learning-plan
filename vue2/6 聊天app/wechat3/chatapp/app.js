var createError = require('http-errors');
var ip=require('ip')
var myip=ip.address();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let db=require('./db/db.js')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api=require('./routes/api')
var app = express();

// view engine setup
db.linkmongo().then(()=>{


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.get('/wxapp',function(req,res){
    res.sendFile(__dirname+'/public/vue/index.html')
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',api)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
}).catch((err)=>{
  console.log(err);
})




module.exports = app;
