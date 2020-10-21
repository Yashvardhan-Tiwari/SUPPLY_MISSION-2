var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	
	

	packageSprite=createSprite(410,220, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 210, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-8, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(410, 220 , 5 , { packageBody_option,isStatic:true});
	World.add(world, packageBody);
	
	var packageBody_option = {

		restitution: 0.8

	
		}
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 150 , {isStatic:true} );
	World.add(world, ground); 
 
    

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,1000);

  background(0);
 
   

 
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) { 
	 Matter.Body.setStatic(packageBody, false); } }

