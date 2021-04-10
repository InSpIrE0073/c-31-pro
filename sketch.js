var ball;
var database;
var position; 

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database= firebase.database()
    //console.log(database);
    var ballpositionref=database.ref('ball/position');
    ballpositionref.on("value",readData);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function changePosition(x,y){
 database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})
    
}
function readData(data){
    position=data.val();
ball.x=position.x;
ball.y=position.y;

}
