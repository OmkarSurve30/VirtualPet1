var dog, happyDog, database, foodS, foodStock, dogImage, happyDogImage, position, database;

function preload()
{
 dogImage = loadImage ("images/dogimg.png");
 happyDogImage = loadImage ("images/dogimg1.png");
}

function setup() {
 database = firebase.database();
 
  
  createCanvas(500, 500);
  
  dog = createSprite(250, 350, 10, 10);
  dog.addImage(dogImage);
  dog.scale=0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock); 

  
  
}


function draw() { 
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }


  drawSprites();
  textSize(15);
  fill("white");
  stroke("red");
  text("press UP_ARROW to feed the dog", 200, 50);



}

function readStock(data){
  foodS = data.val();
}


function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  })
}


