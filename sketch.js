
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, bin1, bin2, bin3, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(width/2, height-5, width, 10);
	
	paper1 = new Paper(200, 675, 50);

	bin1 = new Dustbin(width-400, 675, 300, 25);
	bin2 = new Dustbin(width-550, 525, 25, 300);
	bin3 = new Dustbin(width-250, 525, 25, 300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:150, y:-150});
	}
}