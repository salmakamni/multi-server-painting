// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY */

let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit

function setup() {
  // Canvas & color settings
  createCanvas(400, 400)
  colorMode(HSB, 360, 100, 100)
  brushHue = 0
  backgroundColor = 95
  coinX = random(width)
  coinY = random(height)
  time = 1000
  gameIsOver = false
  score = 0
}

function draw() {
  background(backgroundColor)
  ellipse(coinX, coinY, 20)
  ellipse(mouseX, mouseY, 20)
  text(`Time remaining: ${time}`, 20, 40)
  text(`score: ${score}`, 20, 60)
  hit = collideCircleCircle(coinX, coinY, 20, mouseX, mouseY, 20)
  if (hit && !gameIsOver) {
    handleCollision()
  }
  handleTime();
}

function handleCollision() {
  coinX = random(width)
  coinY = random(height)
  score+= 1
}

function handleTime() {
  // We'll write code to handle the time.
  if(time > 0) {
  time -= 1;
  } else {
    gameIsOver = true
  }
}