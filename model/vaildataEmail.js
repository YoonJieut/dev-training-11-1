function validateEmail(email){
  if(typeof(email)==="string"){
    // 문자열을 배열로 변환
    const emailArray = Array.from(email);
    console.log(email);
    
    // '@'과 '.' 문자를 필터링
    //배열에서 특정 조건을 만족하는 요소만 추출하는 filter의 등장
    const filterArray = emailArray.filter(char => {
      if(char === '@'){
        return true;
      } else if (char === '.'){
        return true;
      } else {
        return false;
      }
    });

    // 필터링된 배열에서 '@'과 '.' 문자의 존재 여부를 확인
    // inclues() 메서드는 배열 메서드 - 공식문서 확인 바람
    const hasAtSign = filterArray.includes('@');
    const hasDot = filterArray.includes('.');

    return hasAtSign && hasDot ; 
    // 두개의 값이 모두 참이면 참을 반환 < 처음보는 작성법
    
  } else {
    console.log(email + "<- 올바른 데이터 타입은 아님")
  }
}

validateEmail('Yoonjieut@gmail.com');
module.exports = validateEmail;