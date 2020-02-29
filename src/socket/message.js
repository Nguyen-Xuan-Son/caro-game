const sendMessage = (io, ws) => {
    ws.on('sendMessage', message => {
        console.log("server message: " + message);
        io.emit('receivedMessage', message);
    });
};

module.exports = sendMessage;
