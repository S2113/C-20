var catImg1;
var catImg2;
var gardenImg;
var cat;
var mouse;
var mouseImg1;
var mouseImg2;
var garden;
//var touching="false";

function preload() {
    //load the images here
  catImg1=loadAnimation("cat1.png");
  catImg2=loadAnimation("cat2.png","cat3.png");
  catImg3=loadAnimation("cat4.png");
  gardenImg=loadImage("garden.png");
  mouseImg1=loadAnimation("mouse1.png","mouse2.png","mouse3.png");
  mouseImg2=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  
  garden=createSprite(490,400,1000,800);
  garden.addImage(gardenImg);
  garden.scale=1.2;
  
  cat=createSprite(900,700,20,20);
  cat.addAnimation("ani1",catImg1);
  cat.addAnimation("ani2",catImg2);
  cat.addAnimation("ani3",catImg3);
  cat.scale=0.15;
  //cat.setCollider("rectangle",0,0,1250,800)
  
  mouse=createSprite(150,700,20,20);
  mouse.addAnimation("ani1*",mouseImg1);
  mouse.addAnimation("ani2*",mouseImg2);
  mouse.scale=0.15;
 //mouse.setCollider("rectangle",0,0,800,800)

}

function draw() {

    background(220);
    //Write condition here to evalute if tom and jerry collide

   if(cat.x-mouse.x<cat.width/2-mouse.width/2)
     {
     
       cat.changeAnimation("ani3",catImg3);
       cat.velocityX=0;
       mouse.changeAnimation("ani2*",mouseImg2);
       //touching="true;"
     }
  
    drawSprites();
  
    cat.debug=true
    mouse.debug=true

  
}


function keyPressed(){

  if(keyCode===LEFT_ARROW )
    {
      cat.velocityX=-5;
      cat.changeAnimation("ani2",catImg2);
    }
  //For moving and changing animation write code here


}
