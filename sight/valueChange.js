const notifier = require('node-notifier');
const path = require('path');
module.exports = function(){
	console.log('Spending a lot of time on the computer...')
	notifier.notify({
	  title: 'Ergomyonic Alert',
	  message: "You've been looking at the computer for a long time.",
	  icon: path.join(process.cwd(),'./duckSombrero.png'), // Absolute path (doesn't work on balloons)
	  sound: true, // Only Notification Center or Windows Toasters
	  time:1500,
	  wait: false // Wait with callback, until user action is taken against notification
	}, function (err, response) {
	  // Response is response from notification
	});
}