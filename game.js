// Setting up global vars needed for gameplay
var presentIsReady = false;
var elfIsReady = false;
var gameIsReady = false;
var gravity = 10;
var gravityIncreaseBy = 1.0;
var maxGravity = 20;
var score = 0;

var elfPosition = 0; // The starting location for the elf
var presentPosition = 1; // The starting position for the present
var presentXPos = getRandomXPos(5); // The starting xposition for the present
var presentYPos = -75; // The starting ypos for the present

// Load in the elf image
var elf = new Image;
elf.src = "assets/meow.png";
elf.onload = function() {
  elfIsReady = true;
  readyGame();
}

// Load in the present image
var present = new Image;
present.src = "assets/fish.png";
present.onload = function() {
  presentIsReady = true;
  readyGame();
};

// You don't want to start the game before the image assets have been loaded
function readyGame() {
  if (presentIsReady && elfIsReady) {
    gameIsReady = true;
    gameArea.start();
  }
}

// Setup the game area
var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// Setup the arrow controls for the game
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if (elfPosition != 0)
              elfPosition -= 75;
            break;
        case 39:
            if (elfPosition != 225) {
              elfPosition += 75;
            }
            break;
        case 82:
            // They pressed 'r', replay the game by refreshing the page
            location.reload();
            break;
    }
};

function updateGameArea() {
  // Clear the canvas
  gameArea.clear();

  // Add the score
  updateScore();

  // Update the elf's position
  gameArea.context.drawImage(elf,elfPosition,375); // Add the elf

  // Update the present's position
  presentYPos += gravity;
  gameArea.context.drawImage(present,presentXPos,presentYPos)

  // Check present pos
  if (presentYPos >= 375) {
    // If the present hits the ground... GAME OVER LOSER
    if (elfPosition != presentXPos) {
      gameOver();
      clearInterval(gameArea.interval);
    }
    else {
      // Update the score
      score += 1;
      updateScore();

      // Add a new present to catch
      presentYPos = -75
      presentXPos = getRandomXPos(5);
      gameArea.context.drawImage(present,presentXPos,presentYPos)

      // Increase the gravity
      updateGravity();

    }
  }

}

function getRandomXPos(max) {
  var xPos = 0;
  var col = Math.floor(Math.random() * max);

  // Convert the random number to pixels
  switch(col) {
    case 1:
        xPos = 0;
        break;
    case 2:
        xPos = 75;
        break;
    case 3:
        xPos = 150;
        break;
    case 4:
        xPos = 225;
        break;
    default:
        xPos = 0;
  }

  return xPos;
}

function updateGravity() {
  if (gravity <= maxGravity) {
    if ((gravity + gravityIncreaseBy) > maxGravity) {
      gravity = maxGravity;
    }
    else {
      gravity += gravityIncreaseBy;
    }
  }
}

function updateScore() {
  gameArea.context.font="30px Comic Sans MS";
  gameArea.context.fillStyle = "white";
  gameArea.context.textAlign = "center";
  gameArea.context.fillText(score, 150, 45);
}

function gameOver() {
  gameArea.context.font="30px Comic Sans MS";
  gameArea.context.fillStyle = "red";
  gameArea.context.textAlign = "center";
  gameArea.context.fillText("Game Over", 150, 225);
}
