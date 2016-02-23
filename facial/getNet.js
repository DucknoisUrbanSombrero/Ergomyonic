var brain = require("brainjs");
var net;
module.exports = function(cb,callibrate){
	console.log('asdf')
	if(callibrate){
		var runCalibration = require('./runCalibration');
		var getData = require('./getDataFromTxt');
		var train = require('../train');
		runCalibration(function(){
			var data = getData();
			net = train(data,{layers:[100,100,100,100,100,100]});
			cb(net);
		});
	}else {
		net = new brain.NeuralNetwork();
		net.fromJSON(require('./net.js'));
		cb(net);
	}
		
}