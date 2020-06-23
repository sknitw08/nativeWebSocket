const http = require('http');
const ws = require('ws');

const server = http.createServer((req, res) => {
    res.end('Connected to server');
});

const wss = new ws.Server({server});
wss.on('headers', (headers, req) => {
    console.log(headers);
});

wss.on('connection', (ws, req) => {
    ws.send('Welcome to the websocket server!!');
    ws.on('message', (msg) => {
        console.log(msg);
    });
});

server.listen(4000);