const express = require('express');
const { restart } = require('nodemon');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('in  middleware');
    
    // enviar una respuesta
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button> </form>');
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product test', path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    })
});

router.post('/add-product', (req, res, next) => {
    
    products.push({title: req.body.title});
    console.log(products);
    
    res.redirect('/');
});

exports.routes = router;
exports.products = products;