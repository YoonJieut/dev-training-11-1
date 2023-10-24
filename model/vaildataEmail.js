function validateEmail(email){
  if(typeof(email)==="string"){
    // 문자열을 배열로 변환
    const emailArray = Array.from(email);
    console.log(email);
    
    
    
  } else {
    console.log(email + "<- 올바른 데이터 타입은 아님")
  }
}
module.exports = validateEmail;