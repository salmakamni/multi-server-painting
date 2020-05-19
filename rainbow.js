// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, strokeWeight, line, mouseIsPressed */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400)
  colorMode(HSB, 360, 100, 100)
  brushHue = 0
  strokeWeight(6)
  background(95)
}

function draw() {
  chooseColors()
  if (mouseIsPressed) {
    line(mouseX + random(10) - 5, mouseY + random(10) - 5, mouseX + random(10) - 5, mouseY + random(10) -5)
  }
}

function chooseColors() {
  brushHue += 1;
  if(brushHue > 360) {
    brushHue = 0;
  }
  stroke(brushHue, 50, 80)
  fill(brushHue, 50, 80)
}

function keyPressed() {
  background(95)
}