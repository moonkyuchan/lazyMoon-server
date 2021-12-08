const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>하위</h1>");
    res.end(`<p>hello server</p>`);
  })
  .listen(8080, () => {
    console.log("8080 포트에서 서버 대기중 입니다.");
  });
