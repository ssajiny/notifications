// app.js
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// "public" 디렉토리에서 정적 파일 서빙
app.use(express.static(path.join(__dirname, "public")));

// 루트 URL에 대한 요청 처리
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
