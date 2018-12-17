'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/products');

const app = express();
const port = process.env.PORT || 3000;

var url = 'mongodb://localhost:27017/shop';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/api/product', (req, res) => {
    res.status(200).send({ products: [] })
});

app.get('/api/product/:productId', (req, res) => {

});

app.post('/api/product', (req, res) =>{
    console.log('POST /api/product');    
    console.log(req.body);
    
    let product = new Product();

    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored)=>{
        if(err) 
            res.status(500).send({ message: `error al salvar los datos ${err}`});
        
        res.status(200).send({product: productStored});    
    });
});

app.put('/api/product/:productId', (req, res) => {

});

app.delete('/api/product/:productId', (req, res) => {

});


mongoose.connect(url, {useNewUrlParser: true}, ( err, res ) => {
    if(err){
        return console.log(`error en la conexion con DB ${err}`);
    }

    console.log('conexion exitosa');

    app.listen( port, ()=>{
        console.log('api rest hello wold');
    });
});
