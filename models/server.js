const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const Sockets = require("./sockets");
const path = require("path");
class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    this.server = http.createServer(this.app);

    this.io = socketio(this.server);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();
    this.configurarSockets();
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto " + this.port);
    });
  }
}

module.exports = Server;
