var fs = require('fs');
// var Canvas = require('canvas');
// var Image = Canvas.Image;
var rgb2hsl = require('color-convert').rgb2hsl;

// 176, 21, 29
function isGreen(h, s, l){
    return l > 96;
}
// function isGreen(r, g, b){
//     return (g > r + 150) && (g > b + 150);
// }

module.exports = function (w, h, data, subsampling) {
    var significantPixels = [];

    for (var i = 0; i + 3 < data.length; i += subsampling * 4) {
        var hsl = rgb2hsl(data[i], data[i + 1], data[i + 2]);
        var h = hsl[0], s = hsl[1], l = hsl[2];

        if(i > data.length / 2 && i < (data.length / 2) + 4){
            console.log('middle innit', data[i], data[i + 1], data[i + 2]);
            // console.log('middle innit', h, s, l);
        }

        if(isGreen(h, s, l)){
        // if(isGreen(data[i], data[i + 1], data[i + 2])){
            var x = i % (w * 4) / 4,
                y = Math.floor(i / (w * 4));

            significantPixels.push([x, y]);
        }
    }
    return significantPixels;
};
