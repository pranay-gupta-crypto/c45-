

var backgroundImg; 
var shuttleImg; 
var missileImg;
var asteroidImg;
function preload(){
    backgroundImg = loadImage("download.png")
    shuttleImg = loadImage("space shuttle.png")
    missileImg = loadImage("missile.png")
    asteroidImg = loadImage("asteroid.png")
}

function setup(){
    createCanvas(1000,1000);
    
    missile = createSprite(500,750,40,40)
    missile.addImage("missile",missileImg);
   missile.scale = 0.4; 
   
   shuttle = createSprite(500,750,40,40)
    shuttle.addImage("shuttle",shuttleImg);
    shuttle.scale = 0.4; 

   asteroid = createSprite(500,200,20,20)
    asteroid.addImage("asteroid",asteroidImg);
   asteroid.scale = 1.0; 
}

function draw() {
  background(backgroundImg);
 if(keyIsDown(LEFT_ARROW)){
    shuttle.x = shuttle.x-10

 }

 if(keyIsDown(RIGHT_ARROW)){
  shuttle.x = shuttle.x+10

  /*if( frameCount%80===0){
      asteroid.push(new aster(700,200,50));{
    for (var j = 0; j> asteroid.length;j++)
    asteroid[j].display();

      }
  }*/
  
}

drawSprites();
}
