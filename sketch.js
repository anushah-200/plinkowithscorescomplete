var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var particle
var turn=0
var gameState="start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",40,550)
 text("500",120,550)
 text("500",200,550)
 text("500",280,550)
 text("100",360,550)
 text("100",440,550)
 text("100",520,550)
 text("200",600,550)
 text("200",680,550)
 text("200",760,550)

 line(400,470,800,10)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();}

     if(particle!=null){
       particle.display()
       if(particle.body.position.y>760){
         if(particle.body.position.x<280){
           score=score+500
           particle=null
           if(turn>=5) gameState="end";
         }
       }
     }
     if(particle!=null){
      particle.display()
      if(particle.body.position.y>760){
        if(particle.body.position.x>281 && particle.body.position.x<520){
          score=score+100
          particle=null
          if(turn>=5) gameState="end";
        }
      }
    }
    if(particle!=null){
      particle.display()
      if(particle.body.position.y>760){
        if(particle.body.position.x>521 && particle.body.position.x<760){
          score=score+200
          particle=null
          if(turn>=5) gameState="end";
        }
      }
    }
if(gameState==="end"){
  textSize(50)
  fill("white")
  text("GameOver",450,240)
}
 
  if(turn===6) {
    gameState==="end"
   
  }
  
}
function mousePressed()
{
  if(gameState!=="end"){
    turn++
    particle= new Particle(mouseX,10,10,10)
  }
}

