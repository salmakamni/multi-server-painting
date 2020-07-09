// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, strokeWeight, line, mouseIsPressed
          mouseButton, RIGHT, noStroke */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400); // make our canvas 400x400
  colorMode(HSB, 360, 100, 100); // use HSB coloring
  brushHue = 0; // start the brush's hue at 0
  noStroke(); // don't put a stroke on the stuff we draw
}

function draw() {
  background(95); // paint the canvas gray (95% where 100% is completely white)
  chooseColors(); // call chooseColors function
  rect(mouseX, mouseY, 15, 15); //draw a 15x15 rectangle wherever the mouse is
}

function chooseColors() {
  fill(brushHue, 50, 80); // set the color we paint with to also be brushHue, 50, 80
}