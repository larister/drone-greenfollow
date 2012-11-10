var fs = require('fs');
// var Canvas = require('canvas');
// var Image = Canvas.Image;
var rgb2hsl = require('color-convert').rgb2hsl;

// 175, 35, 35
function isGreen(h, s, l){
    return (h > 160 || h < 180) && (s > 30 || s < 40) && (l > 30 && l < 60);
}

module.exports = function (w, h, data) {
    var greenCoords = [];

    for (var i = 0; i + 3 < data.length; i += 16) {
        var hsl = rgb2hsl(data[i], data[i + 1], data[i + 2]);
        var h = hsl[0], s = hsl[1], l = hsl[2];
        
        if(isGreen(h, s, l)){
            var x = i % (w * 4),
                y = Math.floor(i / (w * 4));
                
            coords.push([x, y]);
        }
    }
    return matches > 400;
};
