
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,right,base
function preload()
{

}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	var Options={isStatic:true}
	ground=Bodies.rectangle(750,670,1300,30,Options)
	World.add(world,ground)
	
	var Options={isStatic:true}
	left=Bodies.rectangle(1100,620,20,60,Options)
	World.add(world,left)
	
	var Options={isStatic:true}
	base=Bodies.rectangle(1030,640,150,20,Options)
	World.add(world,base)	
	
	var Options={isStatic:true}
	right=Bodies.rectangle(950,620,60,20,Options)
	World.add(world,right)
	
	ball1=new Ball(200,100)
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect (left.position.x,left.position.y,20,60) 
  rect (base.position.x,base.position.y,150,20) 
  rect (right.position.x,right.position.y,20,60) 
  rect (ground.position.x,ground.position.y,1300,30)
 ball1.display()
 
 
 
  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:13,y:-13})
}
}


