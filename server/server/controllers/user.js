'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services')

function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    });

    user.avatar = user.gravatar();

    user.save((err) => {
        if (err) return res.status(500).send({ message: `error al crear usuaario ${err}` });

        return res.status(200).send({ token: service.createToken(user) });
    });
}

function signIn(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err });

        if (!user) return res.status(404).send({ message: `el usuario no existe : ${req.body.email}` });

        return user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return res.status(500).send({ message: `error al ingresar ${err}` });

            if (!isMatch) return res.status(404).send({ message: `no existe el usuario ${req.body.email}` });

            req.user = user;

            return res.status(200).send({ message: `logueo correcto ${req.body.email}`, token: service.createToken(user) })
        });
    }).select('_id email + password');
}

function closeAuth(req, res) {
    User.findOneAndDelete({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(404).send({ message: 'error' });

            return res.status(200).send({ message: 'cuenta cerrada' });
        })
        .catch(err => {
            if (err) return res.status(500).send({ message: 'error en el server' });
        })
}

module.exports = {
    signUp,
    signIn,
    closeAuth
}