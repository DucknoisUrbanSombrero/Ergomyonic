var brain = require('brainjs');
var Myo = require('myo');
var fs = require('fs')
var net;
module.exports = function(cb,callibrate){
	Myo.on("connected", function(data, timestamp) {
			require('./instance').setMyo(this);
		if(callibrate){
			require('./generateData')(function(trainingData){
				net = require('../train')(trainingData,{layers:[100,100,100,100,100,100]});
				var json = net.toJSON();
				fs.writeFileSync('./myo/data.js','module.exports = '+JSON.stringify(trainingData));
				fs.writeFileSync('./myo/net.js','module.exports = '+JSON.stringify(json));
				cb(net);
			});
		} else {
			net = new brain.NeuralNetwork();
			net.fromJSON(require('./net'));
			cb(net);
		}
	})
	Myo.connect("com.sitepoint.myoarmbandcontroller");	
}


