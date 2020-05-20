// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, keyCode, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW
          random, background, fill, color, random, textSize
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, 
          strokeWeight, line, mouseIsPressed */

// Import the collision library or paste it here.
let backgroundColor, frogX, frogY, score, lives, gameIsOver, car1X, car1Y, car1V

function setup() {
  // Canvas & color settings
  createCanvas(500, 500)
  colorMode(HSB, 360, 100, 100)
  backgroundColor = 95
  frogX = width / 2
  frogY = height - 30
  score = 0
  lives = 3
  gameIsOver = false
  car1X = 0
  car1Y = 100
  car1V = 5
}

function draw() {
  background(backgroundColor)
  // Code for gold goal line
  fill(60, 80, 80)
  rect(0, 0, width, 50)
  // Code to display Frog
  fill(120, 80, 80)
  ellipse(frogX, frogY, 20)
  moveCars()
  drawCars()
  checkCollisions()
  checkWin()
  displayScores()
  // if (keyIsPressed) {
  //   keyPressed()
  // }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    frogY -= 20
  } else if (keyCode === DOWN_ARROW) {
    frogY += 20
  } else if (keyCode === LEFT_ARROW) {
    frogX -= 20
  } else if (keyCode === RIGHT_ARROW) {
    frogX += 20
  }
}

function moveCars() {
  // Move the car
  car1X += car1V

  // Reset if it moves off screen
  if (car1X > width) {
    car1X = 0
  }
}

function drawCars() {
  // Code for car 1
  fill(0, 80, 80)
  rect(car1X, car1Y, 40, 30)
  // Code for additional cars
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  if (collideRectCircle(car1X, car1Y, 40, 30, frogX, frogY, 20)) {
    frogX = width / 2
    frogY = height - 30
    lives -= 1;
  }
  
  if (lives < 0) {
    gameIsOver = true
  }

}

function checkWin() {
  if (frogY < 50) {
    score += 1
    frogY = height - 30
    frogX = width / 2
  }
  // If the frog makes it into the yellow gold zone, increment the score and move the frog back down to the bottom.
}

function displayScores() {
  textSize(12)
  fill(0)
  // Display Lives
  text(`Lives: ${lives}`, 10, 20)
  // Display Score

  // Display game over message if the game is over

}