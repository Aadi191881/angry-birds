const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,box1,ground;
var log1l;
function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
 box1=new Box(700,700,100,100)
 box2=new Box(900,700,100,100)
 box3=new Box(700,650,100,100)
 box4=new Box(900,650,100,100)
 pig1=new PIG(820,700)
 pig2=new PIG(820,650)
log1=new Log(700,680,300,PI/2)
log2=new Log(700,520,300,PI/2)
 ground=new Ground(600,780,1200,10)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
 box1.display()
  box2.display()
  pig1.display()
  //pig2.display()
  log1.display()
  pig2.display()
box3.display()
box4.display()
log2.display()
  ground.display()
  //drawSprites();
}