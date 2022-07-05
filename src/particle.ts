export class Particle {
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;
  protected speed: number;
  protected velocity: number;
  protected size: number;
  protected ctx: CanvasRenderingContext2D;
  protected _2PI: number;
  protected position1: number;
  protected position2: number;
  protected mappedImage: any[][][];
  protected angle : 0;

  constructor(width: number, height: number,screenCanvas: CanvasRenderingContext2D,mapImg: number[][][]) {
    this.width = width;
    this.height = height;
    this.ctx = screenCanvas;
    this.x = Math.random() * width;
    this.x = Math.random() * height;
    this.y = 0;
    this.speed = 0;
    this.velocity = Math.random() *  0.5;
    this.size = Math.random() * 1.5 + 1;
    this._2PI = Math.PI * 2;
    this.angle = 0;
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.y);
    this.mappedImage = mapImg;
    
  }

  public update() {
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
    let movement = 0;
    if (this.y < this.width) {
      this.speed = this.mappedImage[0][this.position1][this.position2];
      movement = (3.0 - this.speed) + this.velocity;
    }
    
    this.y += movement;
    if (this.y >= this.height) {
      this.y = 0;
      this.x = Math.random() * this.width;
    }
    
  }

  public draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.beginPath();
    this.ctx.fillStyle = this.mappedImage[1][this.position1][this.position2];
    this.ctx.arc(this.x, this.y, this.size, 0, this._2PI);
    this.ctx.fill();
  }

  public getSpeed(): number {
    return this.speed;
  }
}