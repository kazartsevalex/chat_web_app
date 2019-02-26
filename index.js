const express = require('express');
const socket = require('socket.io');

var app = express();
var server = app.listen(9090, () => {
  console.log('Listening on port 9090');
});

app.use(express.static('public'));

var io = socket(server);
io.on('connection', sock => {
  console.log('Socket connection made', sock.id);
});
