const statusPeople = (ws) => () => {
    ws.emit('statusPeople', "join");
    ws.send('hi');
};

module.exports = statusPeople;
