var timers = require('timers');
module.exports = function(sec,cb){
	timers.setInterval(cb,sec);
}