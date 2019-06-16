const express = require('express');
const webSocket = require('ws');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const webSocketServer = webSocket.Server;
const server = http.createServer(app);

const config = require('./config');

const openWebSocket = new webSocketServer({server});

// app.use(express.static(__dirname + "/public"));

// For parsing application/json and parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Test ReactJS and NodeJS in once folder.
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
  
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});
// ======

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}  

server.listen(config.PORT, () => console.log(`Server lister at port ${config.PORT}`));

// openWebSocket.on('listener', (res) => {
//     console.log(res);
// });
