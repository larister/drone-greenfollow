var arDrone = require('ar-drone');
var PNG = require('png-js');
var fs = require('fs');
var detect = require('./lib/detect');
var client  = arDrone.createClient();

// client.on('navdata', console.log);

var pngStream = client.createPngStream();
var first = true,
    i = 0;

pngStream.on('data', function(data){
    if(first){

        fs.writeFile('output.png', data);
        console.log('done');

        // console.log(i++, detect(640, 368, data));

        first = false;
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