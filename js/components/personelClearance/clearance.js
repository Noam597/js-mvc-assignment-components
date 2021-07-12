



 function managerClearance() {
    $('.role').each((i,role)=>{
      console.log("this is role number " +role.innerText);
     if(role.innerText!=="3:3"){
      $(role).closest('tr').find(".edit-button").hide();
      $(role).closest('tr').find(".edit-button").attr('disabled', true);
       $(role).closest('tr').find('.delete-button').hide();
       $(role).closest('tr').find('.delete-button').attr('disabled', true);
       $(role).closest('tr').find(".double-check").attr('disabled', true);
     }
   })
  }
  
  
  function userClearance(userId) {
    $(".id").each((i,id)=>{
  console.log(id.innerText);
  if(id.innerText == userId){
      $(id).closest('tr').find(".edit-button").show();
      $(id).closest('tr').find('.delete-button').hide();
       $(id).closest('tr').find('.delete-button').attr('disabled', true);
      $(id).closest('tr').find(".edit-button").attr('disabled', false);
       
    }
    
  })
  }
   
  function employeeClearance() {
    $(".edit-button").hide()
    $(".edit-button").attr('disabled', true);
    $(".delete-button").hide();
     $(".delete-button").attr('disabled', true);
     $(".addTable").hide();
     $('input[type="submit"]').attr('disabled','disabled');
  }

  
  export {userClearance,managerClearance,employeeClearance}