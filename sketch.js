var p = {x : 100, y : 50};
var col = {r : 255, g : 0, b : 0};

function setup() {
  createCanvas(600,400);
  background(20);
}

function draw() {
  col.r = map(mouseX, 0, width, 0, 255);
  fill(col.r, col.g, col.b);
  ellipse(p.x, 100, 24, 24);
}
