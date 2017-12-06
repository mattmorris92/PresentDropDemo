# PresentDropDemo
HAkron HTML5 canvas game workshop.

## We’re going to make a present dropping game!
* (Please hold your applause)
* It’s going to work in browser so we’ll need some html!
* Then the real meat and potatoes is the JS, so we’ll look at that pretty heavily!

### The HTML:
* Alright, so we've looked at this a lot before, but in case you forgot, it's the information part of a website (or in this case a really fun game)
* We'll send the file in the telegram chat!
* If you get behind, or you have a personal vendetta against telegram, you can clone the repository here on github or copy and paste the text into files you make an an IDE like [brackets](http://brackets.io/), [atom](https://atom.io/), or [sublime](https://www.sublimetext.com/)! 

### The JS:
* Welcome to the cool side of the pillow. 
* If you forgot what JS is, it's the language of things that move and function!
* That means, this is the language to make cool graphics (or even cooler, present dropping games)

## What we're gonna do:

* Okay so by now I know you're dying to know how we're going to make this gr9 game.
* We're going to start by making all the variables we're going to need throughout the code.
* Then we'll make our functions, the blocks of code that do a thing, and fill it all in with the logic we need to make a silly elf guy move left and right using the arrow keys and catch the presents. 
* So to recap, this is the functionality we need:
 * We need to pick an elf picture and load it in, we also need a present and background
 * Then we can get the game ready!
 * Functionality: Arrow keys should move the elf side to side, r key should reset game
 * Drop the presents in random locations for the elf to catch them
 * We need to have a score so we know we're doing better than our friends
 * We're also gonna add gravity, becuase hey we need that to drop stuff, right?
 * Then we need to make sure we're constantly updating the score and game area so it    doesn't freeze up
* Okay cool! So now we can make all of these requirements into functions to do all of these tasks in their own tight little bundles (The gift that keeps on giving)

## What you can do!!!!!:
* Maybe you don't like elves, or presents
* Maybe this whole christmas thing isn't for you
* So hey, we can scrap the images and just use the skeleton functionality of a thing that catches another thing.
* Sound good? : )
* So, lets go to your game.js file and snoop around!

```
// Load in the elf image
var elf = new Image;
elf.src = "assets/elf.png"; //PEEP THIS LINE, YO
elf.onload = function() {
  elfIsReady = true;
  readyGame();
}
```

* See that line with the elf image? Heck it. Let's google some other images that fits the parameter of 75 px by 75 px!
* So now we can save that image in our assets folder and change the line to the image name of our newfound buddy

```
// Load in the present image
var present = new Image;
present.src = "assets/present.png"; //Hey there friend, check out this sexy line
present.onload = function() {
  presentIsReady = true;
  readyGame();
};
```

* And then we'd do something similar to the code above! I think you can figure it out : )
* One more thing to get rid of that holiday spirit!! HECK THE SNOE
* Lets move over to our game.html file!

```
  canvas {
    border:1px solid #d3d3d3;
    background-image: url("assets/snowFall.gif"); <- this line here
  }
 ```
 
 * Lets plop in a gif and see if we like it! 
 
 It's that easy. Ask us any questions you have! Make some modifications and let us know about them!
