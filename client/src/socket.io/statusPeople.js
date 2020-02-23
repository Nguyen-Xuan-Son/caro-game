const statusPeople = socket => () => {
    socket.on('message', message => {
        console.log('statusPeople message: ' + message);
    });
    socket.on('statusPeople', message => {
        console.log('statusPeople message: ' + message);
    });
};

export default statusPeople;
