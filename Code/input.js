
keys = []

Player.prototype.movement = function(){
    this.moving=false;
		if(keys[87]){
			if(this.yV > -1*this.speed){
				this.yV--;
        this.moving=true;
			}
		}
		if(keys[83]){
			if(this.yV < this.speed){
				this.yV++;
        this.moving=true;
			}
		}
		if(keys[68]){
			if(this.xV < this.speed){
				this.xV++;
        this.moving=true;
			}
		}
		if(keys[65]){
			if(this.xV > -1*this.speed){
				this.xV--;
        this.moving=true;
			}
		}
    if(keys[81]){
      if(this.canP==true){
        stopPforABit()
        player.shiftPowerL();
      }
    }
    if(keys[69]){
      if(this.canP==true){
        stopPforABit()
        player.shiftPowerW();
      }
    }
}


function stopPforABit(){
  player.canP = false
  setTimeout(startPAgain,200)
}
function startPAgain(){
  player.canP = true
}


document.body.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
})

document.body.addEventListener('keyup', function (e) {
	keys[e.keyCode] = false;
})
