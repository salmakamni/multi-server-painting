// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, round,
          strokeWeight, line, mouseIsPressed, windowWidth, sqrt,
          windowHeight, noStroke */

let backgroundColor, spherePosition, rectPosition, mousePosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400)
  colorMode(HSB, 360, 100, 100)
  backgroundColor = 95
  // This variable contains a JSON object
  spherePosition = {
    x: 100,
    y: 100
  }
  rectPosition = {
    x: 100,
    y: 100
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20)
  rect(rectPosition.x, rectPosition.y, 20, 20)
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y)
  mousePosition = {x: mouseX, y: mouseY}
  text(`The circle and sphere are ${computeDistance(mousePosition, rectPosition)} units apart.`, 20, 20)
}

function mousePressed() {
  spherePosition.x = random(width)
  spherePosition.y = random(height)
}

function computeDistance(pos1, pos2) {
  return round(sqrt(((pos1.x - pos2.x) ** 2) * ((pos1.y - pos2.y) ** 2)))
}

function computeCategoryOfDistance(distance) {
  if distance
}