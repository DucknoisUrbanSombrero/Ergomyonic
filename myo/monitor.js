var Myo = require("myo");
var net, changeCall;
var oldGood,unpaused = true;
var count = 0;
function startMonitor(){
	Myo.on('imu', function(data) { 
			input = {};
			addToObj(data.orientation,input);
			var output = net.run(input);
			if(oldGood !== output.good >=0.5 || count > 500){
				count = 0;
				oldGood = output.good >=0.5;
				changeCall({
					changed:'myo',
					ergo:output.good >=0.5
				});
			} else {
				if(oldGood === false){
					count++;
				}
			}
	});
}

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
module.exports = function(nnet, valueChangeCB,callibool){
	net = nnet;
	if(!callibool){
		Myo.connect("com.sitepoint.myoarmbandcontroller");	
	}
	startMonitor();
	changeCall = valueChangeCB;
}
Myo.on('double_tap',function(){
	if(unpaused){
		Myo.off('imu');
	}else {
		startMonitor();
	}
	console.log(unpaused? "myo pause":"myo unpaused");
	unpaused = !unpaused;
});