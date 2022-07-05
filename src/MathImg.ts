
import { ImageType } from "./ImageType.js";

export class MathImg {

  public static initArray2D(width: number, height: number): any {
    var arrImage = new Array(2);
    arrImage[0] = new Array(height);
    arrImage[1] = new Array(height);
    for (let i = 0; i < height; i++) {
      arrImage[0][i] = new Array(width);
      arrImage[1][i] = new Array(width);
    }
    return arrImage;
  }


  
  public static relativeBrightness(img: ImageType): number[][][] {
    var arrImage: number[][][] = img.getArrayImg();
    var sal: any[][][] = this.initArray2D(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        
        sal[0][i][j] = Math.sqrt(arrImage[0][i][j] ** 2 * 0.299 +
          arrImage[1][i][j] ** 2 * 0.587 +
          arrImage[2][i][j] ** 2 * 0.114) / 100.0;
        sal[1][i][j] = 'rgb(' + arrImage[0][i][j] + ',' + arrImage[1][i][j] + ',' + arrImage[2][i][j] + ')';
      }
    }
    return sal;
  }

}
