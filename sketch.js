
var bg, backgroundImg;
var ironMan, ironManImg;
var bricksGroup, bricksImage;
// var edges;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
  bricksImage = loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
 
  ironMan = createSprite(460,300,20,50);
  ironMan.scale = 0.2;
  ironMan.addImage(ironManImg);
  // ironMan.debug = "true";
  ironMan.setCollider("rectangle",100,0,200,400);

  bricksGroup = new Group();

  edges = createEdgeSprites();
}

function draw() {
  //preventing ironMan from moving out of the screen
  if (ironMan.x>950){
    ironMan.x=950;
  }
  if (ironMan.x<0){
    ironMan.x=0;
  }
  if (ironMan.y>550){
    ironMan.y=550;
  }
  
  if (keyDown("up")){
    ironMan.velocityY = - 10;
  }
  
  if (keyDown("left")){
    ironMan.x = ironMan.x - 7;
  }
  
  if (keyDown("right")){
    ironMan.x = ironMan.x + 7;
  }



  generateBricks();

  for(var i = 0; i<(bricksGroup).length ;i++){
    var temp = (bricksGroup).get(i);
    if (temp.isTouching(ironMan)){
      ironMan.collide(temp);
    }
  }

  bg.velocityY = bg.velocityY + 0.2;
  
  if(bg.y>750){
    bg.y=-10;
  }

  ironMan.velocityY = ironMan.velocityY + 2;


  drawSprites(); 
}

function generateBricks() {
  if (frameCount % 20 === 0) {
    var brick = createSprite(40,10);
    brick.x = random(100,850);
    brick.addImage(bricksImage);
    brick.scale = 0.5;
    brick.velocityY = 10;
    brick.lifetime = 56;
    bricksGroup.add(brick);
    console.log(frameCount);
  }
}