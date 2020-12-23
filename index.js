const express = require("express");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", () => {
  console.log("Cliente conectado");
});

server.listen(3000, () => {
  console.log("Server corriendo en puerto 8080");
});
