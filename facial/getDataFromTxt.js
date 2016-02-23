var fs = require('fs');
var trainingData;
function getData(path){
	var data = fs.readFileSync(path);
	return JSON.parse(data);
}
module.exports = function(){
	trainingData =[];
	extract('./facial/bad1.txt',0);
	extract('./facial/bad2.txt',0);
	extract('./facial/good.txt',1);
	fs.writeFile('./facial/data.js','module.exports = '+JSON.stringify(trainingData));
	return trainingData;
}
function extract(path,val){
	var dataPairs = getData(path);
	// 0 = area, 1 = y
	var arr1 = normalize(dataPairs[0],80000);
	var arr2 = normalize(dataPairs[1],500);
	for(var i = 0; i < arr1.length; i++){
		trainingData.push({input:[arr1[i],arr2[i]],output:[val]});
	}
}
function normalize(arr,max){
	var nArr = [];
	arr.forEach(function(i){
		nArr.push(i/max);
	});
	return nArr;
}

function max(arr){
	var max = 0;
	arr.forEach(function(i){
		if ( i > max){
			max = i;
		}
	})
	return max;
}