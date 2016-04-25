var userModel =  require('../models/model_user.js');

exports.create = function (req, res) {
	var user = new userModel({
		name: req.body.username,
		pass : req.body.password,
		email: req.body.email
	});
	user.save(function (err) {
		console.log(err);
		if(err){
			console.log('error '+ err);
			      res.redirect('/Signup');
		}
		else{
			res.redirect('/');
		}
	});	
};
