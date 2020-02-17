const express = require('express');
const http = require('http');
// const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// app.use(cors());

const server = http.createServer(app);

app.use(bodyParser.json());
const io = require('socket.io').listen(server);

io.sockets.on('connection', (ws) => {
    console.log('Connected');
    ws.on('subscribeToTimer', (message) => {
        console.log('received: %s', message);
        setInterval(() => {
            ws.emit('timer', new Date().getSeconds());
        }, 1000);
    });
});

app.post('/', (req, res) => {
    console.log('req.body', req.body);
    // console.log('res', res);
    res.json({
        ok: true,
        games: 'games'
    });
});

server.listen(process.env.PORT || 9000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
