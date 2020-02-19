const setSizeBoard = (socket) => (data) => {
    console.log("data", data);
    socket.emit('setSizeBoard', data);
};

export default setSizeBoard;
