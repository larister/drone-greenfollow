var fs = require('fs');
var detect = require('./lib/detect');
var pixelAverage = require('./lib/pixel-average.js');
var targetDirection = require('./lib/position-to-direction.js');

var width = 3;
var height = 2;
var data = [
	1, 2, 3, 255,
	58, 89, 87, 255,
	128, 123, 97, 255,
	58, 89, 87, 255,
	58, 89, 87, 255,
	58, 89, 87, 255,
];

var pixels = detect(width, height, data, 1);
var average = pixelAverage(pixels);
var targetDirection = positionToDirection(average, width, height);
console.log(targetDirection);
