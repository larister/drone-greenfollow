var fs = require('fs');
// var Canvas = require('canvas');
// var Image = Canvas.Image;
var rgb2hsl = require('color-convert').rgb2hsl;

// 176, 21, 29
function isGreen(h, s, l){
    return (h > 160 && h < 190) && (s > 15 && s < 30) && (l > 20 && l < 50);
}

module.exports = function (w, h, data, subsampling) {
    var significantPixels = [];

    for (var i = 0; i + 3 < data.length; i += subsampling * 4) {
        var hsl = rgb2hsl(data[i], data[i + 1], data[i + 2]);
        var h = hsl[0], s = hsl[1], l = hsl[2];

        console.log(h,s,l);
        if(isGreen(h, s, l)){
            var x = i % (w * 4) / 4,
                y = Math.floor(i / (w * 4));

            significantPixels.push([x, y]);
        }
    }
    return significantPixels;
};
