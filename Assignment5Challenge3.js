Sketch File: 

// Linardos,Caitlin
// Assignment 5 challenge 2

function setup() {
  createCanvas(960, 540);



}

function draw() {
  background("peachpuff");
     for (let c = 0; c < cheeses.length; c++) {
    cheeses[c].show();
    cheeses[c].move();
  }
   for (let m = 0; m < mice.length; m++) {
    mice[m].shown();
    mice[m].new1();
   }
     for (let h = 0; h < holes.length; h++) {
    holes[h].appear();
    holes[h].update();
     }
   
}

cheese file:
// establishing Array
let cheeses = [];
  let addX = -5
function setup() {
  createCanvas(960, 540);
    angleMode (DEGREES)
  // Loop for bubbles
  for (let c = 0; c < 50; c++) {
    let x = random(width);
    let y = random(height);
    let r = random(0.2, 1);
    cheeses[c] = new Cheese(x, y, r);

  }

  // Establishing framerate
  frameRate(30);
}

// Class to create Cheese
class Cheese {
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
    addCheese(this.x, this.y, this.r * 2);
    pop();
  }
}
function addCheese (x,y,r){
  noStroke();
  translate (x,y);
  scale (r);
  fill ("gold")
rect (1,1,20)
  fill ("goldenrod")
  arc(5,8,5,5,0,360)
  arc(10,1,5,5,0,180)
arc(16,18,5,5,0,360)
arc(1,21,5,5,270,360)
  arc(21,10,4.5,4.5,90,270)
  arc(8,16,2,2,0,360)
   arc(15,6,3,2.5,0,360)
  
}

Mouse File:
let mice = []
function setup() {
  createCanvas(960, 540);

angleMode (DEGREES);
    for (let m = 0; m < 5; m++) {
    let x = random(width);
    let y = random(height);
    mice[m] = new Mouse(x, y);
    }
}

class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  new1() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let tooFarLeft = this.x < 0;
    let tooFarRight = this.x > width;
    if (tooFarLeft || tooFarRight) {
      this.addX = -this.addX;
      // this.y = random (height);
    }
  }
    shown() {
    push();
    translate(this.x, this.y);
    addMouse(0, 0, 1);
      pop();
  }
}

function addMouse(x, y, s) {
  translate(x, y);
  scale(s);
  fill("silver");
  push();
  // noStroke ()

  // body
  push();
  fill("silver");
  arc(40, 70, 38, 30, 0, 180);
  arc(40, 70, 38, 50, 180, 360);
  fill("pink");
  arc(40, 70, 28, 20, 0, 180);
  arc(40, 70, 28, 40, 180, 360);
  pop();

  push();
  rotate(-20);
  // Ears
  ellipse(18, 28, 24, 22);
  fill("lightpink");
  ellipse(18, 28, 18, 16);
  pop();
  push();
  rotate(20);
  ellipse(58, 1, 24, 22);
  fill("lightpink");
  ellipse(58, 1, 18, 16);
  pop();
  // Head
  arc(40, 40, 30, 20, 0, 180);
  arc(40, 40, 30, 35, 180, 360);
  // Nose
  fill("black");
  arc(40, 40, 5, 5, 0, 180);
  push();
  noFill();
  stroke("black");
  strokeWeight(0.5);
  arc(38.5, 42.5, 3, 3, 0, 180);
  arc(41.5, 42.5, 3, 3, 0, 180);
  pop();
  // Eyes
  fill("white");
  ellipse(35, 32, 8, 11);
  ellipse(45, 32, 8, 11);
  fill("black");
  ellipse(35, 34, 4, 5);
  ellipse(45, 34, 4, 5);
}

Hole file: 
let holes = [];

function setup() {
  createCanvas(960, 540);
  for (let h = 0; h < 5; h++) {
    let x = random(width);
    let y = random(height);
    holes[h] = new Hole(x, y);
  }
}

class Hole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  update() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let tooFarLeft = this.x < 0;
    let tooFarRight = this.x > width;
    if (tooFarLeft || tooFarRight) {
      this.addX = -this.addX;
      // this.y = random (height);
    }
  }
  appear() {
    push();
    translate(this.x, this.y);
    holeInWall(0, 0, 1);
    pop();
  }
}
function holeInWall(x, y, s) {
  translate(x, y);
  scale(s);
  fill("firebrick");
  stroke("maroon");
  rect(1, 1, 30, 28);
  // rect (1,1,6,4)
  let offset = 6;
  let interval = 1;
  let offset2 = 4;
  let interval2 = 1;
  for (let numRows = 0; numRows < 5; numRows++) {
    for (let numCols = 0; numCols < 7; numCols++) {
      rect(offset * numRows + interval, offset2 * numCols + interval2, 6, 4);
    }
  }
  push();
  strokeWeight(2);
  fill("black");
  arc(16, 29, 20, 46, 180, 360);
  pop();
}
