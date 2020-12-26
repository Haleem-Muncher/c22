const World = Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);

  var bop = {
    restitution:1.3
  }
  ball=Bodies.circle(200,100,20,bop);
  World.add(world,ball);
  
}

function draw() {
  background(0);
  Engine.update(engine) ;
  rectMode(CENTER);
  fill("turquoise");
  rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS);
 fill("red");
 ellipse(ball.position.x,ball.position.y,20,20);
}