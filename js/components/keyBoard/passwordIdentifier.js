import { passwordLogin } from "../../app/view.js";
import {loginCheck, passwordCheck } from "../../app/model.js";
import { admin,managerContent,employeeContent} from "../personelClearance/personel.js";
import { stopTimer } from "./keyBoardTimers.js";
import {mouseClick,keyBoard} from "./keyBoard.js"

var numPassword = "";
var userName = "";
var err = new Audio("audio/error.wav");
var success = new Audio("audio/success.wav");
var alarm = new Audio("audio/alarm.wav");
var errCounter = 0;

async function secondLogin() {
  var userNameInput = document.getElementById("loginInput")
  var res = await loginCheck(userNameInput.value);
  //result from Model
  console.log(res)
  if (res.success == true){
    passwordLogin(res.url)
    console.log(res.data.role);
    userName = res.data.userName;
    passwordController()
  }
}





async function passwordReader(numPassword) {
  var res = await passwordCheck(userName, numPassword);
          if(res.Table.length == 1 ){
            success.play()
            stopTimer();
            if (res.Table[0].role=='1:1'){
            admin(res.Table[0].id);
          }
          else if(res.Table[0].role=='2:2'){
            managerContent(res.Table[0].id);
          }
          else{
            employeeContent(res.Table[0].id);
          }
          }
          else{
            alert("code not found",err.play());
            errCounter++;
             $(".keys").css("background-color","#857e7e");
            if(errCounter == 3){
              alarm.play()
              alert("THE POLICE ARE ON THEIR WAY.....unless our Hitmen get you first")
              // init();
            }
            console.log("error number" + errCounter);
          }
}








function passwordController() {
  numPassword = ""
 $(".keys").on("click",mouseClick)
  document.addEventListener("keydown",keyBoard)
  stopTimer()

}


  export{secondLogin,passwordReader}