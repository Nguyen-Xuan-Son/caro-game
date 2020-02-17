const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);

require('./config/middleware')(app);
require('./socket')(server);
require('./controller')(app);

server.listen(process.env.PORT || 9000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
