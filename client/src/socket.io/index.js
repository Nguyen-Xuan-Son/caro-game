import openSocket from 'socket.io-client';
import setSizeBoard from './setSizeBoard';
import userConnect from './userConnect';
import statusPeople from './statusPeople';

const socket = openSocket('http://localhost:9000');

const setSizeBoardUse = setSizeBoard(socket);
const userConnectUse = userConnect(socket);
const statusPeopleUse = statusPeople(socket);

export {
    setSizeBoardUse,
    statusPeopleUse,
    userConnectUse
};
