# assignment-5-clinardos


## assignment-5-challenge-1
### [Link](https://editor.p5js.org/clinardos/full/Z8d2uChjC)
<p> To start off this assignment, we were tasked to create 5 different jittering bubbles on a 960 x 540 canvas. To do this, I used the method shown in the P5js tutorials "Classes and Objects" and "Constructor Arguments". 
I was able to complete this task by creating a Bubble objext that had a constructor(), a move(), and a show(0 method. I first defined the object in my main sketch.js file but by the end created another file bubble.js to keep the code tidy. 

This object looked like this: 
```Javascript 
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
```

If you were to recreate the code, it should look something like this ( with jittering of course):

<img width="578" alt="Screenshot 2023-04-09 at 7 25 25 PM" src="https://user-images.githubusercontent.com/124199359/230801333-562f5d2c-d7aa-451b-ae07-2ff9950a9dc5.png">

