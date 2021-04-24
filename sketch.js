const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform
var snowArray = []
var snow, infinitesnow, snow2, snow3

function preload() {
   backgroundImg = loadImage("snow2.jpg")
}

function setup(){
    var canvas = createCanvas(700,500);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    

    for(var i=0;i<2;i++) {
        var tempSnow = new Snow(random(0,700),50,50,50)
        snowArray.push(tempSnow);
                
    }
  

    Engine.update(engine);
    var snowElement = new Snow()

    for (let flake of snowArray) {        
        flake.display(); // draw snowflake
    } 

}
