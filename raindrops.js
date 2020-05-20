// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, 
          strokeWeight, line, mouseIsPressed, noStroke */

let drops =[]

function setup() {
  createCanvas(500, 500)
  colorMode(HSB, 100);
  for(let i =0; i < 30; i++) {
  drops.push(new RainDrop());
  }
  
}

function draw() {
  background(0, 0, 95)
  for(let i =0; i < drops.length; i++) {
  drops[i].drip()
    drops[i].show()
  }
}

class RainDrop {
  constructor() {
    this.d = random(5,15)
    this.x = random(width)
    this.y = random(height)
    this.fallSpeed = 20 - this.d
  }
  
  show() {
    noStroke()
    fill(60, 80, 80)
    ellipse(this.x, this.y, this.d)
  }
  
  drip() {
    this.y += this.fallSpeed
    if (this.y > height) {
      this.y = 0
      this.x = random(width)
    }
  }
}