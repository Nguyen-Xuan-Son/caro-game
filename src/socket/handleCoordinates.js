const sendCoordinates = (io, ws) => {
    ws.on('sendCoordinates', coordinates => {
        io.emit('receivedCoordinates', coordinates);
    });
};

module.exports = sendCoordinates;
