var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://mm:00@ds027739.mlab.com:27739/users');

var requiredStringValidate = [
	function(val){
		var testVal = val.trim();
		return (testVal.length>0)
	},
	'Feild Cannot be left empty'];
var orderSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    cost:  Number,
    paid: {type: Boolean, default: false},
    client: String
});

var userMongoose = new Schema({
    name: {type:String, required:true, validate: requiredStringValidate},
    pass : {type:String,required:true,validate: requiredStringValidate},
    email: {type:String,required:true,validate: requiredStringValidate},
    isActive: {type: Boolean, default: true},
    ordered: {type: Boolean, default: false},
    order: [orderSchema]
});

module.exports = mongoose.model('user',userMongoose);