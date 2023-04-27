// Linardos, Caitlin
// Assignment 5 Challenge 4

// Establishing Arrays
let bubbles = [];
let mice = [];
let cheeses = [];

// Establishing Variables
let addX;
let img;
let tooFarLeft = (x) => x < -100;
let tooFarRight = (x) => x > width - 180;
let spriteWidth;
let spawnDelay;
let breedersToStart = 25;
let catchersToStart = 6;
let framesDelayed = 0;
let s = 0.6;
let startHealth = 600;

// Preload function used to allow image to fully load before sketch is run.

function preload() {
  // This is for the cheese
  img = loadImage("cheeseTexture.png");
}

function setup() {
  createCanvas(960, 540, WEBGL);
  angleMode(DEGREES);

  // Defining variables
  addX = -3;
  spriteWidth = 80;
  spawnDelay = 90;

  // Setting frame rate for movement
  frameRate(30);

  //Loop for bubbles
  for (let b = 0; b < 50; b++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 50);
    bubbles.push(new Bubble(x, y, r));
  }

  // Loop for mice (catchers)
  for (let m = 0; m < catchersToStart; m++) {
    let x = random(width);
    let y = random(height);
    mice.push(new Mouse(x, y));
  }

  // Cheese (breeders)
  for (let c = 0; c < breedersToStart; c++) {
    let x = random(width - 30);
    let y = random(height - 30);
    cheeses.push(new Cheese(x, y, s));
  }
}

function draw() {
  background(220);
  translate(-400, -250);

  // This prevents one collision from spawning multiple children
  framesDelayed++;

  //Bubbles
  for (let b = 0; b < bubbles.length; b++) {
    bubbles[b].show();
    bubbles[b].move();
  }

  //Mice (catcher)
  for (let m = 0; m < mice.length; m++) {
    let currentMice = mice[m];
    currentMice.show();
    currentMice.update();
       for (let miceLeft = 0; miceLeft < cheeses.length; miceLeft++) {
     let proposedCatch = cheeses[miceLeft];
     if (isTouching(currentMice, proposedCatch)) {
        cheeses.splice(miceLeft, 1);
        currentMice.health = startHealth
        break;
      }
    }
      if (currentMice.health < 0) {
      mice.splice(m, 1);
    }
  }
  
  //Cheese (breeder)
  for (let c = 0; c < cheeses.length; c++) {
    let currentCheese = cheeses[c];
    currentCheese.show();
    currentCheese.update();
    if (framesDelayed > spawnDelay) {
      for (
        let matesChecked = 0;
        matesChecked < cheeses.length;
        matesChecked++
      ) {
        let proposedMate = cheeses[matesChecked];
        let isDifferentCheese = (c !== matesChecked);
        if (isDifferentCheese && isTouching(currentCheese, proposedMate)) {
          let x = random(width);
          let y = random(height);
          cheeses.push(new Cheese(x, y, s));
          framesDelayed = 0;
          break;
        }
      }
    }
  }
}
function isTouching(sprite1, sprite2) {
  let spriteDistance = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
  if (spriteDistance < spriteWidth) {
    return true;
  } else {
    return false;
  }
}
// Bubbles class
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    push();
    noStroke();
    fill(255, 255, 255, 150);
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
//Mouse -- CATCHERS
class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.health = startHealth;
  }
  update() {
    this.x += this.addX;
    this.y = this.y;
    this.health--;

    // check if the mouse hits the left wall
    if (tooFarLeft(this.x)) {
      this.addX = -this.addX;
      this.isMovingLeft = true;
      this.isMovingRight = false;
    }
    if (tooFarRight(this.x)) {
      this.addX = -this.addX;
      this.isMovingLeft = false;
      this.isMovingRight = true;
    }
  }
  show() {
    push();
    let d = 1;
    translate(this.x, this.y);
    strokeWeight(1.5);
    if (this.isMovingLeft == true) {
      d = 1;
    } else {
      d = -d;
    }
    fill("#838996");
    // Body
    ellipse(50 * d, 50, 50, 35);
    // Ears
    arc(55 * d, 42, 11, 11, 60, 370);
    arc(55 * d, 54, 11, 11, 0, 300);
    fill("pink");
    ellipse(55 * d, 54, 6.5);
    ellipse(55 * d, 42, 6.5);
    // Nose
    fill("black");
    ellipse(73 * d, 50, 3, 5);
    // Eyes
    ellipse(65 * d, 45, 2);
    ellipse(65 * d, 54, 2);
    // Tail
    push();
    noFill();
    stroke("black");
    strokeWeight(2);
    noFill();
    stroke(0, 0, 0);
    bezier(28 * d, 50, 15 * d, 40, 14 * d, 70, 0 * d, 50);
    pop();
    pop();
  }
}

// Cheese -- BREEDERS
class Cheese {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.addX = addX;
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }
  show() {
    push();
    let d = 1;
    if (this.isMovingRight == true) {
      d = -d;
    } else {
      d = 1;
    }
    noStroke();
    translate(this.x, this.y);
    scale(this.s);
    rotateZ(frameCount);
    rotateX(frameCount);
    rotateY(frameCount);
    texture(img);
    box(40 * d);
    pop();
  }
  update() {
    push();
    tooFarLeft = (x) => x < -50;
    this.x += this.addX;
    if (tooFarLeft(this.x)) {
      this.addX = -this.addX;
      this.isMovingLeft = true;
      this.isMovingRight = false;
    }
    pop();
    if (tooFarRight(this.x)) {
      this.addX = -this.addX;
      this.isMovingLeft = false;
      this.isMovingRight = true;
    }
  }
}
