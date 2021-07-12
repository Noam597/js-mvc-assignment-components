import { deleteEmployee,editInfo} from "../app/model.js";




async function deleteButton() {
    var id = $(this).closest("td").prev('td').prev('td').html();
     console.log(id);
     await deleteEmployee(id);
    $(this).closest('tr').fadeOut(500,function(){$(this).remove()})
  }
  
  function edit() {
    $(".edit-button").click(editButtonDisplay);
    $(".double-check").click(finishEdit);
  }


  function editButtonDisplay() {
    $(this).closest('tr').find(".editable").attr("contenteditable",true);
      $(this).hide();
      $(this).next().show();
  }
  
  
  async function finishEdit() {
    var tr = $(this).closest('tr').find(".editable");
  console.log(tr);
    await editInfo(tr);
    // editable content for the api function
    $(this).closest('tr').find(".editable").attr("contenteditable",false);
    $(this).hide();
    $(this).prev().show();
  }
  
  
  
  
export {deleteButton,edit}