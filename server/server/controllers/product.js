'use strict'

const Product = require('../models/products');


function getProduct (req, res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err)
            return res.status(500).send({ message: `error en la peticion ${err}` });
        if (!product)
            return res.status(404).send({ message: `error no existe producto ${product}` });

        res.status(200).send({ product });
    });
}

function getProducts (req, res){
    Product.find({}, (err, products) => {
        if (err)
            return res.status(500).send({ message: `error en la peticion ${err}` });
        if (!products)
            return res.status(404).send({ message: `error no existen datos ${products}` });

        res.status(200).send({ products });
    });
}

function saveProduct (req, res){
    console.log('POST /api/product');
    console.log(req.body);

    let product = new Product();

    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
        if (err)
            res.status(500).send({ message: `error al salvar los datos ${err}` });

        res.status(200).send({ product: productStored });
    });
}
function updateProduct (req, res){
    let productId = req.params.productId;
    let update = req.body;

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) {
            res.status(500).send({ message: `error al modificar dato ${err}` });
        }

        res.status(200).send({ product: productUpdated });

    });
}

function deleteProduct (req, res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) {
            res.status(500).send({ message: `error al borrar dato ${err}` });
        }

        product.remove(err => {
            if (err)
                res.status(500).send({ message: `error al borrar dato ${err}` });

            res.status(200).send({ message: 'se elimino correctamente' });
        });

    });
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}