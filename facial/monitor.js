var net,cb,oldGood;
module.exports = function(nnet, valueChangeCB){
	net = nnet;
	cb = valueChangeCB;
	monitor();
}
var oldGood = true;
var count = 0;
var PythonShell = require('python-shell');
function monitor(){
	var pyshell = new PythonShell('facial/stream.py');
	pyshell.on('message', function (message) {
	  // received a message sent from the Python script (a simple "print" statement) 
	  var input = JSON.parse(message);
	  input[0] = input[0]/80000
	  input[1] = input[1]/500
	  var output = net.run(input);
	  if((oldGood !== output[0] > 0.5) && (!oldGood || count < 500)){
	  	  oldGood = output[0] > 0.5
		  cb({
		  	changed:'posture',
		  	ergo: output[0] > 0.5
		  });	
	  } else {
	  	count++;
	  }
	  
	});
	 
	// end the input stream and allow the process to exit 
	pyshell.end(function (err) {
	  if (err) throw err;
	});	
	
}