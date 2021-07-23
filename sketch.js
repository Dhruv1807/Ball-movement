var ball

function preload(){
  basketball = loadImage("basketball.png");
}

function setup() {
  createCanvas(400,400);
  ball = createSprite(200, 200, 30, 30);
  ball.addImage(basketball);
  ball.scale = 0.5;
}

function draw() 
{
  background(30);
  if (keyDown(LEFT_ARROW)){
    ball.x -= 4;
  }
  if (keyDown(RIGHT_ARROW)){
    ball.x += 4;
  }
  if (keyDown(UP_ARROW)){
    ball.y -= 4;
  }
  if (keyDown(DOWN_ARROW)){
    ball.y += 4;
  }
  drawSprites();
}




