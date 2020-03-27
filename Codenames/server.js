const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server)


server.listen(port, () => console.log(`Listening on port ${port}`));



io.on("connection", socket => {
    console.log("New client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
    socket.on('new player', function () {
        console.log('new player')
        players[socket.id] = {
            x: 300,
            y: 300
        };
    });

    socket.on('movement', function (data) {
        var player = players[socket.id] || {};
        if (data.left) {
            player.x -= 5;
        }
        if (data.up) {
            player.y -= 5;
        }
        if (data.right) {
            player.x += 5;
        }
        if (data.down) {
            player.y += 5;
        }
    });
});

var players = {};



setInterval(function () {
    io.sockets.emit('state', players);
}, 1000 / 60);
