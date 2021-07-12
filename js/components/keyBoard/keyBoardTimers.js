import { keyBoard,mouseClick } from "./keyBoard.js";

var numPassword = "";
var timer = null;
var countDown = 3;
var buzzer = new Audio("audio/buzzer.wav");

  
function resetKeyPadTimer() {
  stopTimer();
   timer = setInterval(function(){
      $(".keys").off("click",mouseClick);
      $(".keys").on("click",mouseClick);
      document.removeEventListener("keydown",keyBoard);
      document.addEventListener("keydown",keyBoard);
      countDown --;
      console.log(countDown);
      if(countDown == 0){
        buzzer.play()      
      stopTimer() ;
      numPassword ="";
       $(".keys").css("background-color","#857e7e");
  buzzer.play()
}
},1000)
} ;

  function stopTimer() {
    clearInterval(timer);
    countDown=3;
  }
  

  export{resetKeyPadTimer,stopTimer}