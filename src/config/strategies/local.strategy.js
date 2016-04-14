var passport = require('passport');
LocalStrategy = require('passport-local').Strategy,
mongodb = require('mongodb').MongoClient;

// TODO if a user doesn't exist output an error msg and dont procced -dontt chch for the password-.
module.exports = function () {

	console.log('in LocalStrategy');

	passport.use(new LocalStrategy({
		username: 'username',
		password: 'password'
	},
	function(username,password,done){
		var url = 'mongodb://localhost:27017/orderApp';
		mongodb.connect(url,function(err,db){
			var collection = db.collection('userphone');
			collection.findOne({username: username},function(err,results,mess){
				console.log(results);
				if(!results)
				{
					done(null, false, {message: 'User does not exist'});
				}
				if(results.password === password){
					var user = results;
					done(null, user,{message: 'ok'});					
				}else{
					done(null, false, {message: 'wrong'});
				}
			}
			);
		})
	})
	)		
};