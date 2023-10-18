const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

  // 가독성을 위한 단순 함수 래핑
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.');
  }

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
  // 라우팅 처리 제작, 2개의 요청 데이터를 확인해야 한다.
  // 1. 요청 URL
  // 2. 요청 METHOD

  // 메인 페이지 라우트
  if (req.url === "/" && req.method === "GET") {
    // console.log( "잘 작동 중")
    fsReadFileFunc("./static/index.html",textTypeList[0]);
  } 
  else if (req.url === "/css/style.css" && req.method === "GET") {
    fsReadFileFunc("./static/css/style.css", textTypeList[1]);
  } 
  
  // 서브페이지 라우트
  else if (req.url === "/sub.html" && req.method === "GET") {
    fsReadFileFunc("./static/sub.html", textTypeList[0]);
  }  
  else if (req.url === "/css/substyle.css" && req.method === "GET") {
    fsReadFileFunc("./static/css/substyle.css", textTypeList[1]);
  } 

  // js 파일 라우트
  else if (req.url === "/model/signUpAsset.js" && req.method === "GET") {
    fsReadFileFunc("./static/css/style.css", textTypeList[2]);
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