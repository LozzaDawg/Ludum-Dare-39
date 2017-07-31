
function randomNumber(min,max){
  return Math.floor((Math.random()*(max-min)+min));
}

spawnEnemies = function(){
  var num = Math.random()*100
  var enX=0
  var enY=0
  if(num>0 && num<25){
    enX=randomNumber(-100,canvas.width+200)
    enY=-100
  }
  if(num>25 && num<50){
    enX=randomNumber(-100,canvas.width+200)
    enY=canvas.height+100
  }
  if(num>50 && num<75){
    enX=-100
    enY=randomNumber(-100,canvas.height+200)
  }
  if(num>75 && num<100){
    enX=canvas.width+100
    enY=randomNumber(-100,canvas.height+200)
  }
  var enemy = new Enemy(enX,enY);
}
