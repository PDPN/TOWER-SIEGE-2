

var polygonImg, backgroundImg;
var box1, box2, box3, box4, box5, box6, box7, box8;
var box9, box10, box11, box12, box13, box14, box15, box16; 
var slingshot;
var rec1, rec2; 

function preload ()
{
 backgroundImg = loadImage("background.jpg")
 polygonImg = loadImage("polygon.jpg")
}

function setup() {
  createCanvas(800,400);
  
  
  box1 = createSprite(312,180,20,30);
  box1.shapeColor = color("yellow");
  box2 = createSprite(325,215,20,30);
  box2.shapeColor = color("yellow");
  box3 = createSprite(300,215,20,30);
  box3.shapeColor = color("yellow");
  box4 = createSprite(290,250,20,30);
  box4.shapeColor = color("yellow");
  box5 = createSprite(315,250,20,30);
  box5.shapeColor = color("yellow");
  box6 = createSprite(340,250,20,30);
  box6.shapeColor = color("yellow");
  box7 = createSprite(280,285,20,30);
  box7.shapeColor = color("yellow");
  box8 = createSprite(305,285,20,30);
  box8.shapeColor = color("yellow");
  box9 = createSprite(330,285,20,30);
  box9.shapeColor = color("yellow");
  box10 = createSprite(355,285,20,30);
  box10.shapeColor = color("yellow");
  box11 = createSprite(364,319,20,30);
  box11.shapeColor = color("yellow");
  box12 = createSprite(340,319,20,30);
  box12.shapeColor = color("yellow");
  box13 = createSprite(315,319,20,30);
  box13.shapeColor = color("yellow");
  box14 = createSprite(290,319,20,30);
  box14.shapeColor = color("yellow");
  box15 = createSprite(265,319,20,30);
  box15.shapeColor = color("yellow");
  rect1 = createSprite(315,345,130,10);
  rect1.shapeColor = color("darkblue");


  box16 = createSprite(625,100,20,30);
  box16.shapeColor = color("yellow");
  box17 = createSprite(610,135,20,30);
  box17.shapeColor = color("yellow");  
  box18 = createSprite(635,135,20,30);
  box18.shapeColor = color("yellow");
  box19 = createSprite(645,170,20,30);
  box19.shapeColor = color("yellow");
  box20 = createSprite(620,170,20,30);
  box20.shapeColor = color("yellow");
  box21 = createSprite(595,170,20,30);
  box21.shapeColor = color("yellow");
  box22 = createSprite(632,205,20,30);
  box22.shapeColor = color("yellow");
  box23 = createSprite(655,205,20,30);
  box23.shapeColor = color("yellow");
  box24 = createSprite(608,205,20,30);
  box24.shapeColor = color("yellow");
  box25 = createSprite(583,205,20,30);
  box25.shapeColor = color("yellow");
  rect2 = createSprite(620,230,100,10);
  rect2.shapeColor = color("darkblue");

  slingshot = new SlingShot(polygonImg.body,{x:200, y:50});
}

function draw() {
 
  imageMode(CENTER);
  image(backgroundImg, 400, 300, 800, 500);


   imageMode(CENTER);
  image(polygonImg, 130, 200, 30, 30);
 
    
  drawSprites();
}