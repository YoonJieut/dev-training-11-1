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
    // ! state의 등장, 객체로 관리하는 것
  }

  for (let i =0; i < id.length; i++){
    // 상당히 절차적이지만, 원리를 이해하기 위해 까다로운 작성식을 모두 작성
    // 메서드로 처리하면 매우 간결
    // ? 여기서 메서드란 어떤 메서드를 말하는 걸까?

    if( id[i] === id[i].toUpperCase() && id[i] !== id[i].toLowerCase()){
      // 대문자와 같은 거 && 소문자가 아닌 것 = 대문자냐?
      // ? 한번만 하면 되는 거아닐까? -> 절자척이란게 이런 의미인가보다.
      state.hasUpperCase = true;
    }
    if( id[i] === id[i].toLowerCase() && id[i] !== id[i].toUpperCase()){
      // 위와 반대
      state.hasLowerCase = true;
    }

    if (state.hasLowerCase || state.hasLowerCase){
      // 둘 중 하나라도 true 면 true를 리턴
      return true;
    }
  }
  return false;
}

console.log(validateId('dbswnsgus'));
console.log(validateId(305));