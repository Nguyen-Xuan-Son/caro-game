const setSizeBoard = (ws) => {
    ws.on('setSizeBoard', data => {
        console.log("message", data);
    });
};

module.exports = setSizeBoard;
