// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, noStroke, line */


// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor, globalS, globalB


function setup() {
  // Canvas & color settings
  createCanvas(500, 500)
  colorMode(HSB, 360, 100, 100)
  noStroke()

  // 0-100 is greyscale in HSB as we've defined it. 0 is black and 100 is white.
  backgroundColor = color(95)
  textColor = color(20)
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is greem and 240 is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(0, 80, 80)
  color2 = color(200, 80, 80)
}

function draw() {
  background(backgroundColor)
  drawCenterLine()


  // The red and blue circles:
  fill(color1)
  ellipse(.25 * width, .5 * width, 50)
  fill(color2)
  ellipse(3/4 * width, 1/2 * height, 50)

  // The grey circle and the text:
  fill(textColor)
  ellipse(mouseX, mouseY, 50)
  text("Flip the switch", 20, 20)
  
  if(mouseX > width / 2) {
    nightMode();
  } else {
    dayMode();
  }
}

function nightMode() {
  backgroundColor = color(20);
}

function dayMode() {
  backgroundColor = color(95)
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor)
  line(width / 2, 0, width / 2, height)
  noStroke()
}