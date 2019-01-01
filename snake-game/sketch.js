var s;

function setup() {
  createCanvas(displayWidth, displayHeight);
  colorMode(RGB);
  noStroke();
  noLoop();
}

function draw() {
  background(150);
}

// mousePressed
function touchStarted() {  
}

function touchMoved() {
  ellipse(touchX, touchY, 40, 40);
}




