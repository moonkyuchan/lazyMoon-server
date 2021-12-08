const fs = require("fs").promises;

fs.writeFile("Node.js/Practice/writeme.txt", "글이 입력됩니다.")
  .then(() => {
    return fs.readFile("Node.js//Practice/writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  });
