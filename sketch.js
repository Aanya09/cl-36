var playerCount;
var  database;
var position;
var canvas,gameState=0;
var allPlayers;
var distance=0;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
 game=new Game();
 game.getState();
 game.start();
}

function draw(){
  background("white");
  if (playerCount===4){
 game.update(1)
 if (gameState=1){
 clear(); 
 game.play(); 
 }

  }
   
  
}


