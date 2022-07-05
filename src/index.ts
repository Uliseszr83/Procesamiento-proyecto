import { ImageLocal } from "./ImageLocal.js";
import { ImageType } from "./ImageType.js";
import { MathImg } from "./MathImg.js";
import { Particle } from "./particle.js";

let lienzo1: HTMLCanvasElement;
let lienzo2: HTMLCanvasElement;
let pantalla1: CanvasRenderingContext2D;
let pantalla2: CanvasRenderingContext2D;


lienzo1 = <HTMLCanvasElement>document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");
lienzo2 = <HTMLCanvasElement>document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");

var imgLocal: ImageLocal = new ImageLocal(pantalla1);
imgLocal.getImage().onload = imgLocal.onload;


let ctx = pantalla2;
let w:number;
let h:number;
const numberOfParticles = 3000;
let particlesArray: Particle[];
particlesArray = new Array(0);

function init() {
  
  var imagenSal: ImageType = new ImageType(pantalla1, imgLocal.getImage());
  let tmp = MathImg.relativeBrightness(imagenSal);
  w = imagenSal.getWidth();
  h = imagenSal.getHeight();
  for (let e = 0; e < numberOfParticles; e++){
    particlesArray.push(new Particle(w, h, ctx, tmp));
  }
}

function animate() {
  ctx.globalAlpha = 0.05;
  ctx.fillRect(w,h , 0, 0);
  ctx.globalAlpha = 1.0;
  for (let e = 0; e < particlesArray.length; e++){
    particlesArray[e].update();
    ctx.globalAlpha = particlesArray[e].getSpeed()*0.5;
    particlesArray[e].draw();
  }
  requestAnimationFrame(animate);
}


function imgEfetos(evt: any): void { 
  init();
  animate();
}


document.getElementById('files').addEventListener('change', imgLocal.handleFileSelect, false);

document.getElementById("op-img").addEventListener('click', imgEfetos, false);


