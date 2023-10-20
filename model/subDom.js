

/**
 * 문자열 반환 로직
 */
function subDom(){
  return `console.log('subDom 시작')
  const title = document.getElementById('title');
  console.log(title);
  const textPart = document.getElementById('textPart');
  console.log(textPart);
  const btn = document.getElementById('textsend');
  
  console.log(btn);
  let titleCont = title.textContent
  let tpCont = textPart.textContent
  btn.style.visibility = hidden;

  textPart.addEventListener('change',()=>{
    if( titleCont !== undefined && tpCont !== undefined ){
      btn.style.visibility = visible;
    }
  })
  `
}

module.exports = subDom;