const setSizeBoard = (socket) => (data) => {
    socket.emit('setSizeBoard', data);
};

export default setSizeBoard;
