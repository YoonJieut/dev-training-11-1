const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

  // 가독성을 위한 단순 함수 래핑
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.');
  }

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
  if (req.url === "/" && req.method === "GET") {
    // console.log( "잘 작동 중")
    fs.readFile('./static/index.html', 'utf8', (err, data)=>{
      if(err){
        serverErrorLog();
      }
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data)
    })
  } else if (req.url === "/css/style.css" && req.method === "GET") {
    fs.readFile('./static/css/style.css', 'utf8', (err, data)=>{
      if(err){
        serverErrorLog();
      }
      res.writeHead(200, {'Content-Type' : 'text/css'});
      res.end(data)
    })
  } else if (req.url === "/js/index.js" && req.method === "GET") {
    fs.readFile('./static/js/index.js', 'utf8', (err, data)=>{
      if(err){
        serverErrorLog();
      }
      res.writeHead(200, {'Content-Type' : 'application/javascript'});
      res.end(data)
    })
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
})


const PORT = 8000;
server.listen(PORT, ()=>{
  console.log(`cli 창에서 컨트롤 누른 후, 옆에 포트 누르면 편리하게 확인 => http://localhost:${PORT}/`)
})