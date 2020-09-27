const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var Rectengle;
var Circle;

var ball_options;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   Rectengle = Bodies.rectangle(100,100,50,50);
   World.add(world, Rectengle);

   ball_options = {
       restitution : 1.0
   }

    Circle = Bodies.circle(200,300,50,ball_options);
    World.add(world,Circle);


    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw()
{
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(Rectengle.position.x,Rectengle.position.y,50,50);

    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(Circle.position.x,Circle.position.y,50,50);

}