// import
const http = require('http');

//function rqListener(req, res){
//}

//http.createServer(rqListener);

const server = http.createServer(function(req, res){
    console.log(req)
});

server.listen(3000);