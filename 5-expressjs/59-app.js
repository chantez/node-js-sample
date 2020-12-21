const http = require('http');
const express = require('express');


const app = express();

// add middleware functions
// next es una funcion proveida a esta funcion
app.use((req, res, next) => {
    console.log('in the middleware');

    // permite ir al segundo middleware (.use)
    next();
});

app.use((req, res, next) => {
    console.log('in ANOTHER middleware');
    
    // enviar una respuesta
    res.send('<h1>Hello from express </h1>');
});


app.listen(3000);