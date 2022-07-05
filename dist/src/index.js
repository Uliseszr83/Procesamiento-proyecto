import { ImageLocal } from "./ImageLocal.js";
import { ImageType } from "./ImageType.js";
import { MathImg } from "./MathImg.js";
import { Particle } from "./particle.js";
var lienzo1;
var lienzo2;
var pantalla1;
var pantalla2;
lienzo1 = document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");
lienzo2 = document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");
var imgLocal = new ImageLocal(pantalla1);
imgLocal.getImage().onload = imgLocal.onload;
var ctx = pantalla2;
var w;
var h;
var numberOfParticles = 3000;
var particlesArray;
particlesArray = new Array(0);
function init() {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    var tmp = MathImg.relativeBrightness(imagenSal);
    w = imagenSal.getWidth();
    h = imagenSal.getHeight();
    for (var e = 0; e < numberOfParticles; e++) {
        particlesArray.push(new Particle(w, h, ctx, tmp));
    }
}
function animate() {
    ctx.globalAlpha = 0.05;
    ctx.fillRect(w, h, 0, 0);
    ctx.globalAlpha = 1.0;
    for (var e = 0; e < particlesArray.length; e++) {
        particlesArray[e].update();
        ctx.globalAlpha = particlesArray[e].getSpeed() * 0.5;
        particlesArray[e].draw();
    }
    requestAnimationFrame(animate);
}
function imgEfetos(evt) {
    init();
    animate();
}
document.getElementById('files').addEventListener('change', imgLocal.handleFileSelect, false);
document.getElementById("op-img").addEventListener('click', imgEfetos, false);
