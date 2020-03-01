const initSocketIO = (server) => {
    const io = require('socket.io').listen(server);

    io.sockets.on('connection', (ws) => {
        console.log('Socket connected');
        require('./setSizeBoard')(ws);
        require('./userConnect')(ws);
        require('./message')(io, ws);
        require('./handleCoordinates')(io, ws);
    });
};

module.exports = initSocketIO;
