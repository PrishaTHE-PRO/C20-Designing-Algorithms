var frect,mrect;


function setup() {
  createCanvas(1200,800);
frect = createSprite(500,200,50,80);
mrect = createSprite(400,200,80,30);

frect.shapeColor="blue";
mrect.shapeColor="yellow";

mrect.debug=true;
frect.debug=true;

frect.velocityY=5;
mrect.velocityY=-5;
}

function draw() {
  background(0);  

  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  /*if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    &&mrect.y-frect.y<frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor="red";
    frect.shapeColor="pink";
  }
  else{
    frect.shapeColor="blue";
mrect.shapeColor="yellow";
  }*/

  if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2){
      mrect.velocityX=mrect.velocityX*(-1);
      frect.velocityX=frect.velocityX*(-1);
    }

    if(mrect.y-frect.y<frect.height/2+mrect.height/2
      && frect.y-mrect.y<frect.height/2+mrect.height/2){
        mrect.velocityY=mrect.velocityY*(-1);
        frect.velocityY=frect.velocityY*(-1);
      }
  drawSprites();
}