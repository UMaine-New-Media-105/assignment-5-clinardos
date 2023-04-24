let bubbles = [];
let mice = [];
let cheeses = [];
let addX;
let img;
let red1;
let green1;
let blue1;
let a1;


function setup() {
  // 960 x 540
  createCanvas(960, 540,WEBGL);
  angleMode(DEGREES);
  addX = -3;
  img = loadImage("cheeseTexture.png");
  
  frameRate(30);
    // Loop for bubbles
  for (let b = 0; b < 50; b++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 50);
    bubbles[b] = new Bubble(x, y, r);

    // Establishing variables
  red1 = 120
  blue1 = 120;
  green1 = 120;
  a1 = 100;
  }

  // Loop for mice
  for (let m = 0; m < 12; m++) {
    let x = random(width);
    let y = random (height);
    mice.push(new Mouse(x, y));
  }
   // Cheese
  for (c = 0; c < 10; c++) {
    let x = random(width-30);
    let y = random(height-30);
    let s = 0.6
    cheeses.push(new Cheese(x, y, s));
}
}

function draw() {
  background(220);
  translate (-400,-250);
    // bubbles
for (let b=0;b<bubbles.length;b++){
  bubbles[b].show();
  bubbles[b].move();
}
  
  // Mice
  for (let m = 0; m < mice.length; m++) {
    let theseMice = mice[m];
    theseMice.show();
    theseMice.update();
  }
    // Cheese
  for (let c = 0; c < cheeses.length; c++) {
    cheeses[c].show();
    cheeses[c].update();
  }
}
  // Mouse
class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  show() {
    push();
    translate(this.x, this.y);
    strokeWeight(1.5);
    fill("#838996");
    ellipse(50, 50, 50, 35);
    arc(55, 42, 11, 11, 60, 370);
    arc(55, 54, 11, 11, 0, 290);
    // nose
    fill("black");

    ellipse(73, 50, 3, 5);
    ellipse(65, 45, 2);
    ellipse(65, 52, 2);
    fill("pink");
    ellipse(55, 54, 6.5);
    ellipse(55, 42, 6.5);
    // tail
    push();
    noFill();
    stroke("black");
    strokeWeight(2);
    curve(0, 100, 10, 40, 30, 50, 30, 20);
    pop();
    pop();
  }
  update() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let tooFarLeft = this.x < 0;
    let tooFarRight = this.x > width;
    if (tooFarLeft || tooFarRight) {
      this.addX = -this.addX;
    }
  }
}
  
  
  // Cheese
class Cheese {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.addX = addX;
  }
  show() {
    push();
    noStroke();
    translate(this.x, this.y);
    scale(this.s);
    push();
    rotateZ(frameCount);
    rotateX(frameCount);
    rotateY(frameCount);
    push();
    texture(img);
    
    box(40, 40, 40);
    pop();
    pop();
    pop();
  }
  update(){
    this.x = this.x + this.addX;
    this.y = this.y;
    let tooFarLeft = this.x < 0;
    let tooFarRight = this.x > width;
    if (tooFarLeft || tooFarRight) {
      this.addX = -this.addX;
    }
  }
}
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
    noStroke();
    fill(red1, blue1, green1, a1);
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
