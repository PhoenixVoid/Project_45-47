var bg,bg2;
var score=0;
var bgImg;

var corona, coronaImg;
var coronaGrp;

var vaccine, vaccineImg;
var vaccineGrp;

var heart;

var girlAnimationM, girlAnimationS;
var girl;

var gameState = 0

function preload() {
  
  bgImg= loadImage("images/gameBackground.jpg");
  girlAnimationM = loadAnimation("images/girl1.png","images/girl2.png", "images/girl4.png",
  "images/girl5.png","images/girl6.png","images/girl7.png","images/girl8.png","images/girl9.png",
  "images/girl10.png","images/girl12.png","images/girl3.png","images/girl14.png","images/girl15.png",
  "images/girl16.png","images/girl17.png","images/girl18.png","images/girl19.png","images/girl20.png");

  girlAnimationS = loadAnimation("images/Idle (1).png");

  coronaImg = loadImage("images/greencorona.png");
  vaccineImg = loadImage("images/vaccine.png");

  heart = loadImage("images/healthHeart.png")
  
}

function setup() {
  createCanvas(900,500);

  bg = createSprite(450, 200, 1000, 500);
  bg.addImage(bgImg);
  bg.scale = 2
  
  
  girl = createSprite(117, 390);
  girl.addAnimation("girl_running", girlAnimationM);
  girl.scale = 0.3;
  
  vaccineGrp = new Group;
  coronaGrp = new Group;

}

function draw() {
  background("white");
  drawSprites()

  //console.log(mouseX, mouseY);
  if(gameState === 0){
    
    textSize(30)
    text("Press SPACE to Start!!", 83, 30)
  }
  
  if(keyDown("space") && gameState == 0){
    gameState = 1
    
  }
  
  if(gameState === 1){
   
    bg.velocityX = -3.5;
    if (bg.x <= 0){
      bg.x = 500;
    }

    fill("red")
    textSize(30);
    text("Lives:", 20, 70)
    image(heart, 100,25, 60, 60);
    image(heart, 170,25, 60, 60);
    image(heart, 240,25, 60, 60);

    if(keyDown("s")){
      tint(255, 128)
      image(heart, 240,25, 60, 60);

    }
    createVaccine()
    createEnemy();

    if (girl.isTouching(vaccineGrp)){

      vaccineGrp.destroyEach();

    }

  }

  
  
}

function createEnemy(){

  if (frameCount%100 === 0){

    corona = createSprite(1020, 330, 20, 20);
    corona.addImage(coronaImg);
    corona.scale = 0.4
    corona.velocityX = -4;
    corona.lifetime = 300;
    
  }
}

function createVaccine(){

  if (frameCount%430 === 0){

    vaccine = createSprite(1020, 330, 20, 20);
    vaccine.addImage(vaccineImg);
    vaccine.scale = 0.4
    vaccine.velocityX = -4;
    vaccine.lifetime = 300;

    vaccine.rotation = 80

    vaccineGrp.add(vaccine);

  }
}