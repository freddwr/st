'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        return console.log(`error en la conexion con DB ${err}`);
    }

    console.log('conexion exitosa');

    app.listen(config.port, () => {
        console.log('api rest hello wold PORT = ' + config.port);
    });
});