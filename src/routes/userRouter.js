var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var userRouter = express.Router();
var objectId = require('mongodb').ObjectID;
var passport = require('passport');
var path = require('path');

var router = function(){

    var username = {};
    var orders = [{}];
    var menu =[
    {
        name: 'pizza',
        price: 15,
        active: false
    },    {
        name: 'pizza',
        price: 15,
        active: false
    },    {
        name: 'pizza',
        price: 15,
        active: false
    },    {
        name: 'pizza',
        price: 15,
        active: false
    }
    ];

    userRouter.route('/')
    .get(function (req,res) {
        res.render('welcome',{title:'Welcome !!'});
    });

    userRouter.route('/Signup')
    .get(function (req,res) {
        res.render('signup',{title: 'Sign Up !!!'});
    });

    userRouter.route('/auth/signup')
    .post(function (req,res) {
      console.log(req.body);
      var url = 'mongodb://localhost:27017/orderApp';
      mongodb.connect(url,function(err,db){
        var collection = db.collection('userphone');
        var user = {
            username: req.body.phone,
            password: req.body.password,
            orders: orders 
        };
        collection.insert(user,function (err, results) {
            req.login(results,function () {
                res.redirect('/menu');
            })
        })
        console.log('auth signin');
    })
  });

    userRouter.route('/auth/signin')
    .post(passport.authenticate('local',{
        failureRedirect: '/'
            }), function (req,res) {
        console.log("in sign in ");
        username = req.body;
        res.redirect('/menu');
    });

    userRouter.route('/menu')
    .all(function(req,res,next){
        if(!req.user){
            res.redirect('/');
        }
        next();
    })
    .get(function(req, res) {
        res.sendFile(path.resolve( __dirname + '/../views/userOrder.html'));
    });

    userRouter.route('/api/menu')
    .get(function (req,res) {
        res.json(menu);
    });

    userRouter.route('/api/username')
    .get(function (req,res) {
        console.log('form userrouter ');
        console.log(username);
        res.json(username);
    });
    return userRouter;
}

module.exports = router;