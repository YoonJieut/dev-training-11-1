const pwCheck = (pw1, pw2)=> {
  if(pw1.localeCompare(pw2)===1){
    return true;
  } else {
    console.log('비밀번호가 다릅니다.');
  }
};

module.exports = pwCheck;

