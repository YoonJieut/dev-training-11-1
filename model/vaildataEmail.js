function validateEmail(email){
  if(typeof(email)==="string"){
    // 문자열을 배열로 변환
    const emailArray = Array.from(email);
    console.log(email);
    
    // '@'과 '.' 문자를 필터링
    const filterArray = emailArray.filter(char => {
      if(char === '@'){
        return true;
      } else if (char === '.'){
        return true;
      } else {
        return false;
      }
    });
    
  } else {
    console.log(email + "<- 올바른 데이터 타입은 아님")
  }
}

validateEmail('Yoonjieut@gmail.com');
module.exports = validateEmail;