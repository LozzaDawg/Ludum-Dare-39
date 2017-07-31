
var enC
Enemy = function(x,y){
    this.x = x;
    this.y = y;
    this.r = 10;
    this.xV=0;
    this.yV=0;
    this.speed = 3;
    this.maxHp = 10;
    this.hp = this.maxHp;
    this.dmg = 10;
    this.img = enemyBombSpr;
    this.eyes = enemyBombEyes1;
    this.id=enemies.length
    enemies.push(this);
}


Enemy.prototype.addVel = function(){
  this.x+=this.xV;
  this.y+=this.yV;
}

Enemy.prototype.resetEnArray = function(){
  for(var i=0;i<enemies.length;i++){
    if(enemies[i].id>this.id) enemies[i].id--;
  }
}

Enemy.prototype.tracking = function(){
    toTargetX = player.x - this.x;
    toTargetY = player.y - this.y;

    distanceToTarget = (Math.sqrt(toTargetX * toTargetX + toTargetY * toTargetY));
    toTargetX = (toTargetX / distanceToTarget);
    toTargetY = (toTargetY / distanceToTarget);

    this.xV = toTargetX
    this.yV = toTargetY
}

Enemy.prototype.stopMoving = function(){
    this.xV=0;
    this.yV=0
}

Enemy.prototype.killed = function(){
  for(var i=0; i<bullets.length;i++){
    //IF THEY COLLIDE
    if(circCollision(this,bullets[i])){
      player.eng+=5
      player.hp+=1
      score++
      if(player.dmg<100) bullets[i].death()
      this.hp-=player.dmg
      this.testDeath()
    }
  }
}

Enemy.prototype.testDeath = function(){
  if(this.hp<0){
      this.hp=0
      enemies.splice(this.id,1)
      this.resetEnArray()
  }
}

Enemy.prototype.exploded = function(){
  if(circCollision(this,player)){
    player.hp-=this.dmg;
    player.eng-=Math.ceil(this.dmg/2);
    player.testDeath()
    enemies.splice(this.id,1)
    this.resetEnArray()
  }
}


Enemy.prototype.update = function(){
    this.tracking();
    this.addVel();
    this.killed();
    this.exploded();
}

Enemy.prototype.render = function(){
    c.fillStyle='black';
    c.fillRect(this.x-this.r,this.y-this.r-10,this.r*2,4)
    c.fillStyle='red';
    c.fillRect(this.x-this.r,this.y-this.r-10,(this.r*2)*(this.hp/this.maxHp),4)
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,2*Math.PI);
    c.fill();
    c.drawImage(this.img,this.x-this.r,this.y-this.r);
    c.drawImage(this.eyes,this.x-this.r,this.y-this.r);
}
