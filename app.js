const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected! MongoDB in App.js"));

app.use(cors());
//dev, combined, common, short, tiny 가능
//[HTTP메서드][주소][HTTP상태코드][응답속도][응답바이트]
app.use(morgan("dev"));
//이 부분의 역할은 정적 파일을 서빙하여 클라이언트의 요청에 대한 정적 파일을 제공하는 것입니다
app.use("/", express.static(path.join(__dirname, "public")));
//body-parser 요청의 본문에 있는 데이터를 해석에서 req.body 객체로 만들어줌
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//요청에 동봉된 쿠키를 해석해  req.cookies 객체로 만들어줌
app.use(cookieParser(process.env.COOKIE_SECREAT));
//세션관리
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECREAT,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

module.exports = app;
