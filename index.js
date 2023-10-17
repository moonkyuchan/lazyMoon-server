const { createServer } = require("http");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const httpServer = createServer(app);

httpServer.listen(process.env.PORT, () => {
  console.log(`SERVER LISTNE ${process.env.PORT} in Index.js`);
});
