const http = require('http');
const routes = require('./42-routes');

//const server = http.createServer((req, res) => {

//});

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);