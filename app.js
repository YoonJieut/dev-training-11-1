const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const sign = require('./model/signUpAsset');
const subPage = require('./model/subPage');
const server = http.createServer((req, res)=>{

  // 가독성을 위한 단순 함수 래핑
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.');
  }

  // fs 모델 가독성을 위한 래핑
  const textTypeList = [
    "text/html",
    "text/css",
    'application/javascript'
  ]
  function fsReadFileFunc(url, textType){
    fs.readFile(url, 'utf8', (err, data)=>{
      if(err){
        serverErrorLog();
      }
      res.writeHead(200, {'Content-Type' : textType });
      res.end(data)
    })
  }

  console.log('어떤 요청이 들어오는지 확인', 'url ->',req.url, "method ->", req.method);

  // * 메인 페이지 라우트 시작
  if (req.url === "/" && req.method === "GET") {
    // console.log( "잘 작동 중")
    fsReadFileFunc("./static/index.html",textTypeList[0]);
  } 
  else if (req.url === "/css/style.css" && req.method === "GET") {
    fsReadFileFunc("./static/css/style.css", textTypeList[1]);
  } 
  
  // * 서브페이지 라우트 
  // * end에 텍스트를 리턴하는 함수를 넣어 생성
  else if (req.url === "/sub.html" && req.method === "POST") {
    let save = "";
    req.on("data", (chunk)=>{
      save += chunk.toString(); 
    });
    req.on('end', ()=>{
      const parseSave = querystring.parse(save); // 요청 본문을 파싱
      const { id, password, passwordTwo, email } = parseSave;

      // 깊은 복사를 통해 파일 보관하기
      const newSign = JSON.parse(JSON.stringify(sign));
      
      // 데이터 넣어두기
      newSign.id = id;
      newSign.password = password;
      newSign.passwordTwo = passwordTwo;
      newSign.email = email;
      // console.log(newSign);

      res.writeHead(200, {'Content-Type' : "text/html ; charset=utf-8" });
      res.end(
        //* 서프페이지 만들 모듈들어갈 자리
        subPage(newSign.id)
        );
    });
  }  
  else if (req.url === "/css/substyle.css" && req.method === "GET") {
    fsReadFileFunc("./static/css/substyle.css", textTypeList[1]);
  } 
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
})


const PORT = 8000;
server.listen(PORT, ()=>{
  console.log(`cli 창에서 컨트롤 누른 후, 옆에 포트 누르면 편리하게 확인 => http://localhost:${PORT}/`)
})