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
    //stroke(255);
    ellipse(mouseX, mouseY, 30, 30);
    
  }
  else{
   //noStroke();
    //fill(237, 34, 93)
    fill(255);
    ellipse(mouseX, mouseY, 30, 30);
}
  println(mouseIsPressed);
}
