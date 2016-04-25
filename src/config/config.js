var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');


module.exports = {
	devlopment:{
		rootPath: rootPath,
		db:'mongodb://mm:00@ds027739.mlab.com:27739/users',  //Not USED yet
		port:5082
	},
	production:{
		rootPath: rootPath,
		db:'mongodb://mm:00@ds027739.mlab.com:27739/users',
		port:8080
	}
}