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

function touchEnded() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  background(r, g, b);
}



