var arDrone = require('ar-drone');
var PNG = require('png-js');
var fs = require('fs');
var detect = require('./lib/detect');
var client  = arDrone.createClient();
var pixelAverage = require('./lib/pixel-average.js');
var positionToDirection = require('./lib/position-to-direction.js');

// client.on('navdata', console.log);

var width = 640;
var height = 368;
var pngStream = client.createPngStream();

pngStream.on('data', function(data){
    if(first) {
        var pixels = detect(width, height, data, 4);
		var average = pixelAverage(pixels);
		var targetDirection = positionToDirection(average, width, height);
		console.log(targetDirection);
    }
});

// client.takeoff();

// client
//   .after(5000, function() {
//     this.clockwise(0.5);
//   })
//   .after(3000, function() {
//     this.stop();
//     this.land();
//   });
