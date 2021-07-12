import { resetKeyPadTimer } from "./keyBoardTimers.js";
import { passwordReader } from "./passwordIdentifier.js";

var beep = new Audio("audio/button.wav");
var buzzer = new Audio("audio/buzzer.wav");
var numPassword = "";
var timer2 = null;


function mouseClick(e){
  e.stopImmediatePropagation();
  beep.play()
  numPassword +=this.innerText
  $(this).css("background-color","#5e5b5b");
  console.log(numPassword);
  if(numPassword.length== 4){
    passwordAuthenticator(numPassword);
  }
  resetKeyPadTimer()
  
}

  
function keyBoard(e) {
  var x = e.key;
  var keys = document.querySelectorAll(".keys");
  for (let i = 0; i < keys.length; i++) {
            if(x==keys[i].id){
              beep.play()
          numPassword += x;
    keys[i].style.backgroundColor="#5e5b5b";
    console.log(numPassword);
    if(numPassword.length== 4){
      passwordAuthenticator(numPassword);
    }
       } 
       resetKeyPadTimer();
  };
  
}



  function passwordAuthenticator(x) {
    buzzer.muted=true
    clearTimeout(timer2)
    passwordReader(x);
    numPassword = "";
  }

export{mouseClick,keyBoard}