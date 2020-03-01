const sendMessage = (io, ws) => {
    ws.on('sendMessage', message => {
        io.emit('receivedMessage', message);
    });
};

module.exports = sendMessage;
