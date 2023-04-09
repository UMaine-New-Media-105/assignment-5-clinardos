This is in my maine sketch.js file: 
// Linardos,Caitlin
// Assignment 5 challenge 1

function setup() {
  createCanvas(500, 500);
  
  // Initializing variables
  
  bubbleOne = new Bubble(200, 300, 30);
  bubbleTwo = new Bubble(250, 220, 30);
  bubbleThree = new Bubble(290, 140, 30);
  bubbleFour = new Bubble(270, 260, 30);
  bubbleFive = new Bubble(230, 190, 35);
  
  // Establishing framerate 
  frameRate (15);
  
}

function draw() {
  background("#dbd8e3");
  
  // Adding move/show for each bubble
  bubbleOne.show();
  bubbleOne.move();
  bubbleTwo.show();
  bubbleTwo.move();
  bubbleThree.show();
  bubbleThree.move();
  bubbleFour.show();
  bubbleFour.move();
  bubbleFive.show();
  bubbleFive.move();
  
}

This is in the seperate bubble.js file: 
// Definiing variables
let bubbleOne;
let bubbleTwo;
let bubbleThree;
let bubbleFour;
let bubbleFive;

// Class to create bubble
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    push();
    stroke("#352f44");
    strokeWeight(8);
    fill("#5c5470");
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
