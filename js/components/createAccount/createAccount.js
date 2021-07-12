import { createAccount } from "../../app/model.js";
import {admin,managerContent} from "../personelClearance/personel.js";

function createAllAccounts() {
    document.getElementById("form").addEventListener("submit",async function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if(await createAccount(this)){
         admin();
    }
    })
  }
  
  
  
  function createEmployeeAccount() {
    document.getElementById("form").addEventListener("submit",async function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if(await createAccount(this)){
        managerContent();
    }
    })
  }

  export{createAllAccounts,createEmployeeAccount}