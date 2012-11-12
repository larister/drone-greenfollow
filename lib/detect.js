var fs = require('fs');
var rgb2hsl = require('color-convert').rgb2hsl;

// RGB green detector
function isRgbGreen(r, g, b){
    return (g > r + 150) && (g > b + 150);
}

// HSL green detector
function isHslGreen(h, s, l){
    return (h > 160 && h < 190) && (s > 15 && s < 30);
}

module.exports = function (width, height, data, subsampling) {
    var significantPixels = [];

    for (var i = 0; i + 3 < data.length; i += subsampling * 4) {
        var hsl = rgb2hsl(data[i], data[i + 1], data[i + 2]);
        var h = hsl[0], s = hsl[1], l = hsl[2];

        // If pixel is deemed to be 'green', store the X Y coordinates of the pixel
        if(isHslGreen(h, s, l)){
            var x = i % (width * 4) / 4,
                y = Math.floor(i / (width * 4));

            significantPixels.push([x, y]);
        }
    }
    return significantPixels;
};
