const setSizeBoard = (ws) => {
    ws.on('userConnect', data => {
        require('./statusPeople')(ws)(null);
    });
};

module.exports = setSizeBoard;
