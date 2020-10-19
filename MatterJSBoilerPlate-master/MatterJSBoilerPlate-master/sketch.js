//why is the ball not falling
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var engine , world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var options = {
	isStatic : false,
	restitution : 0.3,
	fraction:0.5,
	density :1.2

}
	//Create the Bodies Here.
	ball = Bodies.circle(100, 100, 20, options)
	World.add(world, ball)
	ground = new Ground(400, 350, 800, 50)
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ellipse(100, 100 ,20)
 rect(400, 350, 800, 50)
 drawSprites();
}



