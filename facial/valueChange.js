const notifier = require('node-notifier');
const path = require('path');


module.exports = function(c){
	if(c.ergo == false){
		notifier.notify({
		  title: 'Ergomyonic Alert',
		  message: "Hey! Correct your posture! It's for your own good!",
		  icon: path.join(process.cwd(),'./duckSombrero.png'), // Absolute path (doesn't work on balloons)
		  sound: false, // Only Notification Center or Windows Toasters
		  time:300,
		  wait: false // Wait with callback, until user action is taken against notification
		});

	} else {
		notifier.notify({
		  title: 'Ergomyonic Alert',
		  message: "Good job correcting your posture :D",
		  icon: path.join(process.cwd(),'./duckSombrero.png'), // Absolute path (doesn't work on balloons)
		  sound: true, // Only Notification Center or Windows Toasters
		  time:1000,
		  wait: false // Wait with callback, until user action is taken against notification
		}, function (err, response) {
		  // Response is response from notification
		});
	}

	if(c.ergo){
		console.log('Your posture is ergonomically correct');
	} else {
		console.log('Your posture is ergonomically incorrect');
	}
}