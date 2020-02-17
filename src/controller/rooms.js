const getRooms = (app) => {
    app.get('/get-rooms', (req, res) => {
        res.json({
            ok: true,
            games: 'games'
        });
    });
};

module.exports = getRooms;
