import { idCheck } from '/model/idCheck.js';
import { mailCheck } from '/model/mailCheck.js';
import { pwCheck } from '/model/pwCheck.js';

  const email = document.getElementById('email');
  const submitBtn = document.getElementById('submit');
  const pw = document.getElementById('pw');
  const pw2 = document.getElementById('pw2');
  const id = document.getElementById('id');


  submitBtn.style.visibility = "hidden";


  email.addEventListener('input',()=>{
    if( idCheck(id.value)=== true && mailCheck(email.value)=== true && pwCheck(pw.value, pw2.value)=== true ){
      console.log("if 참")
      submitBtn.style.visibility = "visible";
    }
  });