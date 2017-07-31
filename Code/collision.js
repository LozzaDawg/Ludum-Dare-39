
function circCollision (ea,eb){
	var diffx = Math.round(ea.x - eb.x);
	var diffy = Math.round(ea.y - eb.y);
	var distanceBetweenPoints = Math.sqrt((diffx*diffx) + (diffy*diffy));
	var combinedRadius = ea.r + eb.r;
	if (distanceBetweenPoints < combinedRadius){
		return true;
	}
	return false
}



function futureCircCollision (ea,eb){
	var diffx = Math.round((ea.x + ea.xV) - (eb.x + eb.xV));
	var diffy = Math.round((ea.y + ea.yV) - (eb.y + eb.yV));
	var distanceBetweenPoints = Math.sqrt((diffx*diffx) + (diffy*diffy));
	//console.log("diffx :"+diffx+", diffy: "+diffy+". Distance: "+distanceBetweenPoints);
	var combinedRadius = ea.r + eb.r;
	if (distanceBetweenPoints < combinedRadius){
		return true;
	}
	return false
}
