

/**
 * 문자열을 내는 함수
 * ESM을 활용한 모듈 적용이 목표다.
 */
export function subDom(){
  console.log('subDom 시작')
  const title = document.getElementById('title');
  console.log(title);
  const textPart = document.getElementById('textPart');
  console.log(textPart);
  const btn = document.getElementById('textsend');
  
  console.log(btn);
  let titleCont = title.textContent
  let tpCont = textPart.textContent

  if( titleCont !== undefined || tpCont !== undefined ){
    btn.ariaDisabled = true;
    console.log(btn.ariaDisabled)
  }else {
    btn.ariaDisabled = false;
    console.log(btn.ariaDisabled)
  }
} 
