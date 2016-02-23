var prompt = require('prompt')
prompts ={
	callibrate:function(cb){
		genericPrompt(
			'Would you like to calibrate any of your Ergomyonic monitors?',
			'[y OR any other key]',
			function(r){
				if(r === "y"){
					prompts.callibrateWhat(cb)
				}else {
					 cb('');
				}
			}
		);
	},
	callibrateWhat:function(cb){
		genericPrompt(
			"What would you like to calibrate? Your options are: \n\t0 - callibrate myo" +
			"\n\t1 - calibrate posture sensor\n\t2 - calibrate sight timer\n\t3 - callibrate all\nPlease note you can press any combination of these (seperate by spaces)",
			"[0,1,2,3]",
			cb
		);
	},
	genericPrompt:genericPrompt,
	monitor:function(cb){
		genericPrompt(
			"What would you like to monitor you? Your options are: \n\t0 - myo" +
			"\n\t1 - posture sensor\n\t2 - sight timer\n\t3 - all\nPlease note you can press any combination of these (seperate by spaces)",
			"[0,1,2,3]",
			cb
		)
	},
	calibrateSight:function(cb){
		genericPrompt(
			'How often would you like to be notified that you should spend a few minutes looking away from the commputer? (The default is 30 minutes). The last value entered will be considered seconds, the second to last minutes and so on. Seperate by spaces',
			'[...mm ss]',
			cb
		);
	}
};
function genericPrompt(message,p,cb){
	console.log('\n');
	console.log(message)
	prompt.get(p,function(err, result){
		if(err)throw err
		cb(result[p])
	})
}
module.exports = prompts;