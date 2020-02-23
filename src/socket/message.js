const sendMessage = (ws) => {
    ws.on('sendMessage', message => {
        console.log("server message: " + message);
        ws.emit('receivedMessage', message);
    });
};

module.exports = sendMessage;
