module.exports = function (average, width, height) {
	return [(average[0] - width/2)/(width/2), (average[1] - height/2)/(width/2)];
};


