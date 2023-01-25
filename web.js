var player1_name= localStorage.getItem("user1");
var player2_name= localStorage.getItem("user2");
document.getElementById("player1_name").innerHTML= player1_name;
document.getElementById("player2_name").innerHTML= player2_name;


var player1_score=0;
var player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=pplayer2_score;


document.getElementById("player_question").innerHTML= "Question Turn:"+player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn:"+player2_name;

function Send() {
  Num_1= document.getElementById("n1").value;
  Num_2= document.getElementById("n2").value
  Ans= parseInt(Num_1)*parseInt(Num_2);
Question="<h4>"+Num_1+"x"+Num_2+"= </h4>"
    Input= "<br>Answer: <input type='number' id= 'Answer_input'>";
    Checking= "<br><br> <button class= 'btn btn-warning' onclick= 'Check()'>Check</button>";
row= Question+Input+Checking;
document.getElementById("output").innerHTML= row;
document.getElementById("n1").value="";
document.getElementById("n2").value= "";
document.getElementById("checking-label").innerHTML=""
}

var q_turn= "player_1";
var a_turn= "player_2";

function Check() {
  given_answer= document.getElementById("Answer_input").value;
 
  if (given_answer==Ans) {
    document.getElementById("checking-label").innerHTML="You got the right answer";
   if (a_turn=="player1") {
    player1_score= player1_score+1;
    document.getElementById("player1_score").innerHTML= player1_score;
   } else {
    player2_score= player2_score+1;
    document.getElementById("player2_score").innerHTML= player2_score;
   } 
  }
  if(given_answer!=Ans){
    if (a_turn=="player_1") {
      document.getElementById("checking-label").innerHTML="You got the wrong answer, the right answer is "+Ans+"!";
      player1_score= player1_score-1;
document.getElementById("player1_score").innerHTML=player1_score;
    }else{
      document.getElementById("checking-label").innerHTML="You got the wrong answer, the right answer is "+Ans+"!";
    player2_score= player2_score-1;
    document.getElementById("player2_score").innerHTML=player2_score;
    }
   }

   if (q_turn=="player1") {
    q_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
  }else{
q_turn="player1";
document.getElementById("player_question").innerHTML="Question turn: "+player2_name;
 }
  
 if (a_turn=="player1") {
 a_turn="player2";
  document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;
}else{
a_turn="player1";
document.getElementById("player_answer").innerHTML="Answer turn: "+player1_name;
} 
document.getElementById("output").innerHTML="";
}