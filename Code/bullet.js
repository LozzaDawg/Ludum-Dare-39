
Bullet = function(x,y){
  this.x=x
  this.y=y
  this.r=player.bulletRadius
  this.speed=10;
  this.xV=0
  this.yV=0
  this.img
  this.pen=false
  if(this.r>11)this.pen=true
  this.id=bullets.length
  bullets.push(this);
}

Bullet.prototype.death = function(){
  bullets.splice(this.id,1)
  for(var i=0;i<bullets.length;i++){
    if(bullets[i].id>this.id) bullets[i].id--;
  }
}

Bullet.prototype.render = function(){
  // c.fillStyle='green'
  // c.beginPath();
  // c.arc(this.x,this.y,this.r,0,2*Math.PI);
  // c.fill()
  if(this.r==5) this.img=bull1
  if(this.r==10) this.img=bull2
  if(this.r==15) this.img=bull3
  c.drawImage(this.img,this.x-this.r,this.y-this.r)
}

Bullet.prototype.addVel = function(){
    this.x+=this.xV*this.speed;
    this.y+=this.yV*this.speed;
}

Bullet.prototype.testDeath = function(){
  var diffx = Math.round(this.x - player.x);
	var diffy = Math.round(this.y - player.y);
	var distanceBetweenPoints = Math.sqrt((diffx*diffx) + (diffy*diffy));
  // console.log(distanceBetweenPoints)
  if(distanceBetweenPoints>400){
    this.death()
  }
}

Bullet.prototype.update = function(){
    this.addVel();
    this.testDeath()
}
