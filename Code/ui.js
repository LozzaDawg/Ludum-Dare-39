
Player.prototype.healthRender = function(){
    c.fillStyle='red'
    c.fillRect(30,30,200,20)
    c.fillStyle='green'
    c.fillRect(30,30,200*(this.hp/this.maxHp),20)
    c.fillStyle='purple'
    c.fillRect(30,60,130,15)
    c.fillStyle='yellow'
    c.fillRect(30,60,130*(this.eng/this.maxEng),15)
}

function renderScore(){
  c.font = '24px PixelFont'
  c.fillStyle='white'
  c.fillText('Score: '+score,450,20)
  c.fillText('High Score: '+highScore,450,45)
  c.fillText('Weapon Energy Usage: '+player.Weps,20,canvas.height-35)
  c.fillText('Light Energy Usage: '+player.Leps,20,canvas.height-10)
}

function renderUI(){
  player.healthRender()
  renderScore()
}
