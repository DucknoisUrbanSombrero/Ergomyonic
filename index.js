var prompts = require('./prompts');
var nets = [];
var callibools = [];
prompts.callibrate(function(r){
	var callibrations = [
		require('./myo/getNet'),
		require('./facial/getNet'),
		require('./sight/getNet')
	];
	var all = r.indexOf(callibrations.length + '') !== -1 
	var i = 0;
	function next(){
		if(i < callibrations.length){
			var calibrate = r.indexOf(''+i) !== -1;
			callibrations[i](function(net){
				nets[i] = net;
				i++;
				next();
			},calibrate || all)
			callibools[i] = calibrate || all;
		} else {
			monitor()
		}			
	}
	next();

});
function monitor(){
	prompts.monitor(function(r){
		var monitors = [
			require('./myo/monitor'),
			require('./facial/monitor'),
			require('./sight/monitor')
		];
		var cbs = [
			require('./myo/valueChange'),
			require('./facial/valueChange'),
			require('./sight/valueChange')
		]
		var all = r.indexOf(monitors.length +'') !== -1;
		for(var i = 0; i < monitors.length; i++){
			if(all || r.indexOf(i+'') !== -1){
				monitors[i](nets[i],cbs[i],callibools[i]);
			}
		}
	});
}