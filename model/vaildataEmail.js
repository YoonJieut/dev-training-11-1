function validateEmail(email){
  if(typeof(email)==="string"){

  } else {
    console.log(email + "<- 올바른 데이터 타입은 아님")
  }
}
module.exports = validateEmail;