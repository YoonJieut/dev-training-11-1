/**
 * 대소문자를 비교하여 대문자와 소문자를 둘 다 포함하면
 * true를 냅니다.
 * 
 * @param {string} value id 문자열
 * @return {Boolean} 비교 후 참이면 true를 냅니다.
 */
const idCheck = (value)=>{
  if(typeof(value) === "string" ){
    // 문자열을 배열로 만들기
    let valueArr =  [];
    valueArr = [...value];

    // 비교용 대소문자 배열
    let upperValue = value.toUpperCase();
    let upperArr = [];
    upperArr = [...upperValue];

    let lowerValue = value.toLowerCase();
    let lowerArr = [];
    lowerArr = [...lowerValue];

    // * 대문자 배열과 비교하기
    let upperResult = false;
    let lowerResult = false;

    for(let i=0; i<valueArr.length; i++ ){
      if(valueArr[i] === upperArr[i]){
        upperResult = true;
        break;
      }
    }
    for(let i=0; i<valueArr.length; i++ ){
      if(valueArr[i] === lowerArr[i]){
        lowerResult = true;
        break;
      }
    }
    
    if( upperResult === true && lowerResult === true){
      return true;
    } else{
      return false;
    }
  }
};
module.exports = idCheck;