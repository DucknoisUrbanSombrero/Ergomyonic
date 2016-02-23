var prompts = require('../prompts');
var secondConversions = [86400,3600,60,1];
var fs = require('fs');
module.exports = function(cb,calibrate){
	if(calibrate){
		prompts.calibrateSight(function(r){
			var time = r.trim().split(' ');
			var at = secondConversions.length - time.length; 
			var j = 0;
			var secs =0;
			for(var i = at; i < secondConversions.length; i++){
				secs+= time[j] * secondConversions[at] * 1000;
				at++;
			}
			fs.writeFileSync('./sight/data.js','module.exports = '+ secs);
			cb(secs);
		})
	} else {
		cb(require('./data.js'));
	}
}