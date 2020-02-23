const userConnect = (socket) => (data) => {
    socket.emit('userConnect', data);
};

export default userConnect;
