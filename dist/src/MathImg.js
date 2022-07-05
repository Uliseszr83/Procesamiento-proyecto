var MathImg = /** @class */ (function () {
    function MathImg() {
    }
    MathImg.initArray2D = function (width, height) {
        var arrImage = new Array(2);
        arrImage[0] = new Array(height);
        arrImage[1] = new Array(height);
        for (var i = 0; i < height; i++) {
            arrImage[0][i] = new Array(width);
            arrImage[1][i] = new Array(width);
        }
        return arrImage;
    };
    MathImg.relativeBrightness = function (img) {
        var arrImage = img.getArrayImg();
        var sal = this.initArray2D(img.getWidth(), img.getHeight());
        for (var i = 0; i < img.getHeight(); i++) {
            for (var j = 0; j < img.getWidth(); j++) {
                sal[0][i][j] = Math.sqrt(Math.pow(arrImage[0][i][j], 2) * 0.299 +
                    Math.pow(arrImage[1][i][j], 2) * 0.587 +
                    Math.pow(arrImage[2][i][j], 2) * 0.114) / 100.0;
                sal[1][i][j] = 'rgb(' + arrImage[0][i][j] + ',' + arrImage[1][i][j] + ',' + arrImage[2][i][j] + ')';
            }
        }
        return sal;
    };
    return MathImg;
}());
export { MathImg };
