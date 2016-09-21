// Drawing with a ball
// Example 1
// by Urban Reininger aka: UrbanAtWork  Fall 2016
function setup() {
  createCanvas(500,400);
  background(237, 34, 93);
}

 function draw() {
  fill(200);

  if (mouseIsPressed){
  strokeWeight(4);
stroke(51);
    ellipse(mouseX, mouseY, 30, 30);  // sets the ellispse's center point a the x and y coordinates of the mouse x and y
  }
  else{
    fill(255);                        // fills in the ellipse with white
    ellipse(mouseX, mouseY, 30, 30);
}
  println(mouseIsPressed);            // gives feedback in the console when the mouse is not pressed.
}
