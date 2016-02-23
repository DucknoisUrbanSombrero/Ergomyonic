var getNet = require('./getNet');
var fs = require('fs');
var net;
var monitor = require('./monitor');
var brain = require('brainjs');
// getNet(function(nnet){
// 	net = nnet;
// 	fs.writeFileSync('./facial/net.js','module.exports = '+ JSON.stringify(net));
// 	monitor(net,function(){});
// });
net = new brain.NeuralNetwork();
net.fromJSON(require('./net'));
monitor(net,function(){

});