
var canvas = document.getElementById("canvas");
canvas.width = 620;
canvas.height = 620;
var c = canvas.getContext("2d");

var bullets=[];
var enemies=[];
var arena = new Arena()
var score = 0
var highScore = 0
var player = new Player();

function update(){
  c.clearRect(0,0,canvas.width,canvas.height);
  c.drawImage(mapImg,0,0);
  for(var i=0;i<bullets.length;i++){
    if(circCollision(bullets[i],arena)) bullets[i].render()
    bullets[i].update()
  }
  for(var i=0;i<enemies.length;i++){
    enemies[i].update()
    if(circCollision(enemies[i],arena)) enemies[i].render()
  }
  player.update()
  player.render()
  arena.update();
  renderUI();
}

this.setInterval(update,30);
this.setInterval(spawnEnemies,500);
