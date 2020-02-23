const statusPeople = (ws) => () => {
    ws.emit('statusPeople', "join");
    // setInterval(() => {
    //     ws.emit('statusPeople', new Date().getSeconds());
    // }, 1000);
    ws.send('hi');
};

module.exports = statusPeople;
