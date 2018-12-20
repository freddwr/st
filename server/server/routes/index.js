'use strict'


const express = require('express');
const api = express.Router();

const auth = require('../middlewares/auth');

const userCtrl = require('../controllers/user');
const productController = require('../controllers/product');


api.get('/product', productController.getProducts);
api.get('/product/:productId', productController.getProduct);
api.post('/product', productController.saveProduct);
api.put('/product/:productId', productController.updateProduct);
api.delete('/product/:productId', productController.deleteProduct);

api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);

api.post('/close', auth, userCtrl.closeAuth);

api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'tienes acceso a esta ruta ' });
});


module.exports = api;