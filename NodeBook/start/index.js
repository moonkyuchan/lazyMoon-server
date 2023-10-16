const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      console.log(req.method, req.url);
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./lifeCoding/index.html");
          res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
          return res.end(data);
        } else if (req.url === "/about") {
          const data = await fs.readFile("./lifeCoding/1.html");
          res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
          return res.end(data);
        }
      }

      const data = await fs.readFile("./lifeCoding/1.html");
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8081, () => {
    console.log("8081 Server listening");
  });
