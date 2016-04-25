var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var userRouter = express.Router();
var objectId = require('mongodb').ObjectID;
var passport = require('passport');
var path = require('path');
var userCtrl =  require('../../public/controllers/userController.js');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'devlopment';
var logger = require('morgan');
var router = function(){
    var username = {};
    var orders = [{}];

    var pizza = [{
        name: 'Margretta',
        price: 12,
        active: false

    },
    {
        name: 'Cheese',
        price: 16,
        active: false
    }];

    var sandwitches = [{
        name: 'Batates',
        price: 10,
        active: false

    },
    {
        name: 'Shwrma',
        price: 7,        
        active: false

    }];
    
    var sori = [{
        name: 'Kofta',
        price: 10,
        active: false

    },
    {
        name: 'Tates',
        price: 6,
        active: false

    }];

    // var menu =[pizza,sandwitches,sori];

    var menu = pizza;

    userRouter.route('/')
    .get(function (req,res) {
        res.render('welcome',{title:'Welcome !!'});
    });

    userRouter.route('/Signup')
    .get(function (req,res) {
        res.render('signup',{title: 'Sign Up !!!', msg:''});
    });

    userRouter.route('/auth/signup')
    .post(function (req,res) {
      userCtrl.create(req,res);
  });

    userRouter.route('/auth/signin')
    .post(function(req,res,next){
        var auth = passport.authenticate('local', function (err,user) {
            if(err){return next(err);}
            if(!user){res.send({sucess:false});}
            req.logIn(user, function(err){
                username = req.body.username;
                res.redirect('/menu');
            })
        })
        auth(req,res,next);
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