const initSocketIO = (server) => {
    const io = require('socket.io').listen(server);

    io.sockets.on('connection', (ws) => {
        console.log('Connected');
        ws.on('subscribeToTimer', (message) => {
            console.log('received: %s', message);
            setInterval(() => {
                ws.emit('timer', new Date().getSeconds());
            }, 1000);
        });
    });
};

module.exports = initSocketIO;
