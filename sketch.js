
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var sprite;

function setup()
{
  createCanvas(400,400);

sprite= createSprite(100,200,10,20);

}

function draw() 
{
  background(51);
  drawSprites();
 
}

