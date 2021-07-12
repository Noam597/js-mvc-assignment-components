import { employeeList } from "../../app/model.js";
import { table } from "../../app/view.js";
import { userClearance,managerClearance,employeeClearance } from "../personelClearance/clearance.js";
import { deleteButton,edit } from "../../components/buttons.js";
import {createAllAccounts,createEmployeeAccount} from "../createAccount/createAccount.js"

async function admin(id) {
    var list = await employeeList();
      table(list) ;
      userClearance(id);
      $("#register").click(createAllAccounts);
        $('.delete-button').click(deleteButton);
        edit();
  
  }
  
  
  async function managerContent(id) {
    var list = await employeeList();
      table(list);
      managerClearance();
      userClearance(id);
      $('#two').hide();
      $('#two').attr('disabled','disabled');
      $("#register").click(createEmployeeAccount);
        $('.delete-button').click(deleteButton);
        edit();
  }
  
  
  async function employeeContent(id) {
    var list = await employeeList();
      table(list);
      employeeClearance();
      userClearance(id);
      edit();
  }


  export{admin,managerContent,employeeContent}