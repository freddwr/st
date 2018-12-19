'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');


function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName
    });

    user.save((err) => {
        if (err) return res.status(500).send({ message: `error al crear usuaario ${err}` });

        return res.status(200).send({ token: service.createToken(user) });
    });
}

function signIn(req, res) {

}

module.exports = {
    signUp,
    signIn
}