
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundd
var helicopters
var medicine
var helicopter;
var medicines;
medicine.velocityY=0;
function preload (){

  city = loadImage("background.webp");
  helicopters = loadImage("heliheli.png");
  medicines = loadImage("medicine.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight-50);
 
  medicine = createSprite(400,100,50,50);
 console.log(medicine);
  medicine.addImage(medicines);
  medicine.scale=0.5;
  medicine.velocityY=0;
  medicine.velocityX=0;
 // medicine.visible=false ;
 
 helicopter = createSprite(400,100,50,50);
 helicopter.addImage(helicopters);
 helicopter.scale=0.9;




}


function draw() 
{
background(city);
planeMovement();
drop();
drawSprites();
}
function planeMovement(){

  if(keyDown("UP_ARROW")){

      helicopter.position.x= helicopter.position.x+5;
      medicine.position.x=medicine.position.x+5;

  }
}

function drop (){

  if(keyDown("space")){
console.log("ffefef")
   // medicine.visible=true
    medicine.velocityY=5  
  }
}