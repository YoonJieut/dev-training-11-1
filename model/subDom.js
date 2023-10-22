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
  
  console.dir(btn);
  let titleCont = title.value
  let tpCont = textPart.value
  btn.style.visibility = "hidden";
  textPart.addEventListener('input',()=>{
    console.log(tpCont);
    console.log(titleCont);
    if( titleCont !== undefined && tpCont !== undefined ){
      console.log("if 참")
      btn.style.visibility = "visible";
    }
  })
  `
}

module.exports = subDom;