/**
 * 이메일 칸을 아스키 코드로 바꾸어 비교합니다.
 * 
 * @param {string} value 이메일 인풋 값을 작성받습니다.
 * @return {boolean} 기본 값은 false, 맞을 시 true 를 배출합니다.
 */

const mailCheck = (value)=>{
  let result = false;
  
  if(typeof(value)==="string"){
    // 초기값들
    let valueArr = [...value].map(x => x.charCodeAt());
    let atSignUni = "@".charCodeAt();
    let dotUni = ".".charCodeAt();
    let newArr = [];


    // 배열을 순회하며 atSign을 나누고, 쪼개며 다른배열을 배출
    for (let i =0; i<valueArr.length; i++){
      if(valueArr[i] === atSignUni){
        newArr= valueArr.slice(i+1);
        break;
      }
    }
    // 나머지 배열을 다시 검사
    newArr.map(x=> {
      if(x === dotUni ){
      return result = true;
      }
    });
  }
  return result;
};

module.exports= mailCheck;