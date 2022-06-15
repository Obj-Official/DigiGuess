let difficulty = 0;
let range = 0;
let counter = 5;
let guessentry = 0;
let guessNumber =0;
let gamewon = 0;
let gtemp =0;
let themevar = 0;

function easy(){
if (difficulty==0){
 difficulty = 1;
 range = 21;
 document.getElementById("modee").innerHTML="Easy | 1 - 20";
 guessNumber = Math.floor( Math.random() * range);
 document.getElementById("easybtn").style.backgroundColor="indigo";
 }else if (difficulty!=0){
 window.alert("Difficulty mode has already been set, click reset to set new difficulty")
 }
}

function medium(){
if (difficulty==0){
 difficulty = 2;
 range = 51;
 document.getElementById("modee").innerHTML="Medium | 1 - 50";
 guessNumber = Math.floor( Math.random() * range);
 document.getElementById("mediumbtn").style.backgroundColor="indigo";
  }else if (difficulty!=0){
 window.alert("Difficulty mode has already been set, click reset to set new difficulty")
 }
}

function hard() {
if (difficulty==0){
 difficulty = 3;
 range = 101;
 document.getElementById("modee").innerHTML="Hard | 1 - 100";
 guessNumber = Math.floor( Math.random() * range);
 document.getElementById("hardbtn").style.backgroundColor="indigo";
  }else if (difficulty!=0){
 window.alert("Difficulty mode has already been set, click reset to set new difficulty")
 }
}

function cleartxt(){
    document.getElementById("numberguess").value ="";
}

function reset(){
    difficulty = 0;
    range = 0;
    counter = 5;
    guessentry = 0;
    guessNumber =0;
    gamewon=0;
     document.getElementById("try1").innerHTML=counter;
     document.getElementById("modee").innerHTML= "None";
     document.getElementById("alertt").innerHTML= "";
     document.getElementById("easybtn").style.backgroundColor="orange";
 document.getElementById("mediumbtn").style.backgroundColor="orange";
 document.getElementById("hardbtn").style.backgroundColor="orange";
     cleartxt();
     document.getElementById("alertt").style.backgroundColor="orange";
     cleartxt();
}

function guess(){
if (difficulty==0){
    window.alert("You have not set game difficulty mode!");
    cleartxt();
}else if (difficulty!=0 && gamewon == 1){
    window.alert("You already won, Hurray! restart game");
    reset();
}else if  (document.getElementById("numberguess").value == ""){
   window.alert("Enter your guess!");
}else if (difficulty!=0 && counter>0){
 guessentry = document.getElementById("numberguess").value;
  if  (guessentry == guessNumber){
 document.getElementById("alertt").innerHTML="Correct! you guessed right🥳";
 document.getElementById("alertt").style.backgroundColor="green";
 gamewon=1;
   }else if (guessentry>guessNumber){
 document.getElementById("alertt").innerHTML="∅ Sorry! Guess too high";
 document.getElementById("alertt").style.backgroundColor="red";
 cleartxt();
   }else if(guessentry<guessNumber){
 document.getElementById("alertt").innerHTML="∅ Sorry! Guess too low";
 document.getElementById("alertt").style.backgroundColor="red";
 cleartxt();
   }
    counter-=1;
 document.getElementById("try1").innerHTML=counter;
}
if (difficulty!=0 && counter==0 && gamewon != 1){
    gtemp = guessNumber;
    reset();
    window.alert("Game over! You have exhausted your attempts, reset and restart game");
    document.getElementById("alertt").innerHTML="Right number: "+ gtemp;
 document.getElementById("alertt").style.backgroundColor="purple";
}
}

function gameinfo(){
    window.alert("Programmed by OBJ & COBEN ©ObjPrime")
}

function helpdirectives(){
    window.alert("To play this game, set the difficuly mode at the top left corner. Easy ranges between 1-20, medium 1-50, hard 1-100. Guess a number, enter it and click the Guess! button. You have just five attempts, Godspeed!")
}

function changetheme(){
    if (themevar ==0){
    document.getElementById("rangeid").style.backgroundColor="black";
    document.getElementById("bgdiv").style.backgroundColor="rgb(44, 44, 44)";
    document.getElementById("big1").style.backgroundColor="black";
    document.getElementById("extradiv").style.backgroundColor="rgb(44, 44, 44)";
    themevar = 1;
}else if(themevar ==1) {
       document.getElementById("rangeid").style.backgroundColor="maroon";
    document.getElementById("bgdiv").style.backgroundColor="dodgerblue";
    document.getElementById("big1").style.backgroundColor="maroon";
    document.getElementById("extradiv").style.backgroundColor="dodgerblue";
    themevar = 2;
}else if(themevar ==2) {
       document.getElementById("rangeid").style.backgroundColor="hotpink";
    document.getElementById("bgdiv").style.backgroundColor="pink";
    document.getElementById("big1").style.backgroundColor="hotpink";
    document.getElementById("extradiv").style.backgroundColor="pink";
    themevar = 3;
}else if(themevar ==3) {
       document.getElementById("rangeid").style.backgroundColor="indigo";
    document.getElementById("bgdiv").style.backgroundColor="maroon";
    document.getElementById("big1").style.backgroundColor="indigo";
    document.getElementById("extradiv").style.backgroundColor="maroon";
    themevar = 0;
}
}