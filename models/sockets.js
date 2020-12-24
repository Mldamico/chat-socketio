class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", socket => {
      socket.emit("mensaje-bienvenida", "Bienvenido al server");
      socket.on("mensaje-to-server", data => {
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
