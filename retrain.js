var brain = require('brainjs');
var data = require('./data.js')
var fs = require('fs');
var net = new brain.NeuralNetwork();
net.train(data, {
  hiddenLayers: [100,100,100,100,100,100],
  errorThresh: 0.0005,  // error threshold to reach
  iterations: 17000,   // maximum training iterations0
  log: true,           // console.log() progress periodically
  logPeriod: 10,       // number of iterations between logging
  learningRate: 0.5,  // learning rate
});
var json = net.toJSON();
fs.writeFileSync('./net.js','module.exports = '+JSON.stringify(json));
require('./monitor')(net,function(){});
