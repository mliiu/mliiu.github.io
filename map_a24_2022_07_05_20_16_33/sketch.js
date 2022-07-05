var isOverCircle;
var isOverCircle2;
var isOverCircle3;
var isOverCircle4;
var isOverCircle5;
var isOverCircle6;
var isOverCircle7;
var isOverCircle8;
var isOverCircle9;
var isOverCircle10;
var isOverCircle11;
var isOverCircle12;
var isOverCircle13;
var isOverCircle14;
var isOverCircle15;
var isOverCircle16;
var isOverCircle17;
var isOverCircle18;
var isOverCircle19;
var isOverCircle20;
var isOverCircle21;
var isOverCircle22;
var isOverCircle23;
var isOverCircle24;
var isOverCircle25;
var isOverCircle26;
var isOverCircle27;
var isOverCircle28;
var isOverCircle29;
var isOverCircle30;


var step = 0.001;
var t = 0.0;
//opacity

var stopX = 29;
var stopY = 29;
var x = 0;
var startX = 20;
var startY = 20;



function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("map.png");
  imgda = loadImage("disaster.gif");
  imglb = loadImage("lb.gif");
  imgsf = loadImage("sf.gif");
  imgug = loadImage("ug.gif");
  imgf = loadImage("f.gif");
  imgcb = loadImage("cb.gif");
  imgfr = loadImage("fr.gif");
  imggb = loadImage("gb.gif");
  imggt = loadImage("gt.gif");
  imgh = loadImage("h.gif");
  imghl = loadImage("hl.gif");
  imghs = loadImage("hs.gif");
  imgm = loadImage("m.gif");
  imgoc = loadImage("oc.gif");
  imgsw = loadImage("sw.gif");
  imgsb = loadImage("sb.gif");
  imgmis = loadImage("mis.gif");
  imglab = loadImage("lab.gif");
  imgdick = loadImage("dick.png");
  imgfp = loadImage("fp.gif");
  imglh = loadImage("lh.gif");
  imgw = loadImage("w.gif");
  imgwwa = loadImage("wwa.gif");
  imgmon = loadImage("mon.gif");
  imgem = loadImage("em.gif");
  imgnight = loadImage("night.gif");
  imgpete = loadImage("pete.gif");
  img8 = loadImage("eight.gif");
  imglm = loadImage("lm.jpg");
  imgtusk = loadImage("tusk.gif");
}


