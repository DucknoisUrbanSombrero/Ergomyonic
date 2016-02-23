var PythonShell = require('python-shell');
var fs = require('fs');
var prompts = require('../prompts');
module.exports = function(cb){
	var cb1 = function(){
		runScript('Slouch forward to a point you may naturally find yourself.Hold the position until instructed otherwise, turn your head a slightly.',
			'./facial/bad1.txt',cb2);
	}
	var cb2 = function(){
		runScript('Slouch backwards to a point you may naturally find yourself. Hold the position until instructed otherwise,turn your head a slightly.',
			'./facial/bad2.txt',cb);
	}
	runScript('Get in your ideal posture position and hit enter. Hold the position until instructed otherwise,turn your head a slightly.',
		'./facial/good.txt',cb1);
	
}

function runScript(message, path,cb){
	prompts.genericPrompt(message,
		'press enter to continue',
		function(){
			var pyshell = new PythonShell('facial/calibrate.py');
			pyshell.on('message', function (message) {
			  // received a message sent from the Python script (a simple "print" statement) 
			  if(message.trim() !== "Camera dropped frame!"){
			  	fs.writeFileSync(path,message)
			  }
			});
			 
			// end the input stream and allow the process to exit 
			pyshell.end(function (err) {
			  if (err) throw err;
			  cb();
			});	
		}
	);
			
}
