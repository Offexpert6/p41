const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var ummm, umbrella1, umbrella2, umbrella3, umbrella4, umbrella5, umbrella6, umbrella7, umbrella8

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    umbrella1 = loadImage("walking Frame/walking_1.png");
    umbrella2 = loadImage("walking Frame/walking_2.png");
    umbrella3 = loadImage("walking Frame/walking_3.png");
    umbrella4 = loadImage("walking Frame/walking_4.png");
    umbrella5 = loadImage("walking Frame/walking_5.png");
    umbrella6 = loadImage("walking Frame/walking_6.png");
    umbrella7 = loadImage("walking Frame/walking_7.png");
    umbrella8 = loadImage("walking Frame/walking_8.png");

    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    ummm = createSprite(umbrella.x,umbrella.y+70,5,5)

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0); 

    if(frameCount%20===0){
        switch(2){
            case 1: ummm.addImage(umbrella1);
            break;
            case 2: ummm.addImage(umbrella2);
            break; 
            case 3: ummm.addImage(umbrella3);
            break;
            case 4: ummm.addImage(umbrella4);
            break;
            case 1: ummm.addImage(umbrella5);
            break;
            case 2: ummm.addImage(umbrella6);
            break; 
            case 3: ummm.addImage(umbrella7);
            break;
            case 4: ummm.addImage(umbrella8);
            break;
            default: break;
        }
    }
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
    console.log(thunderCreatedFrame)
    drawSprites();
}   

