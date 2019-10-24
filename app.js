//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');

// var logout = require('./controllers/logout');
// var home = require('./controllers/home');
// var login = require('./controllers/login');
var app = express();

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
//app.use('/login',login);
//app.use('/home',home)

//ROUTER
app.get('/', function(request, response){
	response.send('index page!');
});

app.get('/home', function(request, response){
	response.render('home/index');
});

app.get('/reg', function(request, response){
	response.render('reg/index');
});

app.get('/login', function(request, response){
	response.render('reg/index');
});

app.get('/login', (request, response)=>{
	response.render('login/index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});