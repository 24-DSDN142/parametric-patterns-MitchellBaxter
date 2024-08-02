//your parameter variables go here!



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 180;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(53, 200, 252); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function



//eyes
fill(0,0,0)
ellipse(80,45,25)
ellipse(120,45,25)

//eyeballs
fill(250,250,250) // White colour for eyes
ellipse(80,45,10)
ellipse(120,45,10)

//nose
fill(0,0,0)
circle(100,68,10)

//Mouth
stroke(0,0,0)
fill(0,0,0)
arc(100, 78, 40, 50, 0, 180)

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

//Eyebrows
fill(0,0,0)
rect(60, 23, 30, 4) // Left eyebrow
rect(110, 23, 30, 4) // Right eyebrow


// Bowtie
fill(0, 0, 0); 
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
ellipse(100, 118, 22, 20);


// Whiskers
stroke(0, 0, 0); 
strokeWeight(2); 
line(90, 68, 75, 65); 
line(90, 70, 75, 70); 
line(90, 72, 75, 75); 
line(110, 68, 125, 65); 
line(110, 70, 125, 70); 
line(110, 72, 125, 75); 

// Top hat
fill(0, 0, 0); 
stroke(0, 0, 0); 
rect(70, 10, 60, 10); 
rect(85, -30, 30, 40);

}









  




 


