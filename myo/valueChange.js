var Myo = require('myo');
module.exports = function(c){
	if(c.ergo === false){
		require('./instance').myo.vibrate('medium');	
	}
	if(c.ergo){
		console.log('Myo says your hands are ergonomically correct');
	} else {
		console.log('Myo says your hands are ergonomically incorrect');
	}
}