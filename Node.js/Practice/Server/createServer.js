const http = require("http");
const fs = require("fs").promises;
const url = require("url");

http
  .createServer((req, res) => {
    const _url = req.url;
    const queryData = url.parse(_url, true).query;
    const data = fs.readFile('"Node.js/Practice/Server/server2.html');
    console.log(_url);
    console.log(queryData.id);
    if (_url === "/") {
      _url = data;
    }
    res.writeHead(200);
    res.end(data);
  })
  .listen(9001, () => {
    console.log("9000에서 대기중");
  });
