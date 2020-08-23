const receivedCoordinates = socket => (cb) => {
    socket.on('receivedCoordinates', coordinates => cb(coordinates));
};

export default receivedCoordinates;
