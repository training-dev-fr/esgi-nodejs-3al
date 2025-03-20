const http = require('http');
const app = require('./app');

const port = 3000;

const server = http.createServer(app);

server.on('listening',() => {
    console.log("server running on port : " + port);
});

server.listen(port);