const express = require('express');
const http = require('http');
const app = express();

const initSocketIO = require('./socket');
const initController = require('./controller');
const initMiddleware = require('./config/middleware');

const server = http.createServer(app);

initMiddleware(app);
initSocketIO(server);
initController(app);

server.listen(process.env.PORT || 9000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
