
function stopClickforABit(){
  canClick = false
  setTimeout(startclickagain,30)
}
function startclickagain(){
  canClick = true
}

var canClick=true;
var mousePos
var left, right
var left = 0
var right = 2


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


canvas.addEventListener('mousemove', function(evt) {
  mousePos = getMousePos(canvas, evt);
}, false)

canvas.addEventListener('mouseup', function(evt) {
  stopClickforABit()
  // if(evt.button === right){
  // }
  if(evt.button === left){
    bullXDestination = mousePos.x
    bullYDestination = mousePos.y
    player.shootBullet();
  }
}, false)
