var game = document.getElementById("game");
var button = document.getElementById("button");
var rowCount = 0;
var rowCount2 = 0;
var currentColors = [-1, -1, -1, -1];
var colors = ["red", "blue", "green", "yellow", "pink", "black"];
var picked = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
function getRandomColor(){ 
	var random = Math.floor(   Math.random() * colors.length   );
	return colors[random];
}
function MakeRow (){
	rowCount++;
    var row = document.createElement("div");
    row.setAttribute("id", "row_" + rowCount);
	for(var column = 0; column < 4; column++){
		var bullet = document.createElement("div");
		bullet.setAttribute("id", "bullet_" + rowCount + "_" + column); 
		bullet.setAttribute("class", "bullet");
		bullet.setAttribute("onclick", "setColor("+column+")");
		row.appendChild(bullet);
	}
	 for(var column2 = 0; column2 < 4; column2++){
        var bullet2 = document.createElement("div");
        bullet2.setAttribute("id", "score_"+ rowCount +"_" + column2); 
        bullet2.setAttribute("class", "score");
        row.appendChild(bullet2);
    }
	game.appendChild(row);
}

function setColor(a){
    var bullet = document.getElementById("bullet_"+ rowCount +"_" + a);
    currentColors[a]++;
    if (currentColors[a] == colors.length) {
        currentColors[a] = 0;
    }
    var index = currentColors[a];
    bullet.style.backgroundColor = colors[index];
}
function StartGame(){
	MakeRow();
	changeOnclick();
}
function changeOnclick(){
	button.setAttribute("onclick", "check()");
	button.innerHTML = "check";
}
function check(){
    console.log(picked); 
    for (var bullet_column=0; bullet_column<4; bullet_column++){
        var bullet = document.getElementById("bullet_" + rowCount + "_" + bullet_column);
        var bullet_score = document.getElementById("score_" + rowCount + "_" + bullet_column)
        if ( bullet.style.backgroundColor === picked[bullet_column]) {
            bullet_score.style.backgroundColor = "red";
            //red
            console.log("true")
        } else if (picked.includes(bullet.style.backgroundColor)){
            console.log("almost true")
            bullet_score.style.backgroundColor = "black";
            //black
        } else {
            console.log("not true")
        }
    }
var countForwin = 0;
for (var i = 0; i < 4; i++) {
    if(document.getElementById("bullet_"+rowCount+"_"+i).style.backgroundColor == picked[i]){
        countForwin++;
    }
}
if(countForwin == 4){
    window.alert("Won!!!!"<br>"refers om opnieuw te spelen");
}
if (rowCount == 12){
	window.alert("you lose")
}
currentColors = [-1, -1, -1, -1];
MakeRow();
}
console.log(picked);
