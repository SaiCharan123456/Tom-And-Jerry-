var bgImg
var Tom,Jerry;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    Tom1=loadImage("images/cat1.png");
    Jerry1=loadImage("images/mouse1.png");
    Tom2=loadAnimation("images/cat2.png","images/cat3.png");
    Jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    Tom3=loadImage("images/cat4.png");
    Jerry3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,657);
    //create tom and jerry sprites here
    Tom=createSprite(850,550,50,50);
    Tom.addImage(Tom1);
    Tom.scale=0.2;
    Tom.setCollider("rectangle",0,0,1200,1000);
    
    Jerry=createSprite(100,500,50,50);
    Jerry.addImage(Jerry1);
    Jerry.scale=0.2;
    Jerry.setCollider("rectangle",0,0,800,1000);
}

function draw() {
//Tom.debug = true;
//Jerry.debug = true;
Tom.addImage(Tom3);
Jerry.addImage(Jerry3);
console.log(Tom.x + Jerry.x < Tom.width/2+Jerry.width/2)
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
      if(Tom.x + Jerry.x < Tom.width/2+Jerry.width/2+10){
         Tom.addImage("stop",Tom3); 
         Tom.changeImage("stop");
         Tom.velocityX=0;
         Tom.y=500;
         Jerry.addImage("stop1",Jerry3);
         Jerry.changeImage("stop1")
     }
     else {
        Tom.addImage(Tom1);
        Jerry.addImage(Jerry1);
     }
     keyPressed()   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyDown(LEFT_ARROW)){
       Tom.addAnimation("runing",Tom2);
       Tom.changeAnimation("runing");
       //Tom.frameDelay = 25;
       Tom.velocityX=-3;

       Jerry.addAnimation("tesing",Jerry2);
       Jerry.changeAnimation("tesing");
   }

}
