var passport = require('passport');
LocalStrategy = require('passport-local').Strategy,
mongodb = require('mongodb').MongoClient;

module.exports = function () {
	// body...

	console.log('in LocalStrategy');

	passport.use(new LocalStrategy({
		username: 'username',
		password: 'password'
	},
	function(username,password,done){
		var url = 'mongodb://localhost:27017/orderApp';
		mongodb.connect(url,function(err,db){
			var collection = db.collection('userdb');
			collection.findOne({username: username},function(err,results){
				if(results.password === password){
					var user = results;
					done(null, user);					
				}else{
					done(null, false, {message: 'wrong password'});
				}
			}
			);
		})
	})
	)		
};