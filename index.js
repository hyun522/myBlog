//서버를 설정하는 파일
const express = require('express');
const app = express(); // 서버 프로그램 작성에 필요한 수많은 명령어를 담고 있는 함수 (npm install express 설치해야 사용 가능)
const port = 3000;

//※필수 - 해당 사이트 서버에 접속시 성공일 경우 콘솔창 실행 실패일 경우 뜨지 않음
app.listen(port, () => {
  console.log('서버가 잘 실행되고 있습니다.');
});

//ejs 파일형식을 node.js에서 사용하기 위한 시작구문
app.set('view engine', 'ejs');

//express에서 제공하는 정적 파일 - img, css, javascript 정적파일들을 ejs 파일 내에서 사용하려면
app.use(express.static('public'));

//라우터 세팅(요청, 응답)
app.get('/', (req, res) => {
  //console.log와 같은 기능
  //res.send('메인페이지 접속완료');

  //메인페이지 경로 요청시 views 폴더에 있는 index.ejs 파일을 보여준다.
  res.render('index.ejs');
});

app.get('/sub', (req, res) => {
  // res.send('서브페이지 접속완료');
  res.render('sub.ejs');
});
