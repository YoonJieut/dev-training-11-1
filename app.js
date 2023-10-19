const http = require('http');
const fs = require('fs');
const sign = require('./model/signUpAsset')
const querystring = require('querystring');

const server = http.createServer((req, res)=>{


console.log(sign);

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
  else if (req.url === "/sub.html" && req.method === "POST") {
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


  // ! POST 방식 데이터 다루기
  if (req.method === "POST" && req.url === "/sub.html"){
    console.log("Post if는 method"+req.method)
    console.log("Post if는 url"+req.url)
    let save = "";

    req.on("data", (chunk)=>{
      // console.log("on-data 작동됨")
      // console.log("data의 chunk 매개변수의 값", chunk);
      // console.log("-------------------------")
      save += chunk.toString(); 
    });

    req.on('end', ()=>{
      const parseSave = querystring.parse(save); // 요청 본문을 파싱
      // 각 변수에, 입력 받은 데이터들을 대입한다.
      const { id, password, passwordTwo, email } = parseSave;
      // console.log('parseSave를 확인한다.'+parseSave);
      sign.id = parseSave.id;
      console.log(`sign이 수정됬는지 테스트`, sign);
      console.log(`form입력 받은 데이터 -> `, parseSave);
      console.log(`form입력 받은 데이터 -> `, id);
      console.log(`form입력 받은 데이터 -> `, password);
      console.log(`form입력 받은 데이터 -> `, passwordTwo);
      console.log(`form입력 받은 데이터 -> `, email);
      
      fsReadFileFunc('./static/sub.html', textTypeList[0]);
    });
  } 

})


const PORT = 8000;
server.listen(PORT, ()=>{
  console.log(`cli 창에서 컨트롤 누른 후, 옆에 포트 누르면 편리하게 확인 => http://localhost:${PORT}/`)
})