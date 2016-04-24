var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://mm:00@ds027739.mlab.com:27739/users');


var orderSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    cost:  Number,
    paid: {type: Boolean, default: false},
    client: String
});

var userMongoose = new Schema({
    name: String,
    pass : String,
    isActive: {type: Boolean, default: true},
    ordered: Boolean,
    order: [orderSchema]
});

module.exports = mongoose.model('user',userMongoose);