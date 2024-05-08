const ws = require('ws'); // import ws library
const server = new ws.Server({ port: "3000"}); // create ws server instance with port

server.on('connection', socket => {
    socket.on('message', (message) => {
        socket.send("Hello user " + message);
    });
});