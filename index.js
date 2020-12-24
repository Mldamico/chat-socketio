const Server = require("./models/server");

const server = new Server();

// io.on("connection", socket => {
//   socket.emit("mensaje-bienvenida", "Bienvenido al server");
//   socket.on("mensaje-to-server", data => {
//     io.emit("mensaje-from-server", data);
//   });
// });

server.execute();
