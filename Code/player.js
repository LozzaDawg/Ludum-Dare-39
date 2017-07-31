
Player = function(){
    this.x = 310;
    this.y = 310;
    this.r = 16;
    this.xV=0;
    this.yV=0;
    this.speed = 5;
    this.maxHp = 100;
    this.hp = this.maxHp;
    this.maxEng = 250;
    this.eng = this.maxEng;
    this.moving = false;
    this.dmg = 50;
    this.l=2;
    this.w=2;
    this.bulletRadius=10
    this.canP=true
    this.img = playerSpr;
    this.eyes = playerEyes2;
    this.glow = glow3;
    this.Leps = 3
    this.Weps = 3
}

function shootFace(){
  player.img=playerShootSpr
  setTimeout(regFace,100)
}
function regFace(){
  player.img=playerSpr
}

Player.prototype.shiftPowerL = function(){
  this.l--
  if(this.l==4) this.l=1
  if(this.l==0) this.l=3
  if(this.l==1){
    this.Leps=6
    this.glow=glow4
    arena.changeArenaSize(3)
  }
  if(this.l==2){
    this.Leps=3
    this.glow=glow3
    arena.changeArenaSize(2)
  }
  if(this.l==3){
    this.Leps=1
    this.glow=glow1
    arena.changeArenaSize(1)
  }
}

Player.prototype.shiftPowerW = function(){
  this.w++
  if(this.w==4) this.w=1
  if(this.w==1){
    this.Weps=1
    this.eyes=playerEyes2
    this.dmg=6
    this.bulletRadius=5
  }
  if(this.w==2){
    this.Weps=3
    this.eyes=playerEyes3
    this.dmg=50
    this.bulletRadius=10
  }
  if(this.w==3){
    this.Weps=6
    this.eyes=playerEyes4
    this.dmg=10000
    this.bulletRadius=15
  }
}

Player.prototype.addVel = function(){
  this.x+=this.xV;
  this.y+=this.yV;
}

controlEng = function(){
  player.eng-=player.Leps
  player.eng-=player.Weps
}

Player.prototype.friction = function(){
  if(this.moving==false){
    this.xV*=0.9
    this.yV*=0.9
  }
}

var bullXDestination=0;
var bullYDestination=0;

Player.prototype.shootBullet = function() {
  shootFace()
  toTargetX = bullXDestination - this.x;
  toTargetY = bullYDestination - this.y;

  distanceToTarget = (Math.sqrt(toTargetX * toTargetX + toTargetY * toTargetY));
  toTargetX = (toTargetX / distanceToTarget);
  toTargetY = (toTargetY / distanceToTarget);

  var bullet=new Bullet(this.x,this.y)
  bullets[bullets.length-1].xV = toTargetX
  bullets[bullets.length-1].yV = toTargetY

}

Player.prototype.testDeath = function () {
  if(this.hp>this.maxHp) this.hp=this.maxHp
  if(this.eng>this.maxEng) this.eng=this.maxEng
  if(this.hp<=0 || this.eng<=0){
    this.hp=0
    if(score>highScore) highScore=score;
    score = 0;
    for(var i=0;i<bullets.length;i++){
      bullets.splice(0,1000);
    }
    for(var i=0;i<enemies.length;i++){
      enemies.splice(0,1000);
    }
    this.x=310;
    this.y=310;
    this.l=3
    this.shiftPowerL()
    this.w=1
    this.shiftPowerW()
    this.hp=this.maxHp
    this.eng=this.maxEng
  }
}

Player.prototype.update = function(){
  this.addVel();
  this.movement();
  this.friction();
  this.testDeath();
}

Player.prototype.render = function(){
    c.fillStyle='blue';
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,2*Math.PI);
    c.fill();
    c.drawImage(this.glow,this.x-this.r-4,this.y-this.r-4);
    c.drawImage(this.img,this.x-this.r,this.y-this.r);
    c.drawImage(this.eyes,this.x-this.r,this.y-this.r);
}

this.setInterval(controlEng,1000)