function draw() {
  background(400);
  image(img, -28, 30, img.width / 1.78, img.height / 1.78);

  textSize(12);
  textFont("courier");
  stroke(0);
  strokeWeight(.8);
  textSize(20);
  fill(70);
  textSize(13);
  fill("black");
  text("Film Genre", 905, 342);
  text("Horror", 946, 370);
  text("Drama", 946, 400);
  text("Western", 946, 430);
  text("Adventure", 946, 460);
  text("Thriller", 946, 490);
  text("Noir", 946, 520);
  text("Sci-Fi", 946, 550);
  fill("#fffff000");
  stroke("gray");

  rect(860, 320, 170, 250);

  noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#F34D2C");
  ellipse(902, 365, 13, 13);
  strokeWeight(0);
  
  noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#FBAEBE");
  ellipse(902, 395, 13, 13);
  strokeWeight(0);
  
  noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#CFB6D9");
  ellipse(902, 425, 13, 13);
  strokeWeight(0);

   noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#A4794C");
  ellipse(902, 455, 13, 13);
  strokeWeight(0);
  
    noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#263C85");
  ellipse(902, 485, 13, 13);
  strokeWeight(0);
  
    noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#363535");
  ellipse(902, 515, 13, 13);
  strokeWeight(0);
  
    noFill(0);
  stroke(0);
  strokeWeight(5);
  stroke("#C0C0C0");
  ellipse(902, 545, 13, 13);
  strokeWeight(0);
  //portland

  var distance13 = dist(mouseX, mouseY, 200, 105);

  if (distance13 < 15) {
    isOverCircle13 = true;
  } else {
    isOverCircle13 = false;
  }


  noStroke();
  if (isOverCircle13 == true) {

    fill("#F34D2C")
    ellipse(110, 125, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Portland, OR", 70, 65);
    image(imgm, 30, 85, imgm.width / 2.4, imgm.height / 2.4);
    textStyle(NORMAL);
    text("Midsommar", 70, 185);
    fill(0);


  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke(0);
      strokeWeight(5);
      stroke("#F34D2C");
      ellipse(200, 105, x, x);
      strokeWeight(0);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  //bend,OR

  var distance13 = dist(mouseX, mouseY, 230, 130);

  if (distance13 < 15) {
    isOverCircle13 = true;
  } else {
    isOverCircle13 = false;
  }


  noStroke();
  if (isOverCircle13 == true) {

    fill("#CFB5D9")
    ellipse(300, 210, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Bend, OR", 270, 145);
    image(imgpete, 220, 165, imgpete.width / 3, imgpete.height / 3);
    textStyle(NORMAL);
    text("Lean on Pete", 255, 270);
    fill(0);


  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke(0);
      strokeWeight(5);
      stroke("#CFB5D9");
      ellipse(230, 130, x, x);
      strokeWeight(0);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  //seattle

  var distance25 = dist(mouseX, mouseY, 220, 65);

  if (distance25 < 15) {
    isOverCircle25 = true;
  } else {
    isOverCircle25 = false;
  }


  noStroke();
  if (isOverCircle25 == true) {

    fill("#C0C0C0")
    ellipse(150, 105, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Seattle, WA", 110, 55);
    image(imgem, 70, 65, imgem.width / 3, imgem.height / 3);
    textStyle(NORMAL);
    text("Ex Machina", 110, 165);
    fill(0);


  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke(0);
      strokeWeight(5);
      stroke("#C0C0C0");
      ellipse(220, 65, x, x);
      strokeWeight(0);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  //washington

  var distance14 = dist(mouseX, mouseY, 260, 65);

  if (distance14 < 15) {
    isOverCircle14 = true;
  } else {
    isOverCircle14 = false;
  }


  noStroke();
  if (isOverCircle14 == true) {

    fill("#CFB5D9")
    ellipse(200, 105, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Spokane, WA", 155, 55);
    image(imgsw, 130, 65, imgsw.width / 3.4, imgsw.height / 3.4);
    textStyle(NORMAL);
    text("Slow West", 160, 170);
    fill(0);


  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke(0);
      strokeWeight(5);
      stroke("#CFB5D9");
      ellipse(260, 65, x, x);
      strokeWeight(0);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  //Sacramento

  var distance = dist(mouseX, mouseY, 190, 220);

  if (distance < 15) {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }


  noStroke();
  if (isOverCircle == true) {

    fill("#FAAEBD")
    ellipse(280, 220, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Sacramento, CA", 224, 160);
    image(imglb, 200, 175, imglb.width / 3, imglb.height / 3);
    textStyle(NORMAL);
    text("Lady Bird", 240, 285);
    fill(0);


  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke(0);
      strokeWeight(5);
      stroke("#FAAEBD");
      ellipse(190, 220, x, x);
      strokeWeight(0);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  //Los Angeles


  var distance2 = dist(mouseX, mouseY, 200, 295);

  if (distance2 < 15) {
    isOverCircle2 = true;
  } else {
    isOverCircle2 = false;
  }


  noStroke();
  if (isOverCircle2 == true) {
    fill("#FAAEBD");
    noStroke();
    ellipse(220, 340, 200, 200);
    fill(255);
    textStyle(ITALIC)
    text("Los Angeles, CA", 160, 280);
    textStyle(NORMAL);
    image(imgda, 140, 290, imgda.width / 3, imgda.height / 3);
    text("The Disaster Artist", 145, 390);




  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      strokeWeight(5);
      stroke("#FAAEBD");
      ellipse(200, 295, x, x);
    }

    if (t > 1) {
      t -= step;
    }
  }


  ///NM
  var distance18 = dist(mouseX, mouseY, 390, 320);

  if (distance18 < 15) {
    isOverCircle18 = true;
  } else {
    isOverCircle18 = false;
  }


  fill(335);

  if (isOverCircle18 == true) {
    fill("#FAAEBD");
    noStroke();

    ellipse(406, 320, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Alburquerque,NM", 345, 265);
    textStyle(NORMAL);
    image(imglab, 325, 280, imglab.width / 3, imglab.height / 3);
    text("Life After Beth", 350, 385);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBD");
      ellipse(390, 320, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


//AK

  var distance30 = dist(mouseX, mouseY, 220, 434);

  if (distance30 < 15) {
    isOverCircle30 = true;
  } else {
    isOverCircle30 = false;
  }

  fill(255);

  if (isOverCircle30 == true) {
    fill("#F34E2C");
    noStroke();
    ellipse(220, 434, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Fairbanks, AK", 170, 380);
    textStyle(NORMAL);
    image(imgtusk, 140, 390, imgtusk.width / 3, imgtusk.height / 3);
    text("Tusk", 200, 490);
  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#F34E2C");
      ellipse(220, 434, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  ///Yuma, AZ
  var distance22 = dist(mouseX, mouseY, 270, 350);

  if (distance22 < 14) {
    isOverCircle22 = true;
  } else {
    isOverCircle22 = false;
  }


  fill(335);

  if (isOverCircle22 == true) {
    fill("#F34C2D");
    noStroke();

    ellipse(190, 400, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Yuma, AZ", 155, 334);
    textStyle(NORMAL);
    image(imgw, 115, 350, imgw.width / 3.3, imgw.height / 3.3);
    text("The Witch", 145, 464);
  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#F34D2C");
      ellipse(270, 350, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  ///Phoenix, AZ
  var distance8 = dist(mouseX, mouseY, 300, 345);

  if (distance8 < 15) {
    isOverCircle8 = true;
  } else {
    isOverCircle8 = false;
  }


  fill(335);

  if (isOverCircle8 == true) {
    fill("#FAAEBD");
    noStroke();

    ellipse(300, 345, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Phoenix, AZ", 255, 280);
    textStyle(NORMAL);
    image(imggb, 220, 300, imggb.width / 3.3, imggb.height / 3.3);
    text("Gloria Bell", 255, 414);
  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBD");
      ellipse(300, 345, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  ///TX san antonio
  var distance10 = dist(mouseX, mouseY, 490, 430);

  if (distance10 < 15) {
    isOverCircle10 = true;
  } else {
    isOverCircle10 = false;
  }


  fill(335);

  if (isOverCircle10 == true) {
    fill("#F34D2C");
    noStroke();

    ellipse(490, 370, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("San Antonio, TX", 430, 320);
    textStyle(NORMAL);
    image(imgh, 410, 330, imgh.width / 4.3, imgh.height / 4.3);
    text("Hereditary", 450, 434);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#F34D2C");
      ellipse(490, 430, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  ///south texas
  var distance26 = dist(mouseX, mouseY, 510, 480);

  if (distance26 < 15) {
    isOverCircle26 = true;
  } else {
    isOverCircle26 = false;
  }


  fill(335);

  if (isOverCircle26 == true) {
    fill("#F34D2C");
    noStroke();

    ellipse(500, 480, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Corpus Christi, TX", 430, 435);
    textStyle(NORMAL);
    image(imgnight, 430, 445, imgnight.width / 3.3, imgnight.height / 3.3);
    text("It Comes At Night", 430, 540);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#F34D2C");
      ellipse(510, 480, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  ///mississippi
  var distance10 = dist(mouseX, mouseY, 650, 410);

  if (distance10 < 15) {
    isOverCircle10 = true;
  } else {
    isOverCircle10 = false;
  }


  fill(335);

  if (isOverCircle10 == true) {
    fill("#A4794C");
    noStroke();

    ellipse(650, 470, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Biloxi, MS", 610, 410);
    textStyle(NORMAL);
    image(imgmis, 570, 420, imgmis.width / 4.6, imgmis.height / 4.4)
    text("Mississippi Grind", 585, 525);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#A4794C");
      ellipse(650, 410, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  ///ten
  var distance29 = dist(mouseX, mouseY, 675, 320);

  if (distance29 < 15) {
    isOverCircle29 = true;
  } else {
    isOverCircle29 = false;
  }


  fill(335);

  if (isOverCircle29 == true) {
    fill("#FAAEBE");
    noStroke();

    ellipse(675, 250, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Nashville, TN", 625, 200);
    textStyle(NORMAL);
    image(imglm, 600, 210, imglm.width / 13.5, imglm.height / 13.5)
    text("The Last Movie Star", 602, 310);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBE");
      ellipse(675, 320, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }
  ///alabama
  var distance19 = dist(mouseX, mouseY, 680, 360);

  if (distance19 < 15) {
    isOverCircle19 = true;
  } else {
    isOverCircle19 = false;
  }


  fill(335);

  if (isOverCircle19 == true) {
    fill("#363435");
    noStroke();

    ellipse(680, 360, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Birmingham, AL", 625, 300);
    textStyle(NORMAL);
    image(imgdick, 600, 310, imgdick.width / 12, imgdick.height / 13)
    text("The Death of Dick Long", 595, 408);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#363435");
      ellipse(680, 360, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  //SF
  var distance3 = dist(mouseX, mouseY, 176, 240);

  if (distance3 < 15) {
    isOverCircle3 = true;
  } else {
    isOverCircle3 = false;
  }



  if (isOverCircle3 == true) {
    fill("#FAAEBD");
    noStroke();
    ellipse(174, 240, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("SF/Oakland, CA", 120, 180);
    textStyle(NORMAL);
    image(imgsf, 90, 195, imgsf.width / 2.8, imgsf.height / 2.8);
    text("Moonlight", 135, 290, 170, 400);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke(0);
      strokeWeight(5);
      stroke("#FAAEBD");
      ellipse(176, 240, x, x);
    }

    if (t > 1) {
      t -= step;
    }
  }



  //Honolulu

  var distance4 = dist(mouseX, mouseY, 370, 474);

  if (distance4 < 15) {
    isOverCircle4 = true;
  } else {
    isOverCircle4 = false;
  }


  fill(255);

  if (isOverCircle4 == true) {
    fill("#FAAEBD");
    noStroke();
    ellipse(370, 490, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Honolulu, HI", 320, 440);
    textStyle(NORMAL);
    image(imgf, 290, 450, imgf.width / 3, imgf.height / 3);
    text("The Farewell", 320, 560);
  } else {
    fill(0);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBD");
      ellipse(370, 474, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  

  ///Montana

  var distance5 = dist(mouseX, mouseY, 340, 100);

  if (distance5 < 15) {
    isOverCircle5 = true;
  } else {
    isOverCircle5 = false;
  }


  fill(255);

  if (isOverCircle5 == true) {
    fill("#253C85");
    noStroke();
    ellipse(340, 100, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Great Falls, MT", 280, 45);
    textStyle(NORMAL);
    image(imgcb, 265, 60, imgcb.width / 1.7, imgcb.height / 1.8);
    text("Cut Bank", 306, 165);
  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#253C85");
      ellipse(340, 100, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  ///north dakota

  var distance12 = dist(mouseX, mouseY, 470, 110);

  if (distance12 < 15) {
    isOverCircle12 = true;
  } else {
    isOverCircle12 = false;
  }


  fill(255);

  if (isOverCircle12 == true) {
    fill("#CFB5D9");
    noStroke();
    ellipse(550, 100, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Bismarck, ND", 505, 40);
    textStyle(NORMAL);
    image(imgwwa, 470, 50, imgwwa.width / 3.2, imgwwa.height / 3.2);
    text("Woman Walks Ahead", 483, 150);
  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#CFB5D9");
      ellipse(470, 110, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  ///South dakota

  var distance12 = dist(mouseX, mouseY, 470, 170);

  if (distance12 < 15) {
    isOverCircle12 = true;
  } else {
    isOverCircle12 = false;
  }


  fill(255);

  if (isOverCircle12 == true) {
    fill("#363435");
    noStroke();
    ellipse(470, 170, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Sioux Falls, SD", 412, 110);
    textStyle(NORMAL);
    image(imghs, 390, 120, imghs.width / 2.9, imghs.height / 2.8);
    text("Hot Summer Nights", 405, 225);
  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#363435");
      ellipse(470, 170, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  ///iowa

  var distance24 = dist(mouseX, mouseY, 580, 200);

  if (distance24 < 15) {
    isOverCircle24 = true;
  } else {
    isOverCircle24 = false;
  }


  fill(255);

  if (isOverCircle24 == true) {
    fill("#F34C2D");
    noStroke();
    ellipse(580, 200, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Des Moines, IA", 525, 143);
    textStyle(NORMAL);
    image(imgmon, 495, 160, imgmon.width / 3.5, imgmon.height / 3.5);
    text("The Monster", 534, 255);
  } else {
    fill(0);

    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#F34D2C");
      ellipse(580, 200, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  ///NY
  var distance9 = dist(mouseX, mouseY, 844, 185);

  if (distance9 < 15) {
    isOverCircle9 = true;
  } else {
    isOverCircle9 = false;
  }


  fill(255);

  if (isOverCircle9 == true) {
    fill("#253C85");
    noStroke();
    ellipse(908, 275, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("New York, NY", 858, 215);
    textStyle(NORMAL);
    image(imggt, 825, 224, imggt.width / 2.9, imgsf.height / 2.6);
    text("Good Time", 870, 342);
  } else {
    fill(0);
    //ellipse (300,300,10,10);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#253C85");
      ellipse(844, 185, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  ///vermont
  var distance14 = dist(mouseX, mouseY, 845, 120);

  if (distance14 < 15) {
    isOverCircle14 = true;
  } else {
    isOverCircle14 = false;
  }


  fill(255);

  if (isOverCircle14 == true) {
    fill("#FAAEBD");
    noStroke();
    ellipse(775, 120, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Burlington, VT", 720, 65);
    textStyle(NORMAL);
    image(imgoc, 695, 80, imgoc.width / 4.7, imgoc.height / 4.5);
    text("Obvious Child", 720, 185);
  } else {
    fill(0);
    //ellipse (300,300,10,10);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBD");
      ellipse(845, 125, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }
  ///maine
  var distance21 = dist(mouseX, mouseY, 885, 120);

  if (distance21 < 15) {
    isOverCircle21 = true;
  } else {
    isOverCircle21 = false;
  }


  fill(255);

  if (isOverCircle21 == true) {
    fill("#F34C2D");
    noStroke();
    ellipse(980, 100, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Portland, Maine", 920, 50);
    textStyle(NORMAL);
    image(imglh, 900, 57, imglh.width / 3.2, imglh.height / 3);
    text("The Lighthouse", 927, 167);
  } else {
    fill(0);
    //ellipse (300,300,10,10);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#F34C2D");
      ellipse(885, 120, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  ///Boston
  var distance6 = dist(mouseX, mouseY, 885, 155);

  if (distance6 < 15) {
    isOverCircle6 = true;
  } else {
    isOverCircle6 = false;
  }


  fill(255);

  if (isOverCircle6 == true) {
    fill("#253C85");
    noStroke();
    ellipse(890, 160, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Boston, MA", 850, 100);
    textStyle(NORMAL);
    image(imgug, 808, 120, imgug.width / 2.9, imgsf.height / 2.9);
    text("Uncut Gems", 850, 230);
  } else {
    fill(0);
    //ellipse (300,300,10,10);


    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#253C85");
      ellipse(885, 155, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  ///gainesville, FLO
  var distance16 = dist(mouseX, mouseY, 775, 426);

  if (distance16 < 15) {
    isOverCircle16 = true;
  } else {
    isOverCircle16 = false;
  }


  fill(335);

  if (isOverCircle16 == true) {
    fill("#253C85");
    noStroke();

    ellipse(880, 416, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Gainesville, FL", 820, 365);
    textStyle(NORMAL);
    image(imgsb, 800, 370, imgsb.width / 3, imgsb.height / 3);
    text("Spring Breakers", 820, 480);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#253C85");
      ellipse(775, 426, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }


  ///orlando, FLO
  var distance20 = dist(mouseX, mouseY, 775, 450);

  if (distance20 < 15) {
    isOverCircle20 = true;
  } else {
    isOverCircle20 = false;
  }


  fill(335);

  if (isOverCircle20 == true) {
    fill("#FAAEBE");
    noStroke();

    ellipse(775, 450, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Orlando, FL", 730, 400);
    textStyle(NORMAL);
    image(imgfp, 695, 405, imgfp.width / 3, imgfp.height / 2.7);
    text("The Florida Project", 705, 508);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBE");
      ellipse(775, 450, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }




  ///nc
  var distance11 = dist(mouseX, mouseY, 780, 310);

  if (distance11 < 15) {
    isOverCircle11 = true;
  } else {
    isOverCircle11 = false;
  }


  fill(335);

  if (isOverCircle11 == true) {
    fill("#C0C0C0");
    noStroke();

    ellipse(780, 380, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Charlotte, NC", 725, 320);
    textStyle(NORMAL);
    image(imghl, 706, 340, imghl.width / 3, imghl.height / 3);
    text("High Life", 740, 445);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#C0C0C0");
      ellipse(780, 310, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  ///DC/Virginia
  var distance28 = dist(mouseX, mouseY, 790, 270);

  if (distance28 < 15) {
    isOverCircle28 = true;
  } else {
    isOverCircle28 = false;
  }


  fill(335);

  if (isOverCircle28 == true) {
    fill("#FAAEBE");
    noStroke();

    ellipse(880, 320, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Charlottesville, VA", 805, 270);
    textStyle(NORMAL);
    image(img8, 800, 275, img8.width / 3.4, img8.height / 3.4);
    text("Eighth Grade", 832, 387);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#FAAEBE");
      ellipse(790, 270, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }



  ///DC
  var distance7 = dist(mouseX, mouseY, 800, 240);

  if (distance7 < 15) {
    isOverCircle7 = true;
  } else {
    isOverCircle7 = false;
  }


  fill(335);

  if (isOverCircle7 == true) {
    fill("#253C85");
    noStroke();

    ellipse(800, 250, 200, 200);
    fill(255);
    textStyle(ITALIC);
    text("Washington, D.C.", 735, 200);
    textStyle(NORMAL);
    image(imgfr, 720, 210, imgfr.width / 3, imgfr.height / 3);
    text("First Reformed", 745, 316);
  } else {
    fill(0);



    if (t < 1.0) {
      x = startX + ((startX - stopX) * t);
      t += step;
      noFill(0);
      stroke("#253C85");
      ellipse(800, 240, x, x);
    }

    if (t > 1.0) {
      t -= step;
    }
  }

  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}



}