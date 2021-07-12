// import * as Model from "../app/model.js";
import * as View from "../app/view.js";
import { secondLogin } from "../components/keyBoard/passwordIdentifier.js";





function init() {
  View.firstLogin();
  $("#loginButton").click(secondLogin)
}






export {init};


