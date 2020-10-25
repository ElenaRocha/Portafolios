const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const appPort = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.broadcast.emit('hi');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('chat message', (message) => {
        const timeNow = new Date();
        const hourMinSec = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
        
        io.emit('chat message', `${hourMinSec} - ${message}`);
    });
}); 

server.listen(appPort, () => console.log('Running on ', appPort));
