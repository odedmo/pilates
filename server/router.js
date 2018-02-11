const express = require('express');
const User = require('./models/User');

const auth = require('./auth');

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

    apiRoutes.post('/register', auth.register);

    apiRoutes.post('/login', auth.login)

    app.use('/api', apiRoutes);
};