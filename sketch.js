var balloon1,backgroundImg;
var database,position;

function preload(){
backgroundImg=loadImage("Hot Air Balloon-01.png")
balloonImage=loadAnimation("Hot Air Ballon-02.png","Hot Air Balloon-03.png","Hot Air Balloon-04.png")
}

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    console.log(database);

    balloon = createSprite(100,400,20,20);
    balloon.addAnimation("balloon",balloonImage);
    var balloonPosition=database.ref('balloon/position');
    balloonPosition.on("value",readPosition,showError)
balloon.scale=0.4;
}




function draw(){
    background(backgroundImg);
    if(keyDown(LEFT_ARROW)){
       balloon.x=balloon.x-10
    }
    else if(keyDown(RIGHT_ARROW)){
       balloon.x=balloon.x+10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y=balloon.y-10;
    }
    else if(keyDown(DOWN_ARROW)){
      balloon.y=balloon.y+10
    }
    drawSprites();
}



