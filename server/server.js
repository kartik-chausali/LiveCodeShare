/* eslint-disable no-undef */
const express = require('express');
const app = express();
const http = require('http')
const {Server} = require('socket.io');
const PORT = process.env.PORT || 3000;


const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket)=>{
    console.log(`connected with socket ${socket.id}`);
})

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})