function validateId(id) {
  // 타입검사
  if (typeof id != 'string') {
    return false;
    // 유효성 검사 측면에서는 error를 리턴하기 보단
    // false를 리턴하는 것이 좋은 선택이 될 수 있다.
    // ? 왜? 사용자 측면에서 다시 작성해야되는 것은 좋은 경험이 아니기 때문
  }
  let state = {
    hasLowerCase : false,
    hasUpperCase : false,
    // 두 개의 boolean 값을 변수로 관리할 수 있겠지만,
    // 객체로 관리하는 것이 더 편하다.
    // 관용적으로 이것을 '상태'라는 뜻의 state라고 한다.
    // ! state의 등장
  }

  

  return false;
}

console.log(validateId('dbswnsgus'));
console.log(validateId(305));