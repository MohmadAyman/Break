var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var router = express.Router();
var session = require('express-session');

module.exports = function(app,io,config){


	app.use(express.static('public'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(session({secret: 'secret',  
		saveUninitialized: true,
		resave: true}));
	app.use(passport.initialize());
	app.use(passport.session());


	app.set('views',config.rootPath+'/src/views');

	app.set('view engine', 'ejs');

// TODO
// app.use(express.static(__dirname + '/public'));
// app.get('/partials/:partialPath', function(req,res){
//     res.render('/partials/'+ req.params.partialPath);
// });

// require(config.rootPath+'/src/config/passport.js')(app);

var userRouter = require(config.rootPath+'/src/routes/userRouter.js')();
var clientRouter = require(config.rootPath+'/src/routes/clientRouter.js')(io);
var adminRouter = require(config.rootPath+'/src/routes/adminRouter.js');

app.get('/aangular',function (req,res) {
	res.render('userMain');
    // body...
});
// app.use('/Admin',adminRouter);

app.use('/Client',clientRouter);

app.use('/',userRouter);
}