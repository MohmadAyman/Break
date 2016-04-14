var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var router = express.Router();

var items = [
{
    title: 'pizza',
    price: '19'
},
{
    title: 'HotDog',
    price: '12'
},
{
    title: 'Pizza Mash',
    price: '14'
}
];

var HorasMenu = [
{
    title: 'Horas pizza',
    price: '19'
},
{
    title: 'Horas HotDog',
    price: '12'
},
{
    title: 'Horas Pizza Mash',
    price: '14'
}
];

var MedoMenu = [
{
    title: 'Medo pizza',
    price: '19'
},
{
    title: 'Medo HotDog',
    price: '12'
},
{
    title: 'Medo Pizza Mash',
    price: '14'
}
];

var ButcherMenu = [
{
    title: 'Butcher pizza',
    price: '19'
},
{
    title: 'Butcher HotDog',
    price: '12'
},
{
    title: 'Butcher Pizza Mash',
    price: '14'
}
];

var restaurants = [
{
    title: 'Horas',
    location: 'CU',
    link: '/Horas',
    menu: HorasMenu
},
{
    title: 'Mido',
    location: 'CU',
    link: '/Mido',
    menu: MedoMenu

},
{
    title: 'Butcher burger',
    location: 'AUC',
    link: '/Bucher',
    menu: ButcherMenu
}
];
var userRouter = require('./src/routes/userRouter.js')();
var clientRouter = require('./src/routes/clientRouter.js')();
var joinRouter = require('./src/routes/join.js');
var orderRouter = require('./src/routes/order.js')();

var port = process.env.PORT | 5000;

var orders = [{}];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'secret',  
   saveUninitialized: true,
   resave: true}));
require('./src/config/passport.js')(app);

app.set('views','./src/views');

app.set('view engine', 'ejs');

app.use('/Client',clientRouter);

app.use('/',userRouter);

app.listen(port,function(err){
    console.log('running on server at port '+ port);
})