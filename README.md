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


## assignment-5-challenge-2
### [Link](https://editor.p5js.org/clinardos/full/SgfeqzlHE)

<p> For the second part of the assignment, the task was to draw 50 moving bubbles by following the instructions within the "Arrays of Objects" tutorial. The goal was to have the bubbles be randomly distributed across the canvas. The catch was that you had to use an array, a loop, and a Bubble object to complete your sketch. For extra points, you were challenged to add style to the bubbles, randomize their sizes or make them intractive. 
<p> To start this sketch, I duplicated my previous sketch from challenge 1. I first deleted my variables with different bubbles I had in the previous sketch and I created a loop that would allow each bubble to take on a random placement and size. 

<p> Then I established an array called bubbles and within the same loop I mentioned previously I set the array to equal the creation of a new random bubble. I also added variables for color and alpha that you will see in the same loop. These come in use later in the code for a mousePressed() function. This loop looked like this:

```Javascript 
 for (let b = 0; b < 50; b++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 50);
       bubbles[b] = new Bubble(x, y, r);

    // Establishing variables
    red1 = 255;
    blue1 = 136;
    green1 = 95;
    a1 = 200;
  }
```
<p> Lastly, I added a mousePressed function that allowed the player to create new bubbles and changed the color of the sketch upon the click of the mouse. This looked like this: 

```Javascript 
function mousePressed() {
  push();
  // Changing colors
  red1 = random(255);
  blue1 = random(255);
  green1 = random(255);
  a1 = random(255);
  // Adding more bubbles
  let r = random(5, 45);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
  pop();
}
```

If you were to duplicate this sketch, it would look like something along the lines of this (with variations in bubble placement, bubble size, and color. As well as bubbles moving to show a jittering affect):

<img width="1171" alt="Screenshot 2023-04-12 at 8 47 58 AM" src="https://user-images.githubusercontent.com/124199359/231462177-28e1067e-ae23-401d-8905-271257b93f33.png">



## assignment-5-challenge-3
### [Link](https://editor.p5js.org/clinardos/full/95NJ5kyQt)
<p> Finally, after trying to restart this portion of the assignment I have finally figured it out. I am not sure what the actual problem was. 
   
   However, the task of this assignment was to create a simulation of an environment or a system. For, this game the user will not directly interact wiuth the simulation instead you will use parameters for the game to be able to evolve. You will need to design particles, breeders, and catchers. 
   For the start, I wanted to do pieces of cheese as the particles, hole in the wall breeders, and mice for the catchers. I believe this was to complex so I decieded on bubbles as particles, a mouse as the catcher, and cheese as the breeder. I used loops, arrays, and classes to accomplish this task. 
   
   If you were to copy this code, it should present a simulation that looks like this: 
      
<img width="810" alt="Screenshot 2023-04-24 at 1 30 16 PM" src="https://user-images.githubusercontent.com/124199359/234072496-5b9d1f52-9fb3-49cd-acdc-d205994428de.png">

## assignment-5-challenge-4
### [Link](https://editor.p5js.org/clinardos/full/jgsFOi2zO)

For the next part of this assignment, the task was to to animate your breeders so they will start at a random y-position and speed at the left edge of the screen, switching direction when they hit the canvas. 

I was able to accomplish this task by creating a function and using the distance formula. 

## assignment-5-challenge-5
### [Link] (https://editor.p5js.org/clinardos/full/aKJJzLuhb)

I accidentally used the same sketch as challenge 4. However, the task was to animate the catchers at the left side of the screen and have them switch directions when they hit the dge of the canvas. Also detect any collision between a catcher and breeder and remove the breeder from simulation. 

I completed this again with the same formula and functions used in challenge 4. 

I do notice a little bit of glitching with both sprites on the right side of the canvas, I am not sure if this is because of the complexity of the sprites or if there is an error in the code. I will update if I figure it out. 

If you were to copy this code, it should play a simulation and look something like this: 

<img width="1107" alt="Screenshot 2023-04-26 at 9 08 01 PM" src="https://user-images.githubusercontent.com/124199359/234734972-437c442a-26fb-437a-a93f-a90c27352c7c.png">


