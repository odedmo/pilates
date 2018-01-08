const express = require('express');
const User = require('./models/User');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

let posts = [{
        message: 'hello'
    },
    {
        message: 'hi'
    }
]

module.exports = function (app) {

    const apiRoutes = express.Router();

    apiRoutes.get('/posts', (req, res, next) => {
        return res.status(200).send(posts);
    });

    apiRoutes.get('/users', async(req, res, next) => {
        try {
            const users = await User.find({}, '-password -__v');
            return res.send(users);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });

    apiRoutes.get('/profile/:id', async(req, res, next) => {
        try {
            const user = await User.findById(req.params.id, '-password -__v');
            return res.send(user);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });

    apiRoutes.post('/register', (req, res, next) => {
        const userData = req.body;
        const user = new User(userData);
        user.save((err, result) => {
            if (err) {
                console.log('saving user error');
            }
            res.sendStatus(200);
        });
    });

    apiRoutes.post('/login', async(req, res, next) => {
        const loginData = req.body;
        const user = await User.findOne({
            email: loginData.email
        });
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(401).send({message: 'invalid email or pasword'});
            }
            let payload = {};
            const token = jwt.encode(payload, 'my-secret');
            res.status(200).send({token});
        });
    });

    app.use('/api', apiRoutes);
};