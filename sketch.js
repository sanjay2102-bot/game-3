var wallpaper, bg, downpipe1,downpipe2,downpipe4,dp1
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
   wallpaper=loadImage("bacgg.png")
   downpipe1= loadImage("downpipe1.png")
   downpipe2= loadImage("d1.png")
   //downpipe4= loadImage("downwardpipe4.png")
   //dwp5= loadImage("downwardpipe5small.png")
   fb= loadImage("fappy.png")
   up1= loadImage("upwardimg1.png")
  // up3= loadImage("upwardimg3.gif")
up2= loadImage("upwardpipe2img.png")


}

function setup() {
  createCanvas(1200, 500);
bg=createSprite(600,300,50,50)
bg.addImage(wallpaper);
bg.scale=1.5;
bird= createSprite(200,200,20,20)
bird.addImage(fb);
bird.scale= 0.3;

upwardGroup = createGroup();
  downwardGroup = createGroup();

  
}

function draw() {
  
  background(180);
  
  
  
  
  if(gameState === PLAY){
    bg.velocityX= - 5;
    if (bg.x < 0){
      bg.x = bg.width/2;
      
    }
    if(keyDown("space")) {
      bird.velocityY = -12;
      
  }
  bird.velocityY = bird.velocityY + 0.8

  spawnPipes();
  
      spawnupwardpipes();
      if(bird.isTouching(upwardGroup)||bird.isTouching(downwardGroup)||bird.y>500||bird.y<0){
        gameState= END
      }
  }
  else if (gameState === END) {
    bg.velocityX = 0;
    bird.velocityY = 0;
    upwardGroup.setVelocityXEach(0);
     downwardGroup.setVelocityXEach(0);    
  }
  drawSprites();
}
function spawnPipes(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(1200,460 ,10,40);
    obstacle.velocityX = -(6  );
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(downpipe1);
               break;
       case 2: obstacle.addImage(downpipe2);
               break;
       
       
       
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     //obstacle.lifetime = 300;
    
    //add each obstacle to the group
     upwardGroup.add(obstacle);
  }
 }
 function spawnupwardpipes(){
  if (frameCount % 80 === 0){
    var obstacle = createSprite(1200,50 ,10,40);
    obstacle.velocityX = -(6  );
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(up1);
               break;
       case 2: obstacle.addImage(up2);
               break;
       
       
       
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     //obstacle.lifetime = 300;
    
    //add each obstacle to the group
     downwardGroup.add(obstacle);
  }
 }
 

