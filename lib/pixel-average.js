module.exports = function (pixels) {
	var averages = [0,0];
	for (i = 0; i < pixels.length; i++) {
		averages[0] += parseInt(pixels[0]);
		averages[1] += parseInt(pixels[1]);
	}
	averages[0] = averages[0] / pixels.length;
	averages[1] = averages[1] / pixels.length;

	return averages;
};
