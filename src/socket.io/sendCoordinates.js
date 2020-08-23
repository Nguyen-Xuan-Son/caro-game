const sendCoordinates = socket => (data) => {
    socket.emit('sendCoordinates', data);
};

export default sendCoordinates;
