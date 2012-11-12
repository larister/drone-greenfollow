var arDrone = require('ar-drone');
var PNG = require('png-js');
var fs = require('fs');
var detect = require('./lib/detect');
var pixelAverage = require('./lib/pixel-average');
var positionToDirection = require('./lib/position-to-direction');

var width = 640;
var height = 368;

var client  = arDrone.createClient();
var pngStream = client.createPngStream();

// Change to true for logging
var DEBUG = false;

// Helper function to round numbers for debugging
function roundNumber(num) {
    var result = Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
    return result;
}

pngStream.on('data', function(data){
    var average,
        targetDirection,
        pixels = detect(width, height, data, 1);

    if(pixels.length === 0){
        console.log('nothing found');
        return;
    }

    if(DEBUG){
        console.log('Number of significant pixels', pixels.length);
    }

    average = pixelAverage(pixels);
    targetDirection = positionToDirection(average, width, height);

    if(DEBUG){
        console.log(roundNumber(targetDirection[0], 2), roundNumber(targetDirection[1], 2));
    }

    // Todo: erm, turn the Nodecopter in the right direction...
});
