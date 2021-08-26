var id = 1;
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');
var b1=0,b2=1,b3=2,b4=3,b5=4,b6=5,b7=6,b8=7,b9=8,draw=0;
function tic1(){
	if(id==1 && b1==0){
		id=2;
		b1="O";
		p1.style.color="white";
		p1 =document.getElementById("none");
	}
	else if(b1==0){
		id=1;
		b1="X";
		p1.innerHTML = "X";
		p1.style.color="white";
	}
 winner()
}
function tic2(){
	if(id==1 && b2==1){
		id=2;
		b2="O";
		p2.style.color="white";
		p2 = document.getElementById("none");
	}
	else if(b2==1){
		id=1;
		b2="X";
		p2.innerHTML = "X";
		p2.style.color="white";
	}
winner()
}
function tic3(){
	if(id==1 && b3==2){
		id=2;
		b3='O';
		p3.style.color="white";
		p3 = document.getElementById("none");
	}
	else if(b3==2){
		id=1;
		b3="X";
		p3.innerHTML = "X";
		p3.style.color="white";
	}
	winner()
}
function tic4(){
	if(id==1 && b4==3){
		id=2;
		b4="O";
		p4.style.color="white";
		p4 = document.getElementById("none");
	}
	else if(b4==3){
		id=1;
		b4="X";
		p4.innerHTML = "X";
		p4.style.color="white";
	}
winner()
}
function tic5(){
	if(id==1 && b5==4){
		id=2;
		b5="O";
		p5.style.color="white";
		p5 = document.getElementById("none");
	}
	else if(b5==4){
		id=1;
		b5="X";
		p5.innerHTML = "X";
		p5.style.color="white";
	}
winner()
}
function tic6(){
	if(id==1 && b6==5){
		id=2;
		b6="O";
		p6.style.color="white";
		p6 = document.getElementById("none");
	}
	else if(b6==5){
		id=1;
		b6="X";
		p6.innerHTML = "X";
		p6.style.color="white";
	}
winner()
}
function tic7(){
	if(id==1 && b7==6){
		id=2;
		b7="O";
		p7.style.color="white";
		p7 = document.getElementById("none");
	}
	else if(b7==6){
		id=1;
		b7="X";
		p7.innerHTML = "X";
		p7.style.color="white";
	}
winner()
}
function tic8(){
	if(id==1 && b8==7){
		id=2;
		b8="O";
		p8.style.color="white";
		p8 = document.getElementById("none");
	}
	else if(b8==7){
		id=1;
		b8="X";
		p8.innerHTML = "X";
		p8.style.color="white";
	}
winner()
}
function tic9(){
	if(id==1 && b9==8){
		id=2;
		b9="O";
		p9.style.color="white";
		p9 = document.getElementById("none");
	}
	else if(b9==8){
		id=1;
		b9="X";
		p9.innerHTML = "X";
		p9.style.color="white";
	}
winner()
}

function winner(){
	if(b1==b2 && b2==b3 && b1=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b1==b4 && b4==b7 && b1=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b1==b5 && b5==b9 && b1=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b2==b5 && b5==b8 && b2=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b3==b6 && b6==b9 && b3=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b3==b5 && b5==b7 && b3=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b4==b5 && b5==b6 && b4=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b7==b8 && b8==b9 && b7=="O"){
		alert("player 1  O won");
		location.reload();
	}
	else if(b1==b2 && b2==b3 && b1=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b1==b4 && b4==b7 && b1=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b1==b5 && b5==b9 && b1=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b2==b5 && b5==b8 && b2=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b3==b6 && b6==b9 && b3=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b3==b5 && b5==b7 && b3=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b4==b5 && b5==b6 && b4=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else if(b7==b8 && b8==b9 && b7=="X"){
		alert("player 2  X won");
		location.reload();
	}
	else{
		draw=draw+1;
		if(draw==9){
			alert("match draw");
			location.reload;	
		}
	}
	
		
}
