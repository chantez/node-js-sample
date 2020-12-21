const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


// permite que llegue bien el req.body
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('always run');
    
    next();
});

// add middleware functions
// next es una funcion proveida a esta funcion
app.use('/add-product', (req, res, next) => {
    console.log('in  middleware');
    
    // enviar una respuesta
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button> </form>');
});

app.post('/product', (req, res, next) => {
    

    console.log(req.body);
    
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('in  middleware2');
    
    // enviar una respuesta
    res.send('<h1>Hello from express </h1>');
});


app.listen(3000);