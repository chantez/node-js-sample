// import
const http = require('http');
const fs = require('fs');

//function rqListener(req, res){
//}

//http.createServer(rqListener);

const server = http.createServer(function(req, res){
   // console.log(req.url, req.method, req.headers);


    //process.exit();
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        
    
        res.write('<head><title>first page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];
        // listen for data event
        req.on('data', (chunk) => {
            console.log(chunk);
            console.log(body);

            body.push(chunk);
            console.log(body);

        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log('end');
            fs.writeFile('message3.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');

                console.log('err');
                return res.end();
            } );
            console.log(parsedBody);

        });

        console.log('here');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }



    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    

    res.write('<head><title>first page</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);