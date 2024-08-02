//your parameter variables go here!

let eye = 35; //changes size of black eye
let mouth = 35; //Changes size of mouth and tounge
let whites = 23; //Changes size of whites
//Changes colour of the head
let r1 = 164
let g1 = 82
let b1 = 45
let hat = 100 //changes the length of the top hat
let redbowtie =true //if true bowtie is red if false bowtie is blue


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 150;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(100, 200, 252); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

// Head
fill(r1, g1, b1); 
stroke(160, 82, 45);
ellipse(100, 68, 100, 120);

// Top hat
fill(0, 0, 0); 
stroke(0, 0, 0); 
rect(50, 20, hat, 10); 
rect(70, 0, 60, 30); 

//eyes
fill(0,0,0)
ellipse(80,45,eye)
ellipse(120,45,eye)

//eyeballs
fill(250,250,250) 
ellipse(85,42,whites)
ellipse(125,42,whites)

//lower parts of the eyeballs
ellipse(73,53,8)
ellipse(113,53,8)

//nose
fill(0,0,0)
circle(100,70,10)

//Mouth
stroke(0,0,0)
fill(0,0,0)
arc(100, 80, mouth, 35, 0, 180)

//Tongue
fill(255,105,180) // Pink colour for the tongue
arc(100, 90, 20, 20, 0, 180)

// Ears
fill(0, 0, 0);
stroke(0, 0, 0);
beginShape();
vertex(155, 80); // Flipped horizontally
bezierVertex(190, 30, 120, 20, 150, 60); // Flipped horizontally
endShape(CLOSE);
beginShape();
vertex(45, 80); // Flipped horizontally
bezierVertex(10, 30, 80, 20, 50, 60); // Flipped horizontally
endShape(CLOSE);

// Bowtie
if(redbowtie){
  fill(252,3, 15)
}
else{
  fill(66, 135, 245)
}
stroke(0, 0, 0); 

// Left part of the bowtie
beginShape();
vertex(80, 110);
bezierVertex(60, 100, 60, 130, 80, 120);
endShape(CLOSE);

// Right part of the bowtie
beginShape();
vertex(120, 110);
bezierVertex(140, 100, 140, 130, 120, 120);
endShape(CLOSE);

// Center knot of the bowtie
if (eye > 39) {
  ellipse(100, 118, 35, 25); // Increase the size of the bowtie
} else {
  ellipse(100, 118, 22, 20); 
}


// Whiskers
stroke(0, 0, 0); 
strokeWeight(2);
line(90, 68, 60, 65); 
line(90, 70, 60, 70); 
line(90, 72, 60, 75); 
line(110, 68, 140, 65); 
line(110, 70, 140, 70); 
line(110, 72, 140, 75);

//paws
fill(r1, g1, b1)
stroke(160, 82, 45)
ellipse(50,130,25,25)
ellipse(150,130,25,25)

//middle paws
fill(0,0,0)
stroke(0,0,0)
ellipse(50,135,15,15)
ellipse(150,135,15,15)


//hand/nails
fill(0,0,0)
stroke(0,0,0)
//left
ellipse(60,120,8,8)
ellipse(50,117,8,8)
ellipse(40,120,8,8)
//right
ellipse(160,120,8,8)
ellipse(150,117,8,8)
ellipse(140,120,8,8)



}









  




 


