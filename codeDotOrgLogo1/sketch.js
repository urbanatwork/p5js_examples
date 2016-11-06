// Code.org Logo made with code (p5.js code)
// by Urban Reininger - aka: UrbanAtWork - Classroom ideas - Fall 2016v2
// Example here: http://code.urbanatwork.com/p5/codeDotOrgLogo1/

// Values from a code.org sticker
// 75mm width of sticker 
// 30mm width of black "key" shape - scale 75/30 = 2.5 
// 4mm gap between black shapes - scale 75/18.75 = 4

var myFont;
function preload() {
  myFont = loadFont('assets/NTR-Regular.otf');  // not quite the right font but close.
}

function setup() {
  // First we hard coded all the values from above and
  // then created scaled values based on the window's size below
  createCanvas(windowWidth, windowHeight);

  
  drawLogo();
  
} // end of setup
  
function drawLogo(){
  var logoCenterX = width/2;  // starts drawing the rectangles in the middle of the screen
  var logoCenterY = height/2;
  
  if (width > height){			  //This if-else checks to see which is smaller, height or width to set logo size
  	var logoSize = (height/3);
  }else{
    var logoSize = (width/3);
  }
  
  var letterBox = logoSize/2.5;
  var offset = logoSize/18.75;
  var textOffset = logoSize/7 //5.357;
  
  // Let's get something on the screen already!
  background(100); 
  rectMode(RADIUS); 
  rect(logoCenterX, logoCenterY, logoSize, logoSize,(logoSize/5)); // big white outline
  fill(0);
  rect(logoCenterX-(letterBox+offset), logoCenterY-(letterBox+offset), letterBox, letterBox,(logoSize/7.5)); 	// top left black shape
  rect(logoCenterX+(letterBox+offset), logoCenterY-(letterBox+offset), letterBox, letterBox,(logoSize/7.5)); 	// top right black shape
  rect(logoCenterX-(letterBox+offset), logoCenterY+(letterBox+offset), letterBox, letterBox,(logoSize/7.5)); 	// bottom left black shape
  rect(logoCenterX+(letterBox+offset), logoCenterY+(letterBox+offset), letterBox, letterBox,(logoSize/7.5)); 	// bottom right black shape
  
  // Letters   - next version *might* use a for loop? whattayathink?
  fill(255);
  textFont(myFont);
  textSize(logoSize/2);
  textAlign(CENTER);
  text("C",logoCenterX-(letterBox+offset)-textOffset-3, logoCenterY-(letterBox+offset)+textOffset);
  text("O",logoCenterX+(letterBox+offset)-textOffset-5, logoCenterY-(letterBox+offset)+textOffset);
  text("D",logoCenterX-(letterBox+offset)-textOffset, logoCenterY+(letterBox+offset)+textOffset);
  text("E",logoCenterX+(letterBox+offset)-textOffset, logoCenterY+(letterBox+offset)+textOffset); 
  
  textSize(16);
  textAlign(CENTER);
  textFont("Courier");
  text("This is not an image, it is made with code!",width/2,height-height/10);
  text("Click to see the story and the code.",width/2,(height-height/10)+20);
}  // end of draw logo

function mousePressed() { 

  open("http://urbanatwork.com/2016/11/05/code-org-logo-made-with-code/", "_new"); 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawLogo();
}

function draw() {
	// nothing to see here
}
