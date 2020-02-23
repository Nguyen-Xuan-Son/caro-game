const sendMessage = socket => (data) => {
    socket.emit('sendMessage', data);
};

export default sendMessage;
