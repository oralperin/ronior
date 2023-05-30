// Pixel Woman with Facial Features

// Set the size of the canvas
const canvasWidth = 400;
const canvasHeight = 400;


// Set the size of the grid and number of pixels
const gridSize = 10;
const numPixels = Math.floor(canvasWidth / gridSize) * Math.floor(canvasHeight / gridSize);

// Colors
const blackColor = "#000000";
const skinColor = "#FFCC99";
const hairColor = "#FF3399";
const dressColor = "#3366FF";
const eyeColor = "#000000";
let currentColor = blackColor;




function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);

  // Button to clear the screen
  let clearButton = createButton("Clear");
  clearButton.position(20, canvasHeight + 20);
  clearButton.mousePressed(clearScreen);
}

function draw() {
  background(255);

  // Draw the grid of pixels
  for (let i = 0; i < numPixels; i++) {
    let col = i % (canvasWidth / gridSize);
    let row = Math.floor(i / (canvasWidth / gridSize));
    let x = col * gridSize;
    let y = row * gridSize;

    // Draw the pixel woman
    if (col >= 6 && col <= 8 && row >= 7 && row <= 12) {
      fill(skinColor);
      rect(x, y, gridSize, gridSize);
    } else if (col >= 5 && col <= 9 && row >= 13 && row <= 16) {
      fill(hairColor);
      rect(x, y, gridSize, gridSize);
    } else if (col >= 5 && col <= 9 && row >= 17 && row <= 18) {
      fill(dressColor);
      rect(x, y, gridSize, gridSize);
    } else if (col === 7 && row === 9) {
      fill(eyeColor);
      rect(x, y, gridSize, gridSize);
    } else if (col === 7 && row === 11) {
      fill(eyeColor);
      rect(x, y, gridSize, gridSize);
    } else if (col === 7 && row === 10) {
      fill(eyeColor);
      ellipse(x + gridSize / 2, y + gridSize / 2, gridSize / 2, gridSize / 2);
    } else if (col >= 6 && col <= 8 && row === 13) {
      fill(blackColor);
      rect(x, y, gridSize, gridSize);
    } else {
      fill(currentColor);
      rect(x, y, gridSize, gridSize);
    }
  }
}

function mouseClicked() {
  // Get the pixel's index in the grid
  let col = Math.floor(mouseX / gridSize);
  let row = Math.floor(mouseY / gridSize);
  let pixelIndex = col + row * (canvasWidth / gridSize);

  // Toggle the color of the clicked pixel
  if (currentColor === blackColor) {
    currentColor = skinColor;
  } else {
    currentColor = blackColor;
  }

  // Redraw the pixel
  let x = col * gridSize;
  let y = row * gridSize;
  fill(currentColor);
  rect(x, y, gridSize, gridSize);
}

function clearScreen() {
  currentColor = blackColor;
  draw();
}
// תמונה 
let img

function preload() {
  img = loadImage('Untitled-40.png'); 
}
function setup() { createCanvas(600, 600);
}
function draw()
{
function setup() { createCanvas(600,600);
}
function draw() {
background(50);
  imageMode(CENTER);
  image(img, width/2, height/2, 100 ,100);
        } 
}