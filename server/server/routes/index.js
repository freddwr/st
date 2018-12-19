'use strict'


const express = require('express');
const api = express.Router();

const auth = require('../middlewares/auth');

const productController = require('../controllers/product');

api.get('/product', productController.getProducts);
api.get('/product/:productId', productController.getProduct);
api.post('/product', productController.saveProduct);
api.put('/product/:productId', productController.updateProduct);
api.delete('/product/:productId', productController.deleteProduct);

api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'tienes acceso a esta ruta ' });
});


module.exports = api;