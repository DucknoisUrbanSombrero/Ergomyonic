var brain = require('brainjs');

module.exports = function(data,params){
	var net = new brain.NeuralNetwork();
	net.train(data, {
	  hiddenLayers: params.layers,
	  errorThresh: params.thresh || 0.0005,  // error threshold to reach
	  iterations:params.iterations || 15000,   // maximum training iterations0
	  log: true,           // console.log() progress periodically
	  logPeriod: 10,       // number of iterations between logging
	  learningRate: params.learningRate || 0.35,  // learning rate
	});
	return net;
}