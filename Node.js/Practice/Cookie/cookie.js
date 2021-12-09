const http = require("http");

http
  .createServer((req, res) => {
    console.log(req, res);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie~");
  })
  .listen(8083, () => {
    console.log("대기중");
  });
