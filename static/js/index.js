// const idCheck = require('model/idCheck.js');
// const mailCheck = require('/model/mailCheck');
// const pwCheck = require('/model/pwCheck');


console.log('index.js 실행')

  const email = document.getElementById('email');
  const submitBtn = document.getElementById('submit');
  const pw = document.getElementById('pw');
  const pw2 = document.getElementById('pw2');
  const id = document.getElementById('id');


  // submitBtn.style.visibility = "hidden";


  email.addEventListener('input',()=>{
    if( idCheck(id.value)=== true && mailCheck(email.value)=== true && pwCheck(pw.value, pw2.value)=== true ){
      console.log("if 참")
      submitBtn.style.visibility = "visible";
    }
  });