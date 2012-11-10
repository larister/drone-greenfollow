var arDrone = require('ar-drone');
var PNG = require('png-js');
var fs = require('fs');
var detect = require('./lib/detect');
var client  = arDrone.createClient();
var pixelAverage = require('./lib/pixel-average');
var positionToDirection = require('./lib/position-to-direction');

// client.on('navdata', console.log);

var width = 640;
var height = 368;
var pngStream = client.createPngStream();
var first = true;

function roundNumber(num, dec) {
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
}

pngStream.on('data', function(data){
    if(first) {
        // fs.writeFile('output.png', data);
    }
    first = false;



        var pixels = detect(width, height, data, 1);
        // console.log(pixels.length);
        if(pixels.length === 0){
            console.log('nothing found');
            return;
        }
		var average = pixelAverage(pixels);
		var targetDirection = positionToDirection(average, width, height);
		// console.log(roundNumber(targetDirection[0], 2), roundNumber(targetDirection[1], 2));
    // }
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
