prompts.callibrate(function(r){.
	var callibrations = [
				require('./myo/getNet'),
				require('./facial/getNet')
	];
	function generateCallback(i){
				return function(net){
					nets[i-1] = net;
					next();
				}
	}
	var calibrated = [];
	if(r.indexOf('-1')=== -1){
		if(r.indexOf(callibrations.length) === -1 ){
			for(var i = 0; i < callibrations.length; i++){
				callibrations[i]()
			}

		}
		// generates call back for i corresponding to choices
		
		// // callibrations functions corresponding to i = choice
		// var callibrations = [
		// 	function(){
		// 		callibrations[1](function(net){
		// 			nets[0] = net;
		// 			callibrations[2](generateCallback(2),true);
		// 		},true);
		// 	},
		// 	require('./myo/getNet'),
		// 	require('./facial/getNet')
		// ];
		// var index = -1;
		// function next(){
		// 	index++;
		// 	if(index < options.length){
		// 		var i = Number(options[index]);
		// 		callibrations[i](generateCallback(i),true);
		// 	} else {
		// 		monitor();
		// 	}
		// }
		// next();

	}else{
		monitor()
	}
});
