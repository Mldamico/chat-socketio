const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.emit('mensaje-bienvenida', 'Bienvenido al server');
  socket.on('mensaje-cliente', (data) => {
    console.log(data.msg);
  });
});

server.listen(3000, () => {
  console.log('Server corriendo en puerto 3000');
});
