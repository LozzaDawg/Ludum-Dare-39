Arena = function(){
  this.x=310
  this.y=310
  this.r=200
  this.s=2
}

Arena.prototype.changeArenaSize = function(s){
  this.s=s;
  if(this.s==1)this.r=100;
  if(this.s==2)this.r=200;
  if(this.s==3)this.r=300;
}

Arena.prototype.render = function(){
    if(this.s==1) c.drawImage(arena1Spr,this.x-620,this.y-620)
    if(this.s==2) c.drawImage(arena2Spr,this.x-620,this.y-620)
    if(this.s==3) c.drawImage(arena3Spr,this.x-620,this.y-620)
}

Arena.prototype.changePos = function(){
  this.x=player.x
  this.y=player.y
}

Arena.prototype.update = function(){
  this.changePos()
  this.render()
}
