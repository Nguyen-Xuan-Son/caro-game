import openSocket from 'socket.io-client';
import setSizeBoard from "./setSizeBoard";
const socket = openSocket('http://localhost:9000');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

setSizeBoard(socket);

export {
    subscribeToTimer,
    setSizeBoard
};
