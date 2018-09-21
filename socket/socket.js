var app = require('express')();
var server = require('http').Server(app);
var WebSocket = require('ws');

var wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log(arguments.length)
    console.log('server: receive connection.');

    ws.on('message', function incoming(message) {
        console.log(arguments);
        ws.send('server: reply');
        setTimeout(() => {
            ws.send('再给你补充一条消息');
        }, 2000);
    });

    ws.on('pong', () => {
        console.log('server: received pong from client');
    });

    ws.send('world');


});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);