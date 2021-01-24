
function preload() {
  Garden = loadImage("garden.png");
  jerry = loadImage("jeeryOne.png");
  jeery2 = loadImage("jeeryThree.png");
  tom = loadImage("tomTwo.png");
  tom2 = loadImage("tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(100,130,10,20); 
    tom.addImage(tom);
  

    jeery = createSprite(200,170,10,20);
   jeery.addImage(jeery);
   jeery.y = World.mouseY;
   jeery.x = World.mouseX;

   background = createSprite(0,0,1000,800);
   background.addImage(Garden);

   
}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  
    drawSprites();

    if(jeery.isTouching(tom)){
        tom.addImage(tom2); 
        jeery.addImage(jeery2);
        }



function keyPressed(){ 
}
}
