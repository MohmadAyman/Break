var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var userRouter = express.Router();
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

    var orders = [{}];


    userRouter.route('/')
    .get(function (req,res) {
        res.render('welcome',{title:'Welcome !!'});
    });

    userRouter.route('/signup')
    .get(function (req,res) {
        res.render('signup',{title: 'Sign Up !!!'});
    });

    userRouter.route('/signEdUp')
    .get(function (req,res) {
        res.render('welcome',{title: 'Welcome user'});
    });

    userRouter.route('/auth/signup')
    .post(function (req,res) {
      console.log(req.body);
      var url = 'mongodb://localhost:27017/orderApp';
      mongodb.connect(url,function(err,db){
        var collection = db.collection('userdb');
        var user = {
            username: req.body.username,
            password: req.body.password,
            orders: orders 
        };
        collection.insert(user,function (err, results) {
            req.login(results,function () {
                res.redirect('/signEdUp');
            })
        })
        console.log('auth signin');
    })
  });

    userRouter.route('/auth/signin')
    .post(passport.authenticate('local',{
        failureRedirect: '/'
    }), function (req,res) {
        res.redirect('/menu')
    });

    // userRouter.route('/orders')
    // .all(function(req,res,next){
    //     if(!req.user){
    //         res.redirect('/');
    //     }
    //     next();
    // })
    // .get(function (req,res) {
    //     res.json(req.user);
    // })

    userRouter.route('/menu')
    .all(function(req,res,next){
        // if(!req.user){
        //     res.redirect('/');
        // }
        next();
    })
    // .get(function (req,res) {
    //     res.json(menu); // return all todos in JSON format
    // })
    .get(function(req, res) {
        res.sendFile(path.resolve( __dirname + '/../views/userOrder.html'));
    });

    userRouter.route('/api/todos')
    .get(function (req,res) {
        res.json(menu);
        console.log(req.body);
    });

    return userRouter;
}

module.exports = router;