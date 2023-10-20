const pwCheck = (pw1, pw2)=> {
  if(typeof(pw1)==="string" && typeof(pw2)==="string"){
    if(pw1.localeCompare(pw2)===0){
      return true;
    } else {
      console.log('비밀번호가 다릅니다.');
      return false
    }
  }
};

export default pwCheck;

