const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var world,engine;
var ground;
var division,divisionHeight = 300;
var divisions = [];
var pilinkos = [];
var particles = [];

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,600);
  ground = new Ground();

  
  
  Engine.run(engine);
}

function draw() {
  background(0);  
  
  for(var k = -5; k<= width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }
  //pilinko line1
  for(var j = 45; j<= width; j = j+50){
    pilinkos.push(new Pilinkos(j,75));
  }
  for(var j = 0; j< pilinkos.length; j++){
    pilinkos[j].display();
  }
  //pilinko line2
  for(var m = 15; m<= width-10; m = m+50){
    pilinkos.push(new Pilinkos(m,175));
  }
  for(var m = 0; m< pilinkos.length; m++){
    pilinkos[m].display();
  }
  //pilinko line3
  for(var l = 45; l<= width; l = l+50){
    pilinkos.push(new Pilinkos(l,275));
  }
  for(var l = 0; l< pilinkos.length; l++){
    pilinkos[l].display();
  }
  //pilinko line4
  for(var n = 15; n<= width; n = n+50){
    pilinkos.push(new Pilinkos(n,375));
  }
  for(var n = 0; n< pilinkos.length; n++){
    pilinkos[n].display();
  }


  if(frameCount%10 === 0){
    particles.push(new Particles(random(50,width-50),10))
  }
  for(var x = 0; x< particles.length; x++){
    particles[x].display();
  }


  ground.display();
  
  drawSprites();

}