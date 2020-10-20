var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,20,20);
  wall=createSprite(1000,200,60,height/2);

  weight=random(400,1000)
  speed=random(55,90);
 
  
car.velocityX=speed

}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    deformation=(0.5*weight*speed*speed)/22500
    car.velocityX=0
    if(deformation<100){
      car.shapeColor="green"
    }
  
  if(deformation>100&&deformation<180){
    car.shapeColor="yellow"
  }

if(deformation>180){
  car.shapeColor="red"
}
  }


  drawSprites();
}