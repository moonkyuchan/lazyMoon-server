// const fs = require("fs");

// fs.readFile("Node.js/Practice/readme.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
//   console.log(data.toString());
// });

// 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 어렵다. 따라서 fs 모듈을 프로미스 형식으로 바꿔주는 방법을 사용합니다.

const fs = require("fs").promises;

fs.readFile("Node.js/Practice/readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
