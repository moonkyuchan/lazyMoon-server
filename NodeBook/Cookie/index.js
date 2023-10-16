const http = require("http");
const fs = require("fs").promises;
const qs = require("querystring");
const url = require("url");
const path = require("path");

const filePath = path.join(__dirname, "cookie.html");

const parseCookies = (cookie = "") => {
  cookie
    .split(";")
    .map((ele) => ele.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log("REQ:", req.headers);
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();

      expires.setMinutes(expires.getMinutes() + 5);
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
    } else if (cookies.name) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      try {
        const data = await fs.readFile(filePath);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } catch (err) {
        console.log(err);
      }
    }
  })
  .listen(8084, () => {
    console.log("8084 Port Listening");
  });
