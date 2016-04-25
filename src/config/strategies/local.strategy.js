// var passport = require('passport');
// LocalStrategy = require('passport-local').Strategy,
// userModel =  require('../models/model_user.js');

// // TODO if a user doesn't exist output an error msg and dont procced -dontt chch for the password-.
// module.exports = function () {

// 	passport.use(new LocalStrategy(
// 	function(username,password,done){

// 		userModel.findOne({username:username}).exec(function(err, user){
// 			if(user){
// 				done(null,user);
// 			}
// 			else{
// 				done(null,false);
// 			}
// 		})
// 	})
// 	app.use(passport.initialize());
// 	app.use(passport.session());
// 	passport.serializeUser(function(user,done) {
// 		done(null, user);		// body...
// 	});
// 	passport.deserializeUser(function(user,done) {
// 		done(null, user);		// body...
// 	});
// 	require('./strategies/local.strategy.js')();


// 	)};
// 		if (x===8){
// 			console.log('Right !!');
// 			done(null, false);
// 		}
// 		collection.findOne({username: username},function(err,results,mess){
// 			console.log(results);
// 			if (err) { done(err); }
// 			if (results === 'null') { done(null, false); }
// 			if(!results.username) { done(null, false); }
// 			if (!results.username === username) { done(null, false); }				
// 			if (!results.password === password) { done(null, false); }
// 			done(null, results);
// 		}
// 		);
// 	})
// })
// };