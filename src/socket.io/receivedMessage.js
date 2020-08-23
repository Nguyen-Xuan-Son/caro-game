const receivedMessage = socket => (cb) => {
    socket.on('receivedMessage', message => cb(message));
};

export default receivedMessage;
