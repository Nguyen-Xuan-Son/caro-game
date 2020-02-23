import openSocket from 'socket.io-client';
import setSizeBoard from './setSizeBoard';
import userConnect from './userConnect';
import statusPeople from './statusPeople';
import sendMessage from './sendMessage';
import receivedMessage from './receivedMessage';

const socket = openSocket('http://localhost:9000');

const setSizeBoardUse = setSizeBoard(socket);
const userConnectUse = userConnect(socket);
const statusPeopleUse = statusPeople(socket);
const sendMessageUse = sendMessage(socket);
const receivedMessageUse = receivedMessage(socket);

export {
    setSizeBoardUse,
    statusPeopleUse,
    sendMessageUse,
    receivedMessageUse,
    userConnectUse
};
