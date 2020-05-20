// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, HSL
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, 
          strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke */

let dots

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20)
  colorMode(HSL, 360, 100, 100)
  dots = []
  for(let i =0; i< 100; i++) {
    dots.push(new BouncyDot(i))
  }
}

function draw() {
  background(220, 0, 80)
  for(let i =0;i<dots.length;i++) {
    dots[i].float()
    dots[i].display()
  }
}

function mousePressed() {
  // We'll use this for console log statements only.
  
}

class BouncyDot {
  constructor(i) {
    // Randomly generate position
    this.i = i;
    this.x = random(width)
    this.y = random(height)
    // Randomly generate radius
    this.r = random(12, 20)
    // Randomly generate color
    this.color = random(360)
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(0.5, 3)
    this.masterYvelocity = random(0.5, 3)
    // ...and use those as starting velocities.
    this.xVelocity = this.masterXvelocity
    this.yVelocity = this.masterYvelocity
  }

  float() {
    this.x += this.xVelocity
    this.y += this.yVelocity
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity
    }
  }

  display() {
    fill(this.color, 80, 70)
    noStroke()
    ellipse(this.x, this.y, this.r * 2)
    fill(this.color, 80, 20)
    text(`${this.i}`, this.x, this.y)
  }
}