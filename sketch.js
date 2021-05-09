
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState="onSling"
var stand,box1,box2,box3,ball,chain

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stand=new Stand(600,400,200,20)
  box1=new Box(600,350,50,80)
  box2=new Box(600,300,80,40)
  box3=new Box(600,250,50,80)
	//ball
  ball=new Ball(150,200,20)
  //chain
  chain=new Chain(ball.body,{x:150,y:200})
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
  stand.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  chain.display()


}

function keyPressed(){
  if(keyCode === 32 && gameState === "launched"){
          Matter.Body.setPosition(ball.body,{ x:150 , y:20 })
          chain.attach(ball.body);
          gameState ="onSling"
      
     
  }
  
}


function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      
      return false
  }
}


function mouseReleased(){
  if(gameState==="onSling"){
      chain.fly();
      
      gameState = "launched";
  }
 
}
