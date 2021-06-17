const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies 

var play;
var gameState = 0;
var showLevel;

function preload(){
    titleimg = loadImage("Images/Title.png");
    level1img = loadImage("Images/crystal.png");
    level2img = loadImage("Images/candyland.png");
    level3img = loadImage("Images/space.png");
    level4img = loadImage("Images/upsidedown.png");
    level5img = loadImage("Images/monarchy.png");
    level6img = loadImage("Images/blackandwhite.png");
}

function setup(){
    createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;
    hi = createSprite(20,20,20,20);
    play = createButton("PLAY");
    test1 = new LevelPage();
    level1obj = new Level1();
}

function draw(){
    background(232, 160, 200);
    Engine.update(engine);

    if(gameState===10){
        imageMode(CENTER);
        image(level1img,200,200,250,250);
        image(level2img,450,500,250,250)
        image(level3img,700,200,250,250)
        image(level4img,950,500,250,250)
        image(level5img,1200,200,250,250)
        image(level6img,1450,500,250,250)
        test1.display();
        play.hide();
    }
    if(gameState===0){       
        play.position(750,450);
        play.size(200,50);
        play.mousePressed(test);
        imageMode(CENTER);
        image(titleimg,800,250,700,700)
    }
    
    drawSprites();
}

function test(){
    gameState = 10;
}
