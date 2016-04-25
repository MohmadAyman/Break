var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'devlopment';

var config = require('/home/mh/ws/node/expressWithNodeOriginl/src/config/config.js')[env];

require('/home/mh/ws/node/expressWithNodeOriginl/src/config/express.js')(app,io,config);

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

server.listen(config.port,function(err){
    console.log('running on server at port '+ config.port);
})