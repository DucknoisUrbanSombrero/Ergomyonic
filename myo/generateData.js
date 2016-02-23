var Myo = require("myo");
var prompt = require('prompt');
var trainingData;
var emg;
var callBack;
Myo.on('emg', function(data){
	emg = data;	
});
function addToObj(arr, obj, pref){
	Object.keys(arr).forEach(function(k){
       		input[(pref || '')+k] = arr[k];
       });
}
function normalize(arr,norm){
	Object.keys(arr).forEach(function(k){
       		arr[k] = (arr[k]+norm)/(2*norm);
     });
}

function collectData(type,length,cb){
	Myo.on('imu', function(data) { 
		input = {};
		addToObj(data.orientation,input);
		trainingData.push({input:input, output:{'good':type}});
		console.log(length - trainingData.length);
		emg = undefined;
		if(length<trainingData.length){
			Myo.off('imu');
			cb();
		}
	});
}

var instructions = ["For the first part of the callibration, please please you're hands in the ergonomically correct on the keyboard. You're wrists should be straight, if you are unsure of how to do this, there are plenty of online rescourses that explain it further. Please hold the position and keep timing until you are told to stop.",
"You now need to do undergo another roudn of typing, this time, please place youre hands in an ergonomically incorrect position (your wrists should rest on the desk/laptop",
"One last time, please place youre hands, again, in an ergonomically incorrect position. This time, raise your arms so you have to bend your wrists down to type."];
var types = [1,0,0]
var lengths = [500,1000,3000]
var onRound;
function instruct(){
	if(onRound < 2){
		console.log(instructions[onRound]);
		 console.log("IT IS IMPORTANT THAT YOU DO NOT PRESS ENTER AGAIN UNTIL TOLD TO DO SO.\n\n\n")
		 prompt.start();
		 prompt.get('Press enter to begin, please have youre hands already in the correct position', function (err, result) {
		 	collectData(types[onRound],lengths[onRound],instruct);
		 	onRound++;
		 });
		}else {
			onRound = 0;
			Myo.off('emg');
			callBack(trainingData);
		}
}
function generateData(cb){
	onRound = 0;
	callBack = cb;
	trainingData = [];
	instruct();
}
module.exports = generateData;