var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var clientRouter = express.Router();
var objectId = require('mongodb').ObjectID;
var passport = require('passport');
var path = require('path');

var router = function(){

    var menu = [
    {
        name: 'Burger',
        price: 8,
        active:false
    },{
        name: 'Cheese Burger',
        price: 12,
        active:false
    },{
        name: 'Double cheese burger',
        price: 15,
        active:false
    },{
        name: 'Pizza with Burger',
        price: 20,
        active:false
    }
    ];


    clientRouter.route('/')
    .get(function (req,res) {
        res.render('signinClient',{title: 'Sign in to recive More orders!'});
    });

    clientRouter.route('/signup')
    .get(function (req,res) {
        res.render('signupClient',{title: 'Increase your profit! Join US!'});
    });

    clientRouter.route('/signup/auth/signup')
    .post(function (req,res) {
        console.log(req.body);
        req.login(req.body,function () {
            res.redirect('/client/profile');
            // body...
        })
    });

    clientRouter.route('/profile')
    .post(function (req,res) {
        res.json(req.user);
    });

    clientRouter.route('/orders')
    .get(function (req,res) {
        res.sendFile(path.resolve( __dirname + '/../views/clientOrder.html'));
    });

    clientRouter.route('/ordersUpdate')
    .get(function (req,res) {
        res.json(menu);
        console.log('client sent to interface');
    });        

    var sendToInterface = function () {
        console.log('in sendToInterface');
    }

    clientRouter.route('/api/order/')
    .post(function (req,res) {
        console.log('client recived updated order list');
        res.redirect('/client/ordersUpdate');
        // sendToInterface();
    });

    return clientRouter;
}

module.exports = router;