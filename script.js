document.getElementById("result").style.display="none";
document.getElementById("turn1").style.color="#00ff00";
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
		document.getElementById("turn2").style.color="#00ff00";
		document.getElementById("turn1").style.color="#fff";
		p1.style.color="white";
		p1 =document.getElementById("none");
	}
	else if(b1==0){
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
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
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		p2.style.color="white";
		p2 = document.getElementById("none");
	}
	else if(b2==1){
		id=1;
		b2="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
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
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		p3 = document.getElementById("none");
	}
	else if(b3==2){
		id=1;
		b3="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p3.innerHTML = "X";
		p3.style.color="white";
	}
	winner()
}
function tic4(){
	if(id==1 && b4==3){
		id=2;
		b4="O";
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		p4.style.color="white";
		p4 = document.getElementById("none");
	}
	else if(b4==3){
		id=1;
		b4="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p4.innerHTML = "X";
		p4.style.color="white";
	}
winner()
}
function tic5(){
	if(id==1 && b5==4){
		id=2;
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		b5="O";
		p5.style.color="white";
		p5 = document.getElementById("none");
	}
	else if(b5==4){
		id=1;
		b5="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p5.innerHTML = "X";
		p5.style.color="white";
	}
winner()
}
function tic6(){
	if(id==1 && b6==5){
		id=2;
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		b6="O";
		p6.style.color="white";
		p6 = document.getElementById("none");
	}
	else if(b6==5){
		id=1;
		b6="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p6.innerHTML = "X";
		p6.style.color="white";
	}
winner()
}
function tic7(){
	if(id==1 && b7==6){
		id=2;
		b7="O";
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		p7.style.color="white";
		p7 = document.getElementById("none");
	}
	else if(b7==6){
		id=1;
		b7="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p7.innerHTML = "X";
		p7.style.color="white";
	}
winner()
}
function tic8(){
	if(id==1 && b8==7){
		id=2;
		b8="O";
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		p8.style.color="white";
		p8 = document.getElementById("none");
	}
	else if(b8==7){
		id=1;
		b8="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p8.innerHTML = "X";
		p8.style.color="white";
	}
winner()
}
function tic9(){
	if(id==1 && b9==8){
		id=2;
		document.getElementById("turn1").style.color="#fff";
		document.getElementById("turn2").style.color="#00ff00";
		b9="O";
		p9.style.color="white";
		p9 = document.getElementById("none");
	}
	else if(b9==8){
		id=1;
		b9="X";
		document.getElementById("turn1").style.color="#00ff00";
		document.getElementById("turn2").style.color="#fff";
		p9.innerHTML = "X";
		p9.style.color="white";
	}
winner()
}

function winner(){
	if(b1==b2 && b2==b3 && b1=="O"){
		document.getElementById('p1').style.background="white";
      document.getElementById('p2').style.background="white";
      document.getElementById('p3').style.background="white";
		document.getElementById("result").style.display="contents";
		
	}
	else if(b1==b4 && b4==b7 && b1=="O"){
		document.getElementById('p1').style.background="white";
      document.getElementById('p4').style.background="white";
      document.getElementById('p7').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b1==b5 && b5==b9 && b1=="O"){
		document.getElementById('p1').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p9').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b2==b5 && b5==b8 && b2=="O"){
		document.getElementById('p2').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p8').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b3==b6 && b6==b9 && b3=="O"){
		document.getElementById('p3').style.background="white";
      document.getElementById('p6').style.background="white";
      document.getElementById('p9').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b3==b5 && b5==b7 && b3=="O"){
		document.getElementById('p3').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p7').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b4==b5 && b5==b6 && b4=="O"){
		document.getElementById('p4').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p6').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b7==b8 && b8==b9 && b7=="O"){
		document.getElementById('p7').style.background="white";
      document.getElementById('p8').style.background="white";
      document.getElementById('p9').style.background="white";
		document.getElementById("result").style.display="contents";
	}
	else if(b1==b2 && b2==b3 && b1=="X"){
		document.getElementById('p1').style.background="white";
      document.getElementById('p2').style.background="white";
      document.getElementById('p3').style.background="white";
		document.getElementById('result').innerHTML="I love Vibhuti";
		document.getElementById("result").style.display="contents";
	}
	else if(b1==b4 && b4==b7 && b1=="X"){
		document.getElementById('p1').style.background="white";
      document.getElementById('p4').style.background="white";
      document.getElementById('p7').style.background="white";
		document.getElementById('result').innerHTML="Happy birthday Vibhuti, I love you so much";
		document.getElementById("result").style.display="contents";
	}
	else if(b1==b5 && b5==b9 && b1=="X"){
		document.getElementById('p1').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p9').style.background="white";
		document.getElementById('result').innerHTML="Love you my baccha sexy babu.";
		document.getElementById("result").style.display="contents";
	}
	else if(b2==b5 && b5==b8 && b2=="X"){
		document.getElementById('p2').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p8').style.background="white";
		document.getElementById('result').innerHTML="Saksham Loves Vibhuti";
		document.getElementById("result").style.display="contents";
	}
	else if(b3==b6 && b6==b9 && b3=="X"){
		document.getElementById('p3').style.background="white";
      document.getElementById('p6').style.background="white";
      document.getElementById('p9').style.background="white";
		document.getElementById('result').innerHTML="";
		document.getElementById("result").style.display="contents";
	}
	else if(b3==b5 && b5==b7 && b3=="X"){
		document.getElementById('p3').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p7').style.background="white";
		document.getElementById('result').innerHTML="Saksham loves Vibhuti a lottt";
		document.getElementById("result").style.display="contents";
	}
	else if(b4==b5 && b5==b6 && b4=="X"){
		document.getElementById('p4').style.background="white";
      document.getElementById('p5').style.background="white";
      document.getElementById('p6').style.background="white";
		document.getElementById('result').innerHTML="Vibhuti I am sorry";
		document.getElementById("result").style.display="contents";
	}
	else if(b7==b8 && b8==b9 && b7=="X"){
		document.getElementById('p7').style.background="white";
      document.getElementById('p8').style.background="white";
      document.getElementById('p9').style.background="white";
		document.getElementById('result').innerHTML="Vibhuti is soo cute";
		document.getElementById("result").style.display="contents";
	}
	else{
		draw=draw+1;
		if(draw==9){
		document.getElementById('result').innerHTML="Please Saksham ko maaf kardo";
		document.getElementById("result").style.display="contents";	
		}
	}
	
		
}
function reload(){
	location.reload();
}
