// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, strokeWeight, line, mouseIsPressed
          mouseButton, RIGHT, noStroke, keyCode, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW */

let brushHue, diameter

function setup() {
  // Canvas & color settings
  createCanvas(400, 400); // make our canvas 400x400
  colorMode(HSB, 360, 100, 100); // use HSB coloring
  brushHue = 0; // start the brush's hue at 0
  noStroke(); // don't put a stroke on the stuff we draw
  background(95); // paint the canvas gray (95% where 100% is completely white)
  diameter = 15
}

function draw() {
  chooseColors(); // call chooseColors function
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter, diameter);
  }
  keyPressed()
  //rect(mouseX, mouseY, 15, 15); //draw a 15x15 rectangle wherever the mouse is
}

function chooseColors() {
  // brushHue +=2;
  // if (brushHue === 360 ) {
  //   brushHue = 0;
  // }
  keyPressed();
  fill(brushHue, 50, 80); // set the color we paint with to also be brushHue, 50, 80
  
}

function keyPressed() {
  //changing brushHue
  if (keyCode === LEFT_ARROW) {
    brushHue--;
  }
  if (keyCode === RIGHT_ARROW) {
    brushHue++;
  }
  //changing brushDiameter
  if (keyCode === UP_ARROW) {
    diameter +=1;
  }
  if (keyCode === DOWN_ARROW) {
    diameter -=1;
  }
  
  
  
  //limits for brushHue
  if (brushHue == 0) {
    brushHue = 365
  }
  if (brushHue == 365) {
    brushHue = 0;
  }
}